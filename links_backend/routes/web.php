<?php

use App\Http\Controllers\Api\LinkController;
use App\Http\Controllers\Api\LinkVisitContoller;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('s/{short_link}', [LinkController::class, 'redirectLink']);
