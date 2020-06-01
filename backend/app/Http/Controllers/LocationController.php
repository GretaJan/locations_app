<?php

namespace App\Http\Controllers;

use App\Location;
use Illuminate\Http\Request;
use App\Repositories\LocationRepository;
use App\User;

class LocationController extends Controller
{
    protected $location = null;
    public function __construct(LocationRepository $location)
    {
        $this->location = $location;
    }

    public function showLocations($user_id)
    {
        $locations = $this->location->getLocations($user_id);
        return $locations;
    }

    public function showLocation($user_id, $location)
    {
        $location = $this->location->getLocation($user_id, $location);
        return $location;
    }

    public function createLocation(Request $request, $user_id)
    {
        $new_location = $this->location->createLocation($request, $user_id);
        return $new_location;
    }

}
