<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Location extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'longitude' => $this->longitude,
            'latitude' => $this->latitude,
            'started_at' => $this->started_at,
            'ended_at'=> $this->ended_at,
            'worked_today' => $this->worked_today,
            'created_at' => $this->created_at
        ];
    }
}
