<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween($min = 1, $max = 30),
        'username' => $faker->text(10),
        'username' => $faker->text(10),
        'name' => $faker->text(10),
        'surname' => $faker->text(10),
        'worked_hours' => $faker->text(10),
        'phone' => $faker->text(10),
        'address' => $faker->text(15),
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'created_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
});
