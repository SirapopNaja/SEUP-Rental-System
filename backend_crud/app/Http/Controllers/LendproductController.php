<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lendproduct;
class LendproductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return  Lendproduct::all();
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
    public function store(Request $request){

        $product = new Lendproduct();

            $product->name = $request->input('name');
            $product->last_name = $request->input('last_name');
            $product->product_name = $request->input('product_name');
            $product->product_type = $request->input('product_type');
            $product->product_number = $request->input('product_number');
            $product->product_details = $request->input('product_details');
            $product->product_picture = $request->input('product_picture');
            $product->lend_day = $request->input('lend_day');

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
        return Lendproduct::find($id);
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
        $request->validate([
           
            'status_id' => 'required',
                    
        ]);

        $product = Lendproduct::find($id);

       
            $product->status_id = $request->status_id;
            $product->save();
            return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = Lendproduct::find($id);
        $customer->destroy($id);
        return 'delete suscessfully';
    }
}
