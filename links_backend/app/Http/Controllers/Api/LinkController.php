<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\LinkResource;
use App\Models\Link;
use App\Models\LinkVisit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;


class LinkController extends Controller
{

    public function index()
    {
        $auth_id = Auth::id();

        return LinkResource::collection(Link::with('user', 'link_visit')->where('user_id', '=', $auth_id)->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate(
            [
                'link' => ['required'],
                'user_id' => ['required'],
            ]
        );

        $data['short_link'] = Str::random(6);

        $links = Link::create($data);

        return new LinkResource($links);
    }

    public function redirectLink(Request $request, $url)
    {
        $short_link = Link::where('short_link', '=', $url)->first();

        //Create a visit in the link_visit table
        LinkVisit::create(['link_id' => $short_link->id]);

        return redirect($short_link->link);
    }
}
