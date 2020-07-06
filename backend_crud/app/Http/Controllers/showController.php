<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lendproduct;
class showController extends Controller
{
    public function show($id)
    {
        return Lendproduct::find($id);
    }


}
