<?php

namespace App\Repositories;

use JasonGuru\LaravelMakeRepository\Repository\BaseRepository;
use Illuminate\Http\Request;
use App\Location;
use App\User;
use App\Http\Resources\Location as LocationResource;

/**
 * Class LocationRepository.
 */
class LocationRepository
{
    public function getLocations($user)
    {
        $locations = Location::where('user_id', $user)->orderBy('created_at')->paginate(10);
        return LocationResource::collection($locations);
    }

    public function getLocation($user, $location)
    {
        $overview = Overview::findOrFail($location->id)->where('user_id', $user);
        // $overview = Overview::where('user_id', $user)->paginate(5);
        return overviewResource::collection($overview);
    }

    public function createLocation($request, $user)
    {
        $user = User::findOrFail($user);
        $location = new Location();
        $location->user_id = $user->id;
        $location->longitude = $request->longitude;
        $location->latitude = $request->latitude;
        $location->started_at = $request->started_at;
        $location->ended_at = $request->ended_at;
        $location->worked_today = $request->worked_today;
        $location->save();

        return new locationResource($location);
    }
}
