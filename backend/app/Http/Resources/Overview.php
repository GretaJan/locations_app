<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Overview extends JsonResource
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
            'login_at' => $this->login_at,
            'logout_at' => $this->logout_at,
            'lunch_start' => $this->lunch_start,
            'lunch_end' => $this->lunch_end,
            'worked_until' => $this->worked_until,
        ];
    }
}
