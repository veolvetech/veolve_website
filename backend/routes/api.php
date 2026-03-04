<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactController;

Route::post('/contact', [ContactController::class, 'store']);
Route::post('/contact-kartos', [ContactController::class, 'kartosStore']);