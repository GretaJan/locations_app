<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Location;
use Faker\Generator as Faker;

$factory->define(Location::class, function (Faker $faker) {
    $users = App\User::pluck('id')->toArray();
    return [
        'id' => $faker->unique()->numberBetween($min = 1, $max = 30),
        'user_id' => $faker->randomElement($users),      
        'longitude' => $faker->numberBetween($min = 1, $max = 30),
        'latitude' => $faker->numberBetween($min = 1, $max = 30),
        // 'started_at' => $faker->date(),
        'ended_at' => $faker->date(),
        'worked_today' => $faker->date()
    ];
});
