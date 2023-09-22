<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3'
import Vue from 'vue'
const Udalit=(id:number)=>{
   const yakin= confirm('yakin mau delete');
   if(yakin === true){
        router.delete(`/finance/${id}`);
        setTimeout(()=>{
            location.reload()
        },1000)
   }
}
        enum TType{
            membayar,
            menerima
        }
        type TFinance=[
            {id:number,amount:number,type:string,keterangan:string}
        ]
    const props=withDefaults( defineProps<{
        // membayar?:number,
        // menerima?:number,
        finance?:TFinance
        saldo:number,
        total_menerima:number,
        total_membayar:number,
        username:string,
        email:string,
        // var_dump:any
    }>(),
    {
        // membayar:0,
        // menerima:0 //default avlue of menerima props
        // https://techsolutionstuff.com/post/how-to-use-sweet-alert-in-vue-js
    }
    )
    // const saldo=props.menerima - props.membayar
    // const saldoColor=saldo < 0 ?"text-rose-600":"text-green-600";
    const {finance,email ,username, total_menerima,total_membayar,saldo}=props
    let number=1
</script>
<template>
<div class="p-3">
    <h2>user : {{username}}</h2>
    <h2>email : {{ email }}</h2>
    <h2>total menerima : <span class="text-green-600">{{ total_menerima??'-' }}</span></h2>
    <h2>total membayar :  <span class="text-rose-600">{{ total_membayar??'-' }}</span></h2>
    <h2 v-if="saldo < 0">saldo : <span class="text-rose-600">{{ saldo??'-' }}</span></h2>
    <h2 v-else>saldo : <span class="text-green-600">{{ saldo??'-' }}</span></h2>
    <h2 class="my-3">
        <!-- https://inertiajs.com/links -->
        <Link href="/tambah" class="btn-actions bg-blue-600">tambahkan transaksi</Link>
    </h2>
</div>
    <table  class="m-auto tabel-data border-separate border-spacing-2 border border-blue-400">
        <thead>
            <tr>
                 <th class="" colspan="1">no</th>
                 <th class="text-rose-600">membayar</th>
                 <th class="text-green-600">menerima</th>
                 <th>keterangan</th>
                 <th>actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in finance">
                 <td>{{ number++ }}</td>
                 <td class="text-rose-600">{{ data.type === 'membayar' ? data.amount : '-' }}</td>
                 <td class="text-green-600">{{ data.type === 'menerima' ? data.amount : '-' }}</td>
                 <td>{{ data.keterangan.length < 5 ?data.keterangan: data.keterangan.substring(0,16)+'...' }}</td>
                 <td class="flex gap-4 justify-center items-center">
                    <Link :href="`edit/${data.id}`" class="btn-actions bg-yellow-400">edit</Link>
                            |
                    <button @click="Udalit(data.id)" class="btn-actions bg-rose-600">delete</button>
                 </td>
            </tr>
        </tbody>
    </table>
</template>

<style>
.tabel-data{
    border: black 2px;
}
.btn-actions{
    padding: 5px;
    border:12px;
    text-decoration: none;
    border-radius: 5%;
    box-shadow: 4px 5px rgba(0, 0, 0,.6);
    transition:all .6s
}
.btn-actions:hover{
    color: #fff;
}
</style>