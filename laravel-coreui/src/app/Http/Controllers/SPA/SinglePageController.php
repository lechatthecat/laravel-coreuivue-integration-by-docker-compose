<?php

namespace App\Http\Controllers\SPA;

use App\Http\Controllers\Controller;

class SinglePageController extends Controller
{
    public function index() {
        return view('Common/app');
    }
}
