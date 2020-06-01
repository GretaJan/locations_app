<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('/login', 'UserController@login');
Route::post('/register', 'UserController@createUser');
Route::get('/logout', 'UserController@logout');
// Route::group([
//     'middleware' => 'auth:api'
// ], function() {
//     Route::get('/users', 'UserController@showUsers');
// });

Route::get('/users', 'UserController@showUsers');
Route::get('/user/{user}', 'UserController@showUser');
Route::put('/workedHours/user/{user}', 'UserController@storeWorkedHours');
Route::put('/edit_user_private/{user}', 'UserController@editPrivate');
Route::put('/edit_user_admin/{user}', 'UserController@editAdmin');
Route::delete('/delete_user/{user}', 'UserController@delete');
//Overviews
Route::get('/overviews/{user_id}', 'OverviewController@showOverviews');
Route::get('/overview/{user_id}/{overview', 'OverviewController@showOverview');
Route::post('/overview/{user_id}', 'OverviewController@createOverview');

Route::get('/locations/{user_id}', 'LocationController@showLocations');
Route::get('/daily_overview/{user_id}/{overview_id}', 'LocationController@getDailyLocations');
Route::get('/location/{user_id}/{location_id}', 'LocationController@showLocation');
Route::post('/new_location/{user_id}', 'LocationController@createLocation');
