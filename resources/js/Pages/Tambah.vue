<script setup lang="ts">
import { reactive } from 'vue'
import { router } from '@inertiajs/vue3'

type TErrors={
        amount:string,
        type:string,
        keterangan:string,

    }
    type TAuth={
        user:{
            id:number,
            name:string,
            email:string,
        }
    }
const props=defineProps<{
    errors:TErrors,
    auth:TAuth,
}>()

const form = reactive({
    amount:null,
    type:'menerima',
    keterangan:null,
    user_id:props.auth.user.id
})

const submitData=()=>{
    router.post('/finance',form)
}
const membayarListener=()=>{
    form.type='membayar'
}
const menerimaListener=()=>{
    form.type='menerima'
}

 
</script>
<template>

<form @submit.prevent>
    <div class="p-3 mt-4 flex flex-col justify-center items-center">
    <input type="number" id="amount" placeholder="amount" v-model="form.amount">
    <label for="amount">
        amount
    </label>
    <h5 class="text-white bg-rose-800 py-2 px-5 my-3" v-if="props.errors.amount">{{props.errors.amount}}</h5>
    <textarea id="keterangan" placeholder="keterangan" v-model="form.keterangan"></textarea>
    <label for="keterangan">
        keterangan
    </label>
    <h5 class="text-white bg-rose-800 py-2 px-5 my-3" v-if="props.errors.keterangan">{{props.errors.keterangan}}</h5>
    <div class="flex flex-row gap-4">
        <button :class="`btn-actions ${form.type === 'menerima'?'bg-green-600':'bg-slate-600'} `" @click="menerimaListener">menerima</button>
        <button :class="`btn-actions ${form.type === 'membayar'?'bg-rose-600':'bg-slate-600'} `" @click="membayarListener">membayar</button>
    </div>
    <h5 class="text-white bg-rose-800 py-2 px-5 my-3" v-if="props.errors.type">{{props.errors.type}}</h5>
</div>
<div class="p-3 flex flex-col justify-center items-center">
    <h2>tambah data</h2>
        <button class="btn-actions bg-blue-600" @click="submitData">tambahkan transaksi</button>
</div>
</form>

<!-- https://inertiajs.com/forms -->
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