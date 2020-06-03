<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Overview;
use Faker\Generator as Faker;

$factory->define(Overview::class, function (Faker $faker) {
    $users = App\User::pluck('id')->toArray();

    return [
        'id' => $faker->numberBetween($min = 1, $max = 30),
        'user_id' => $faker->randomElement($users),  
        // 'login_at' => $faker->datetime(),
        'logout_at' => $faker->datetime(),
        'lunch_start' => $faker->datetime(),
        'lunch_end' => $faker->datetime(),
        'worked_until' => $faker->datetime()
    ];
});
