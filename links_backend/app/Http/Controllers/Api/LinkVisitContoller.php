<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\LinkVisitResource;
use App\Models\Link;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LinkVisitContoller extends Controller
{
    function index()
    {
        $auth = Auth::id();

        $query = Link::with('user', 'link_visit')
            ->where('user_id', "=", $auth)->groupBy('link_visit.created_at')->get();

        return LinkVisitResource::make($query);
    }
}
