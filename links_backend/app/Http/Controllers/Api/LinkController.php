<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\LinkResource;
use App\Models\Link;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class LinkController extends Controller
{

    public function index()
    {
        return LinkResource::collection(Link::with('user')->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate(
            [
                'link' => ['required'],
                'user_id' => ['required'],
                'short_link' => Str::random(6),
            ]
        );

        Link::create($data);
    }
}
