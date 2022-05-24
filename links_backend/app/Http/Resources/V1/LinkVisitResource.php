<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class LinkVisitResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'short_link' => url('s/' . $this->short_link),
            'link' => $this->link,
            'link_id' => $this->whenLoaded('link_visit'),
            'created_at' => $this->created_at,
        ];
    }
}
