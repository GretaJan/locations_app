<?php

namespace App\Repositories;

use JasonGuru\LaravelMakeRepository\Repository\BaseRepository;
use App\User;
use App\Overview;
use App\Locations;
use App\Http\Resources\Overview as overviewResource;

use Carbon\Carbon;

/**
 * Class OverviewRepository.
 */
class OverviewRepository
{
    public function getOverviews($user)
    {
        $overviews = Overview::where('user_id', $user)->paginate(5);
        return overviewResource::collection($overviews);
    }

    public function getOverview($user, $overview)
    {
        $overview = Overview::where('user_id', $user)->findOrFail($overview);
        return overviewResource::collection($overview);
    }

    public function createOverview($request, $user)
    {
        $user = User::findOrFail($user);
        $overview = new Overview();
        $overview->user_id = $user->id;
        // $overview->login_at = $request->login_at;
        $overview->logout_at = $request->logout_at;
        $overview->lunch_start = $request->lunch_start;
        $overview->lunch_end = $request->lunch_end;
        $convert_login_h = Carbon::parse($request->login_at)->format('H');
        $convert_login_i = Carbon::parse($request->login_at)->format('i');
        $convert_logout_h = Carbon::parse($request->logout_at)->format('H');
        $convert_logout_i = Carbon::parse($request->logout_at)->format('i');
        $convert_lunch_start_h = Carbon::parse($request->lunch_start)->format('H');
        $convert_lunch_start_i = Carbon::parse($request->lunch_start)->format('i');
        $convert_lunch_end_h = Carbon::parse($request->lunch_end)->format('H');
        $convert_lunch_end_i = Carbon::parse($request->lunch_end)->format('i');
        $worked_until = $convert_lunch_end_i;
        $overview->save();

        return new overviewResource($overview);
    }
}
