<?php

namespace App\Http\Middleware;

use Closure;
use URL;
use Session;

class CheckIfUserLogin {
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next) {
        if (!empty(Session::get('user_id'))) {
            return redirect('/web/dashboard');
        } else {
            return redirect('/');
        }  
    }
}
