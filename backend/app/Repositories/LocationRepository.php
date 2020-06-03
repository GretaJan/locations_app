<?php

namespace App\Repositories;

use JasonGuru\LaravelMakeRepository\Repository\BaseRepository;
use Illuminate\Http\Request;
use App\Location;
use App\User;
use App\Overview;
use App\Http\Resources\Location as LocationResource;
use Carbon\Carbon;

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

    public function getDailyLocations($user, $overview_id)
    {
        $overview = Overview::where('user_id', $user)->findOrFail($overview_id);
        $locations = Location::where('user_id', $user)->get();

        $locations_array = [];
        $overview_parsed = Carbon::parse($overview->created_at)->format('Y-m-d');
        foreach($locations as $location) {
            $location_parsed = Carbon::parse($location->created_at)->format('Y-m-d');
            if($location_parsed === $overview_parsed)
            {
                array_push($locations_array, $location);
            }
        }
        
        return LocationResource::collection($locations_array);
    }

    public function getLocation($user, $location)
    {
        $location = Location::where('user_id', $user)->findOrFail($location);
        return new LocationResource($location);
    }

    public function createLocation($request, $user)
    {
        $user = User::findOrFail($user);
        $location = new Location();
        $location->user_id = $user->id;
        $location->longitude = $request->longitude;
        $location->latitude = $request->latitude;
        // $location->started_at = $request->started_at;
        $location->ended_at = $request->ended_at;
        $location->worked_today = $request->worked_today;
        $location->save();

        return new LocationResource($location);
    }
}
