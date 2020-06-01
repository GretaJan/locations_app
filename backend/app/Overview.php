<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Overview extends Model
{
    protected $dates = [
        'login_at',
        'logout_at',
        'lunch_start',
        'lunch_end',
        'created_at'
    ];

    public function user() 
    {
        return $this->belongsTo(User::class);
    }

    public function locations()
    {
        return $this->hasManyThrough('Location', 'User', 'location_id', 'user_id');
    }
}
