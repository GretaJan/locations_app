<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $dates = [
        'started_at',
        'ended_at',
        'created_at'
    ];
    public function user() {
        return $this->belongsTo(User::class);
    }
}
