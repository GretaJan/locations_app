<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $dates = [
        'started_at',
        'ended_at',
        'created_at',
        'updated_at'
    ];
    protected $fillable = ['current'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
