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

    public function getLastLocations()
    {
        $last_locations = $this->location->getLastLocations();
        return $last_locations;
    }

    public function getLastLocation($user_id)
    {
        $last_location = $this->location->getLastLocation($user_id);
        return $last_location;
    }

    public function showLocation($user_id, $location_id)
    {
        $location = $this->location->getLocation($user_id, $location_id);
        return $location;
    }

    public function getDailyLocations($user_id, $overview_id)
    {
        $locations = $this->location->getDailyLocations($user_id, $overview_id);
        return $locations;
    }

    public function createLocation(Request $request, $user_id)
    {
        $new_location = $this->location->createLocation($request, $user_id);
        return $new_location;
    }

}
