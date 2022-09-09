<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImportExportController;


Route::get('/', [ImportExportController::class, 'index']);
Route::get('import', [ImportExportController::class, 'import'])->name('import');
Route::post('upload', [ImportExportController::class, 'upload'])->name('import.upload');

Route::get('batch', [ImportExportController::class, 'batch'])->name('batch');

Route::get('export', [ImportExportController::class, 'export'])->name('export');
Route::get('download', [ImportExportController::class, 'upload'])->name('export.upload');