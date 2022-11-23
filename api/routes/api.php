<?php

use App\Http\Controllers\Api\AsignaturaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(AsignaturaController::class)->group(function () {
    Route::get('/asignaturas', 'index');
    Route::post('/asignatura', 'store');
    Route::get('/asignatura/{id}', 'show');
    Route::put('/asignatura/{id}', 'update');
    Route::delete('/asignatura/{id}', 'destroy');
});
