<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\LinkResource;
use App\Models\Link;
use App\Models\LinkVisit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Http\Response;


class LinkController extends Controller
{

    public function index(Request $request)
    {
        $auth_id = Auth::id();

        return LinkResource::collection(Link::with('user', 'link_visit')->where('user_id', '=', $auth_id)->get());
    }

    public function store(Request $request)
    {
        $auth_id = Auth::id();

        $data = $request->validate(
            [
                'link' => ['required', 'url'],
            ]
        );

        $data['user_id'] = $auth_id;

        $data['short_link'] = Str::random(6);

        $links = Link::create($data);

        return new LinkResource($links);
    }

    public function redirectLink(Request $request, $url)
    {
        $short_link = Link::where('short_link', '=', $url)->firstOrFail();

        //Create a visit in the link_visit table
        LinkVisit::create(['link_id' => $short_link->id]);

        return redirect($short_link->link);
    }

    public function update(Request $request, Link $link)
    {
        $data = $request->validate(
            [
                'link' => ['required', 'url'],
            ]
        );

        $link->update($data);

        $link->load('user');
        $link->load('link_visit');

        return LinkResource::collection($link->get());
    }

    public function destroy($id)
    {
        Link::find($id)->delete();

        return response('', Response::HTTP_NO_CONTENT);
    }
}
