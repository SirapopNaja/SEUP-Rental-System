<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class updateController extends Controller
{
    public function updatepicture(Request $request, $id)
    {
        $request->validate([
    
            'product_picture' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
          
            
        ]);

        $product = Product::find($id);

        if ($request->hasfile('product_picture')) {
            $image = $request->file('product_picture');
            $extension = $image->getClientOriginalExtension();
            $imageName = time() . '.' . $extension;
            $imagePath = $image->storeAs('', $imageName,'public');

      
            $product->product_picture = $imageName;

            $product->save();
            return $product;
        }
    }
}
