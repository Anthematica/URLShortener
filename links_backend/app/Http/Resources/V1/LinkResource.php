<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class LinkResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'short_link' => url('s/' . $this->short_link),
            'link' => $this->link,
            'user_id' => $this->whenLoaded('user'),
            'visits' => $this->whenLoaded('link_visit', function () {
                return $this->link_visit->count();
            }),
            'created_at' => $this->created_at,
        ];
    }
}
