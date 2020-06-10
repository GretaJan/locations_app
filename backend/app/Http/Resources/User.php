<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
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
            'role' => $this->role,
            'username' => $this->username,
            'name' => $this->name,
            'surname' => $this->surname,
            'image' => $this->image,
            'worked_hours' => $this->worked_hours,
            'email' => $this->email,
            'phone' => $this->phone,
            'address' => $this->address,
            'password' => $this->password,
            'created_at' => $this->created_at->format('Y:m:d H:i'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i')
        ];
    }
}
