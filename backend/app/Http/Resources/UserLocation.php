<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon as Carbon;

class UserLocation extends JsonResource
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
            "name" => $this->name,
            "surname" => $this->surname,
            "image" => $this->image,
            'longitude' => $this->longitude,
            'latitude' => $this->latitude,
            'created_at' => Carbon\Carbon::parse($this->created_at)->format('Y-m-d H:i'),
            'updated_at' => Carbon\Carbon::parse($this->updated_at)->format('Y-m-d H:i'),
            // 'ended_at'=> Carbon\Carbon::parse($this->ended_at)->format('Y-m-d H:i'),
            'current' => $this->current,
            'worked_today' => $this->worked_today,
        ];
    }
}
