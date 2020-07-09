<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $fillable = ['product_name', 'product_type', 'product_number', 'product_picture', 'product_details','lend_day'];
}
