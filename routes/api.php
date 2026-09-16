<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::apiResource('/product', ProductController::class);

Route::post('/sanctum/token', function (Request $request) {
    $user = User::where('email', $request->email)->first();
    if (!$user || !Hash::check($request->password, $user->password)) {
        return ['email' => ['The provided credentials are incorrect.']];
    }
    return ['token' => $user->createToken($request->device_name)->plainTextToken];
});

Route::post('/sanctum/token/register', function (Request $request) {
    $user = User::where('email', $request->email)->first();
    if ($user) {
        return ['email' => ['The email is already in use.']];
    }
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);
    return ['token' => $user->createToken($request->device_name)->plainTextToken];
});
