<?php

namespace App\Repositories;

use JasonGuru\LaravelMakeRepository\Repository\BaseRepository;
use App\User;
use App\Overview;
use App\Http\Resources\Overview as overviewResource;
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
        $overview = Overview::findOrFail($overview->id)->where('user_id', $user);
        // $overview = Overview::where('user_id', $user)->paginate(5);
        return overviewResource::collection($overview);
    }

    public function createOverview($request, $user)
    {
        $user = User::findOrFail($user);
        $overview = new Overview();
        $overview->user_id = $user->id;
        $overview->login_at = $request->login_at;
        $overview->logout_at = $request->logout_at;
        $overview->lunch_start = $request->lunch_start;
        $overview->lunch_end = $request->lunch_end;
        $overview->worked_until = ($request->login_at + $request->lunch_end) - ($request->lunch_start + $request->lunch_end);
        $overview->save();

        return new overviewResource($overview);
    }
}
