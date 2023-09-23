<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

        type TUsers={
            users:{ 
                "id": number, 
                "name": string, 
                "bio": string, 
                "avatar": string, 
                "email": string, 
                "links_1": string, 
                "links_2": string, 
                "links_3": string, 
                "links_4": string, 
                "created_at": string, 
                "updated_at": string 
            },
            finance:{
                 "id": number, 
                 "amount": string, 
                 "keterangan": string, 
                 "type":string,
                "created_at": string, 
                "updated_at": string 
            },
        }
    const {}=defineProps<{
        users:object
    }>()
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
            {{ users }}
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">You're logged in!</div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
