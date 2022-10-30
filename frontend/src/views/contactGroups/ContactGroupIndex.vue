<script setup>
import useContactGroups from '../../composabiles/contactGroups';
import { onMounted } from 'vue';

const { contactGroups, getContactGroups, destroyContactGroup } = useContactGroups();

onMounted(() => getContactGroups());
</script>
<template>
    <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{name:'ContactGroupCreate'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">New Contact</RouterLink>
        </div>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-green-600 dark:bg-green-600 dark:text-white">
                    <tr>
                        <th scope="col" class="py-5 px-6">
                            Name
                        </th>
                
                        <th scope="col" class="py-5 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contactGroup in contactGroups" :key="contactGroup.id">
                        <td class="py-4 px-6 dark:text-black">
                            {{ contactGroup.name }}
                        </td>
                        <td class="py-4 px-6 space-x-2">
                            <RouterLink :to="{name:'ContactGroupEdit', params: { id: contactGroup.id }}" class="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded">Edit</RouterLink>
                             <button  @click="destroyContactGroup(contactGroup.id)" class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>