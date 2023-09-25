<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/',[\App\Http\Controllers\FinanceController::class,'Index'])->name('index-finance');
    Route::get('/tambah',[\App\Http\Controllers\FinanceController::class,'TambahPage'])->name('tambah-page');
    Route::get('/edit/{id}',[\App\Http\Controllers\FinanceController::class,'EditPage'])->name('edit-page');
    Route::post('/finance',[\App\Http\Controllers\FinanceController::class,'Store'])->name('store-finance');
    Route::patch('/finance/{id}',[\App\Http\Controllers\FinanceController::class,'Update'])->name('Update-finance');
    Route::delete('/finance/{id}',[\App\Http\Controllers\FinanceController::class,'Destroy'])->name('destroy-finance');
});

Route::get('/informatsiya', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        //relasi 1 to many
    ]);
});

Route::get('/dashboard', function () {
        $users=User::with('Finance')->get()->map(function($query){
                return [
                        "users"=>[
                            'id'=>$query->id,
                            'name'=>$query->name,
                            'bio'=>$query->bio,
                            'avatar'=>$query->avatar,
                            'email'=>$query->email,
                            'timezone'=>$query->timezone,
                            'links_1'=>$query->links_1,
                            'links_2'=>$query->links_2,
                            'links_3'=>$query->links_3,
                            'links_4'=>$query->links_4,
                            'created_at'=>$query->created_at,
                            'updated_at'=>$query->updated_at,
                        ],
                        "finance"=>[[
                            'id'=>$query->finance[0]->id,
                            'amount'=>$query->finance[0]->amount,
                            'keterangan'=>$query->finance[0]->keterangan,
                            'type'=>$query->finance[0]->type,
                            'created_at'=>$query->finance[0]->created_at,
                            'updated_at'=>$query->finance[0]->updated_at,
                        ]],
            ];
        });
        // $users=User::with('Finance')->get();
    return Inertia::render('Dashboard',["users"=>$users]);

})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
