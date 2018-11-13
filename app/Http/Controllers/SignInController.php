<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Session;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cache;
use App\Http\Libraries\SessionHandler;
class SignInController extends Controller {
	public function index () {
		return view('pages.signin');
	}

public function login (Request $request) {
	$passWord = $request->post('password');
	$pwordHash = Hash::make($passWord);
	$object = (object) [
			'username' => $request->post('username'),
			'password' => $pwordHash
	];
				dd($object);
	}
} //end class
