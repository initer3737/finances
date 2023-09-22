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
    type Tdata=[{
        id:number,
        amount:number,
        keterangan:string,
        type:string,
        user_id:number,
    }]
 const props=defineProps<{
    errors:TErrors,
    auth:TAuth,
    data:Tdata
    id_finance:number
}>()

 let form = reactive({
    amount:props.data[0].amount,
    type:props.data[0].type,
    keterangan:props.data[0].keterangan,
    user_id:props.auth.user.id
})

 const submitData=(id:number)=>{
    router.patch(`/finance/${id}`,form)
}
 const membayarListener=()=>{
    form.type='membayar'
}
 const menerimaListener=()=>{
    form.type='menerima'
}

 const onChange=(e:Event)=>{
    // return form.amount=Number((<HTMLInputElement>e.target).value)
        const Target=(<HTMLInputElement>e.target)
            form={...form,[Target.id]:Target.value}
}
 
 </script>
<template>

<form @submit.prevent>
    <div class="p-3 mt-4 flex flex-col justify-center items-center">
    <input type="number" id="amount" placeholder="amount" @change="onChange" :value="props.data[0].amount">
    <label for="amount">
        amount
    </label>
    <h5 class="text-white bg-rose-800 py-2 px-5 my-3" v-if="props.errors.amount">{{props.errors.amount}}</h5>
    <textarea id="keterangan" placeholder="keterangan" @change="onChange" :value="props.data[0].keterangan"></textarea>
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
    <h2>edit data</h2>
        <button class="btn-actions bg-blue-600" @click="submitData(props.data[0].id)">edit transaksi</button>
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