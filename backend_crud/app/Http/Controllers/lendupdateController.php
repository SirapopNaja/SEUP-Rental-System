<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lendproduct;

class lendupdateController extends Controller
{
    public function updatelend(Request $request, $id)
    {
        $request->validate([
            'product_name' => 'required',
            'product_type' => 'required',
            'product_number' => 'required',
            // 'product_picture' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
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
            // $product->product_picture = $imageName;

            $product->save();
            return $product;
        // }
    }
}
