<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\UserRepository;

class UserController extends Controller
{
    protected $user = null;

    public function __construct(UserRepository $user)
    {
        $this->user = $user;
    }
    public function showUsers()
    {
        $users = $this->user->getAllUsers();
        return $users;
    }

    public function showUserPersonal(Request $request)
    {
        $user = $this->user->getUserPersonal($request);
        return $user;
    }

    public function showUser($user_id)
    {
        $user = $this->user->getUser($user_id);
        return $user;
    }


    public function login(Request $request)
    {
        $login_status = $this->user->login($request);
        return $login_status;
    }
    
    public function createUser(Request $request)
    {
        $new_user = $this->user->register($request);
        return $new_user;
    }

    public function storeWorkedHours(User $user)
    {
        $user = $this->user->storeWorkedHours($user);
        return $user;
    }

    public function editPrivate(Request $request, User $user)
    {
        $user = $this->user->editPrivate($request, $user);
        return $user;
    }

    public function editAdmin(Request $request, User $user)
    {
        $user = $this->user->editAdmin($request, $user);
        return $user;
    }

    public function logout(Request $request)
    {
        $response = $this->user->logout($request);
        return $response;
    }

    public function delete(User $user)
    {
        $response = $this->user->delete($user);
        return $response;
    }
}
