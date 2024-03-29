<?php

use App\Http\Controllers\Api\LinkController;
use App\Http\Controllers\Api\LinkVisitContoller;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::delete('v1/links/{id}', [LinkController::class, 'destroy']);
Route::patch('v1/links/{link}', [LinkController::class, 'update']);

Route::middleware('auth:sanctum')->get('v1/links', [LinkController::class, 'index']);

Route::middleware('auth:sanctum')->post('v1/links', [LinkController::class, 'store']);
Route::middleware('auth:sanctum')->get('linkVisits', [LinkVisitContoller::class, 'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
