<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use phpDocumentor\Reflection\Types\Resource_;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// อุปกรณ์
Route::resource('product', 'productsController');


//login and register
Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');
Route::get('show', 'UserController@show');
Route::delete('/destroy/{id}', 'UserController@destroy');
Route::group(['middleware' => 'auth:api'], function(){
});

Route::group(['middleware' => 'auth:api'], function(){
Route::post('details', 'UserController@details');
});