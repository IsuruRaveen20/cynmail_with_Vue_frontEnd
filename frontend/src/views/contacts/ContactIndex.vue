<script setup>
import useContacts from '../../composabiles/contacts';
import { onMounted } from 'vue';

const { contacts, getContacts } = useContacts();

onMounted(() => getContacts());
</script>
<template>
    <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{name:'ContactCreate'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">New Skill</RouterLink>
        </div>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-green-600 dark:bg-green-600 dark:text-white">
                    <tr>
                        <th scope="col" class="py-5 px-6">
                            First Name
                        </th>
                        <th scope="col" class="py-5 px-6">
                            Last Name
                        </th>
                        <th scope="col" class="py-5 px-6">
                            Mobile No
                        </th>
                        <th scope="col" class="py-5 px-6">
                            Email
                        </th>
                        <th scope="col" class="py-5 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contact in contacts" :key="contact.id">
                        <td class="py-4 px-6 dark:text-black">
                            {{ contact.firstName }}
                        </td>
                        <td class="py-4 px-6 dark:text-black">
                            {{ contact.lastName }}
                        </td>
                        <td class="py-4 px-6 dark:text-black">
                            {{ contact.mobileNo }}
                        </td>
                        <td class="py-4 px-6 dark:text-black">
                            ${{ contact.email }}
                        </td>
                        <td class="py-4 px-6 space-x-2">
                            <RouterLink :to="{name:'ContactEdit', params: { id: contact.id }}" class="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded">Edit</RouterLink>
                            <RouterLink :to="{name:'ContactIndex', params: {id:contact.id}}" class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded">Delete</RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>