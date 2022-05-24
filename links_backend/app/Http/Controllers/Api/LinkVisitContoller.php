<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\LinkVisitResource;
use App\Models\Link;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class LinkVisitContoller extends Controller
{
    function index()
    {
        $auth = Auth::id();


        $query = Link::with(['link_visit' => function ($visits) {
            $visits->select('created_at')->groupBy();
        }])->where('user_id', "=", $auth)->get();

        return LinkVisitResource::collection($query);
    }
}
