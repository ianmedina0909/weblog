<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;
use Mail;

use Carbon\Carbon;

class Users extends Model {

    protected $table = 'users';

    public function addUsers ($data) {
      DB::table($this->table)
      ->insert([  
         'email_address' => $data->username, 
         'password' => $data->username,
         ]);
    }
}