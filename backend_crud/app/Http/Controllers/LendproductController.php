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
            $product->product_id = $request->input('product_id');
            $product->product_picture = $request->input('product_picture');
            $product->lend_day = $request->input('lend_day');
            $product->status_id = $request->input('status_id');


            $product->save();
            return $product;
        }
    

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($name)
    {
        return Lendproduct::where('name', $name)
        ->get();

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
        'product_name' => 'required',
        'product_type' => 'required',
        'product_number' => 'required',
        // 'product_picture' => 'required',
        'product_details' => 'required',
        'status_id' => 'required',
        'lend_day' => 'required',
        
        
    ]);

    $product = Lendproduct::find($id);

    // if ($request->hasfile('product_picture')) {
    //     $image = $request->file('product_picture');
    //     $extension = $image->getClientOriginalExtension();
    //     $imageName = time() . '.' . $extension;
    //     $imagePath = $image->storeAs('', $imageName,'public');

        $product->product_name = $request->input('product_name');
        $product->product_type = $request->input('product_type');
        $product->product_number = $request->input('product_number');
        $product->product_details = $request->input('product_details');
        $product->lend_day = $request->input('lend_day');
        $product->status_id = $request->input('status_id');
        // $product->product_picture = $request->input('product_picture');
        // $product->product_picture = $imageName;

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
