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
Route::put('updatepicture/{id}', 'updateController@updatepicture');
Route::resource('lendproduct', 'LendproductController');
Route::resource('send', 'SendController');
//login and register
Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');
Route::get('show', 'UserController@show');
Route::get('/showlend/{id}', 'showController@show');
Route::get('/getuserbyid/{id}', 'UserController@getUserByID');
Route::delete('/destroy/{id}', 'UserController@destroy');
Route::put('/userupdate/{id}', 'UserController@userupdate');

Route::group(['middleware' => 'auth:api'], function(){
});

Route::group(['middleware' => 'auth:api'], function(){
Route::post('details', 'UserController@details');
Route::put('updatelend/{id}', 'updateController@updatelend');
Route::put('updatestatus/{product_id}', 'updateController@updatestatus');

});