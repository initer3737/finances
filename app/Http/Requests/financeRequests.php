<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class financeRequests extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
           'type'=>['string','max:8','min:8','required'],
           'amount'=>['numeric','min:1','required'],
           'keterangan'=>['string','min:8','required'],
           'user_id'=>['numeric','required'],
        ];
    }
}
