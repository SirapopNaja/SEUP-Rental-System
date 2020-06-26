<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Send extends Model
{
    protected $table = 'send';
    protected $fillable = ['product_name', 'product_type', 'product_number','product_picture','product_details','status_id','lend_day','name','last_name','send_back','status_p'];
}
