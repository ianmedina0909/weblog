<?php
Route::get('/', 'SignInController@index');
Route::POST('/sign-in', 'SignInController@login');
?>