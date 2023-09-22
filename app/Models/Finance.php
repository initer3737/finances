<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Finance extends Model
{
    public function User():BelongsTo{
        return $this->BelongsTo(User::class,'user_id','id');
    }
    use HasFactory;
    protected $fillable = [
        'amount',
        'user_id',
        'keterangan',
        'type',
    ];
}
