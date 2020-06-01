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
            'created_at' => $this->created_at->format('Y:m:d H:i'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i'),
            'deleted_at' => $this->deleted_at,
            'logout_at' => $this->logout_at,
            'lunch_start' => $this->lunch_start->format('Y:m:d H:i'),
            'lunch_end' => $this->lunch_end->format('Y:m:d H:i'),
            'worked_until' => $this->worked_until,
        ];
    }
}
