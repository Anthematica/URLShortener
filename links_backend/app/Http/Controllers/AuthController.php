<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    function login(Request $request)
    {

        $data = $request->validate(
            [
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]
        );

        $user = User::where('email', $data['email'])->first();

        //Algoritmo interno que confirma que exista el correo en la BD
        if (!$user || !Hash::check($data['password'], $user->password)) {
            throw ValidationException::withMessages(
                [
                    'email' => ['The provided credentials are incorrect.'],
                ]
            );
        }

        $token = $user->createToken('links_generator');

        return [
            'access_token' => $token->plainTextToken,
            'user' => $user,
        ];
    }

    function register(Request $request)
    {

        $data = $request->validate(
            [
                'email' => ['required', 'email'],
                'name' => ['required'],
                'password' => ['required'],
            ]
        );

        $user = User::create(
            array_merge($data, ['password' => bcrypt($data['password'])])
        );

        $token = $user->createToken('links_generator');

        return [
            'access_token' => $token->plainTextToken,
            'user' => $user,
        ];
    }
}
