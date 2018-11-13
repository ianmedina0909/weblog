<?php

namespace App\Http\Libraries;
use App\Http\Middleware\CheckIfUserLogin;
use App\Models\Users;
use Session;
class SessionHandler {
	public function createSession ($testing) {
		// Via the global helper...
	}
	public function createSessionManualSignIn ($userId) {

	}
	public function flushAllSession () {
		Session::flush();
	}
}
