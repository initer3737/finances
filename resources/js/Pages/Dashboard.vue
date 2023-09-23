<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

        type TUsers=[{
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
            }
        }]
    const {}=defineProps<{
        users:TUsers
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
                    <div class="p-6 text-gray-900 flex flex-col">
                        <p class="text-xl text-center py-3">avatar : {{ users[0].users.avatar }}</p>
                        <p class="text-xl">name : {{ users[0].users.name }}</p>
                        <p class="text-xl">email : {{ users[0].users.email }}</p>
                        <p class="text-xl" v-show="users[0].users.bio != '' ">" {{ users[0].users.bio }} "</p>
                        <div class="flex flex-col md:flex-row gap-4">
                            <p class="text-xl">{{ users[0].users.links_1 }}</p>
                            <p class="text-xl"> {{ users[0].users.links_2 }}</p>
                            <p class="text-xl"> {{ users[0].users.links_3 }}</p>
                            <p class="text-xl"> {{ users[0].users.links_4 }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
