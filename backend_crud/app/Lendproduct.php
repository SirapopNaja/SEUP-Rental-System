<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lendproduct extends Model
{
    protected $table = 'lendproduct';
    protected $fillable = ['product_name', 'product_type', 'product_number','product_picture','product_details','status_id','lend_day','name','last_name'];
}
