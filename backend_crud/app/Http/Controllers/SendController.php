<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Send;
class SendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return  Send::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = new Send();

        $product->name = $request->input('name');
        $product->last_name = $request->input('last_name');
        $product->product_name = $request->input('product_name');
        $product->product_type = $request->input('product_type');
        $product->product_number = $request->input('product_number');
        $product->product_details = $request->input('product_details');
        $product->product_picture = $request->input('product_picture');
        $product->lend_day = $request->input('lend_day');
        $product->send_back = $request->input('send_back');
        $product->status_id = $request->input('status_id');
        $product->status_p = $request->input('status_p');

        $product->save();
        return $product;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Send::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = Send::find($id);
        $customer->destroy($id);
        return 'delete suscessfully';
    }
}
