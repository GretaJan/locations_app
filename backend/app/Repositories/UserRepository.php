<?php

namespace App\Repositories;

use JasonGuru\LaravelMakeRepository\Repository\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Overview;
use App\Http\Resources\User as UserResource;
//use Your Model

/**
 * Class UserRepository.
 */
class UserRepository 
{
    /**
     * @return string
     *  Return the model
     */
    public function getAllUsers()
    {
        $users = User::paginate(10);
        return UserResource::collection($users);
    }

    public function getUserPersonal($request)
    {
        return new UserResource($request->user());
    }
    
    public function getUser($user)
    {
        $user = User::findOrFail($user);
        return new UserResource($user);
    }

    public function login($request)
    {
        $request->validate([
            "username" => "required|min:3|max:100",
        ]);

        $userCredentials = request(["username", "password"]);

        if(!Auth::attempt($userCredentials)) 
        {
            return response()->json([
                'message' => 'Incorrect credentials. Please try again'
            ], 401);
        }

        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;

        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => "Bearer",
        ]);
    }

    public function register($request)
    {
        // $request->validate([
        //     'name' => 'required|string',
        //     'password' => 'required|min:5|confirmed',
        // ]);

        $user = new User();
        $user->role = 'worker';
        $user->username = $request->username;
        $user->name = $request->name;
        $user->surname = $request->surname;
        $user->image = $request->image;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return new UserResource($user);
    }

    public function storeWorkedHours($user)
    {
        $user = User::findOrFail($user);
        $overview = Overview::where('user_id', $user->id);
        foreach($overview->worked_until as $time)
        {
            $workedHours += $time;
        }

        if($workedHours !== $user->worked_hours) {
            $user->worked_hours = $workedHours;
            $user->save();
        } else {
            $user->worked_hours = $user->worked_hours;
        }
      
        return new UserResource($user);
    }

    public function editPrivate($request, $user)
    {
        $request->validate([
            'name' => 'required|string',
        ]);
        $user = User::findOrFail($user);
        $user->username = $request->username;
        $user->name = $request->name;
        $user->surname = $request->surname;
        $user->image = $request->image;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return new UserResource($user);
    }
    public function editAdmin($request, $user)
    {
        $request->validate([
            'name' => 'required|string',
        ]);
        $user = User::findOrFail($user);
        $user->username = $request->username;
        $user->name = $request->name;
        $user->surname = $request->surname;
        $user->image = $request->image;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->email = $request->email;
        $user->password = bcrypt($user->password);
        $user->save();
        return new UserResource($user);
    }

    public function logout($request)
    {
        $request->user()->token()->revoke();
        $response = [
            'message' => "Successfully logget out"
        ];
        return response()->json($response);
    }

    public function delete($user)
    {
        $user->delete();
        return new CategoryResource($user);
    }
}
