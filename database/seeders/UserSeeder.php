<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::create([
            'name'=>'yotsusan_machi',
            'password'=>Hash::make('yotsusan_machi_desu'),
            'email'=>'yotsusan_machi@gmail.com',
            'bio'=>'zdrastuite ya yotsusan_machi ,sevodnya ya izucat na ruskam yazieka patamusta ruski eto slosna i ochen interesna (priyatna pasnakomitsa tavaris)',
            'timezone'=>date('a',time()), //@return [pm or sam]
            'links_1'=>'https://initer3737.github.io/',
            'links_2'=>'https://www.instagram.com/yotsusan_machi/',
            'links_3'=>'https://github.com/initer3737',
            'links_4'=>'https://www.youtube.com/channel/UClsfa0LkA3_YMsFjW1M__sw',

        ]);
    }
}
