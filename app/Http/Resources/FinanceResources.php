<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FinanceResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'finances' => [
                'id'=>$this->id,
                'amount'=>$this->amount,
                'type'=>$this->type,
                'keterangan'=>$this->keterangan,
                'created_at'=>date_format($this->created_at,'d:m:y'),
                'updated-at'=>date_format($this->updated_at,'d:m:y'),
                    "users"=>[
                            'id'=>$this->User->id,
                            'name'=>$this->User->name,
                            'bio'=>$this->User->bio,
                            'avatar'=>$this->User->avatar,
                            'email'=>$this->User->email,
                            'links_1'=>$this->User->links_1,
                            'links_2'=>$this->User->links_2,
                            'links_3'=>$this->User->links_3,
                            'links_4'=>$this->User->links_4,
                    ]
            ]
        ];
        //return parent::toArray($request);
    }
}
