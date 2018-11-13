<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Cache;
use Session;
class DashboardController extends Controller {
	public function index () {
		dd(Session::get('id'));
	}
} //end class
