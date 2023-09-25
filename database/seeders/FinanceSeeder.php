<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FinanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i=0; $i <= 10; $i++) { 
            \App\Models\Finance::create([
                'amount' => 12000,
                'type' => 'menerima',
                'keterangan' => 'menerima uang...',
                'user_id' => 1
            ]);
        }
    }
}
