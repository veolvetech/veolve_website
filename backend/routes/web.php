<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\LeadController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->prefix('admin')->group(function () {
    Route::get('/leads', [LeadController::class, 'index'])->name('admin.leads.index');
    Route::get('/leads/{lead}', [LeadController::class, 'show'])->name('admin.leads.show');
    Route::post('/leads/{lead}/status', [LeadController::class, 'updateStatus'])->name('admin.leads.status');
    Route::delete('/leads/{lead}', [LeadController::class, 'destroy'])->name('admin.leads.destroy');
});

require __DIR__ . '/auth.php';
