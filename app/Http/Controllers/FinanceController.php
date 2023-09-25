<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Finance;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;

class FinanceController extends Controller
{
    public function Index(){
        $data =[
            "finance"=>[ //bahasa rusia platit = membayar poluchat = menerima
                ["menerima"=>20000,"keterangan"=>"dari ibu","type"=>"poluchat"],
                ["menerima"=>2000,"keterangan"=>"dari jualan keripik","type"=>"poluchat"],
                ["menerima"=>9000,"keterangan"=>"dari teman","type"=>"poluchat"],
                ["menerima"=>13000,"keterangan"=>"dari juragan tahu","type"=>"poluchat"],
    
                ["membayar"=>1000,"keterangan"=>"makan sate di warung makan","type"=>"platit"],
                ["membayar"=>7000,"keterangan"=>"makan nasi padang","type"=>"platit"],
                ["membayar"=>2000,"keterangan"=>"beli bumbu tabur","type"=>"platit"],
                ["membayar"=>2000,"keterangan"=>"belajar bahasa rusia / les","type"=>"platit"],
            ]
        ];
            $finance=$data['finance'];
            $totalMenerima=0;
            $totalMembayar=0;
        for ($x = 0; $x <= count($finance)-1; $x++) {
                if($finance[$x]['type'] === 'poluchat')$totalMenerima=$totalMenerima + $finance[$x]['menerima'];
                if($finance[$x]['type'] === 'platit')$totalMembayar=$totalMembayar + $finance[$x]['membayar'];
          } 
          $data['saldo']=$totalMenerima - $totalMembayar;
          $data['total_menerima']=$totalMenerima;
          $data['total_membayar']=$totalMembayar;

          $data['username']=Auth::user()->name;
          $data['email']=Auth::user()->email;
                $totalBayarSql=Finance::where('type','membayar')->where('user_id',Auth::user()->id)->sum('amount');
                $totalmenerimaSql=Finance::where('type','menerima')->where('user_id',Auth::user()->id)->sum('amount');
                $data['total_membayar']=$totalBayarSql;
                $data['total_menerima']=$totalmenerimaSql;
                $data['saldo']=$totalmenerimaSql - $totalBayarSql;
                $data['keterangan']=Finance::select('keterangan')->where('user_id',Auth::user()->id)->get();
                // $data['finance']=FinanceResources::collection(Finance::with('User')->get());;
                $data['finance']=Finance::with('User')->get()->map(function($query){
                        return [
                            'id'=>$query->id,
                            'amount'=>$query->amount,
                            'keterangan'=>$query->keterangan,
                            'type'=>$query->type,
                            'created_at'=>$query->created_at,
                            'updated_at'=>$query->updated_at,
                                "users"=>[
                                    'id'=>$query->user->id,
                                    'name'=>$query->user->name,
                                    'bio'=>$query->user->bio,
                                    'avatar'=>$query->user->avatar,
                                    'email'=>$query->user->email,
                                    'timezone'=>$query->user->timezone,
                                    'links_1'=>$query->user->links_1,
                                    'links_2'=>$query->user->links_2,
                                    'links_3'=>$query->user->links_3,
                                    'links_4'=>$query->user->links_4,
                                    'created_at'=>$query->user->created_at,
                                    'updated_at'=>$query->user->updated_at,
                                ]
                        ];
                });
        return Inertia::render('Finance',$data);
    }

    public function TambahPage(){
        return Inertia::render('Tambah');
    }

    public function EditPage(int $id){
             $data=["data"=>Finance::select('*')->where('id',$id)->get()];
            //$data=["data"=>DB::table('finances')->select('*')->where('id','=',2)->get()];
            //$data['id_finance']=$id;
        return Inertia::render('Edit',$data);
    }

    public function Store(\App\Http\Requests\financeRequests $request){
                $data=$request->validated();
                // $data['user_id']=Auth::user()->id;
            Finance::create($data);
        return to_route('index-finance');
        // return Redirect::to('/');
    }

    public function Update(\App\Http\Requests\financeRequests $request){
                $data=$request->validated();
                // $data['user_id']=Auth::user()->id;
            Finance::where('id',$request->id)->update($data);
        return to_route('index-finance');
        // return Redirect::to('/');
    }

    public function Destroy(Request $req){
        Finance::where('id',$req->id)->where('user_id',Auth::user()->id)->delete();
        // return redirect::to('/');
        return to_route('index-finance');
    }
} // end of class
