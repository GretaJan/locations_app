<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\OverviewRepository;

class OverviewController extends Controller
{
   protected $overview = null;

   public function __construct(OverviewRepository $overview)
   {
    $this->overview = $overview;
   }

    public function showOverviews($user_id)
    {
        $overviews = $this->overview->getOverviews($user_id);
        return $overviews;
    }

    public function showOverview($user_id, Overview $overview)
    {
        $overview = $this->overview->getOverview($user_id, $overview);
        return $overview;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createOverview(Request $request, $user_id)
    {
        $overview = $this->overview->createOverview($request, $user_id);
        return $overview;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Data  $data
     * @return \Illuminate\Http\Response
     */
    public function show(Data $data)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Data  $data
     * @return \Illuminate\Http\Response
     */
    public function edit(Data $data)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Data  $data
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Data $data)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Data  $data
     * @return \Illuminate\Http\Response
     */
    public function destroy(Data $data)
    {
        //
    }
}
