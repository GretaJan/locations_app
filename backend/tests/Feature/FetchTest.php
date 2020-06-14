<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\User;
use App\Location;
use App\Overview;
use App\Profile;
use Carbon\Carbon;

class FetchTest extends TestCase
{
    // public function testBasicTest()
    // {
    //     $response = $this->get('/');

    //     $response->assertStatus(200);
    // }

    /** @test */
    // public function fetch_users_by_admin()
    // {
    //     $this->withoutExceptionHandling();

    //     $response = $this->get('/api/users');

    //     $response->assertOk();
    //     $this->assertCount(1, User::all());
    // }

    // public function fetch_user_by_admin()
    // {
    //     $this->withoutExceptionHandling();

    //     $response = $this->get('/api/user/5');

    //     $response->assertOk();
    //     $this->assertCount(1, User::all());
    // }
     /** @test */
    public function create_users_by_admin()
    {
        $this->withoutExceptionHandling();

        $response = $this->post('/api/register', [
            // 'role' => 'admin',
            'username' => 'admin',
            'name' => 'admin',
            'surname' => "admin",
            'phone' => "+3706256559",
            'image' => 'string',
            'address' => 'addressas',
            'email' => "emaillll5@gmail.com",
            'password' => '12345'
        ]);

        $response->assertOk();
        $this->assertCount(1, User::all());
    }
    // public function create_profile_by_admin()
    // {
    //     $this->withoutExceptionHandling();

    //     $response = $this->post('/api/create_profile', [
    //         'user_id' => 2,
    //         'username' => "lalala",
    //         'name' => 'vardas',
    //         'surname' => "surname2",
    //         'phone' => "+37062568689",
    //         'image' => 'string',
    //         'address' => 'addressas',
    //         'email' => "email5@gmaail.com",
    //     ]);

    //     $response->assertOk();
    //     $this->assertCount(1, Profile::all());
    // }
    // public function get_user_profiles()
    // {
    //     $this->withoutExceptionHandling();
    //     $response = $this->get('/api/profiles');

    //     $response->assertOk();
    //     $this->assertCount(1, Profile::all());
    // }
    // public function get_user_profile()
    // {
    //     $this->withoutExceptionHandling();
    //     $response = $this->get('/api/profile/1');

    //     $response->assertOk();
    //     $this->assertCount(1, Profile::all());
    // }
    // public function create_locations()
    // {
    //     $this->withoutExceptionHandling();

    //     $response = $this->post('/api/new_location/1', [
    //         'longitude' => 15.50,
    //         'latitude' => 15.50,
    //         'started_at' => Carbon::create(2020, 5, 21, 12),
    //         'ended_at' => Carbon::create(2020, 5, 21, 12),
    //         'worked_today' => Carbon::create(2020, 5, 21, 12),
    //     ]);

    //      $response->assertOk();
    //     $this->assertCount(1, Location::all());
    // }

    // public function fetch_locations_by_admin()
    // {
    //     $this->withoutExceptionHandling();

    //     $response = $this->get('/api/locations/1');

    //      $response->assertOk();
    //     $this->assertCount(1, Location::all());
    // }

    // public function fetch_location_by_admin()
    // {
    //     $this->withoutExceptionHandling();

    //     $response = $this->get('/api/location/1/1');

    //     $response->assertOk();
    //     $this->assertCount(1, Location::all());
    // }

    // public function create_overview()
    // {
    //     $this->withoutExceptionHandling();
    //     $response = $this->post('/api/overview/1', [
    //         'login_at' => Carbon::create(2020, 5, 21, 12),
    //         'logout_at' => Carbon::create(2020, 5, 21, 12),
    //         'lunch_start' => Carbon::now(),
    //         'lunch_end' => Carbon::now()
    //     ]);

    //     $response->assertOk();
    //     $this->assertCount(1, Overview::all());
    // }

    // public function get_locations()
    // {
    //     $this->withoutExceptionHandling();

    //     $response = $this->get('/api/daily_overview/1/9');

    //     $response->assertOk();
    //     $this->assertCount(1, Location::all());
    // }

}
