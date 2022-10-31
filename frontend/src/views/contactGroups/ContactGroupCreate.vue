<script setup>
import { reactive } from 'vue';
import useContactGroups from '../../composabiles/contactGroups';

const { storeContactGroup, errors } = useContactGroups();

const form = reactive({
    name: "",
})
</script>
<template>
    <div class="mt-12">
        <div class="px-12">
            <form class="max-w-xl mx-auto p-5 bg-white show-md round-md border border-gray-300 rounded"
                @submit.prevent="storeContactGroup(form)">
                <div class="space-y-6">
                    <label for="contacts" class="block mb-2 text-xl font-medium text-black dark:text-black">Create
                        Contact Group</label>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-black dark:text-black">Name</label>
                        <input type="text" id="name" v-model="form.name"
                            class="bg-white border border-gray-500 text-black text-sm rounded-lg focus:ring-blue-50 focus:border-blue-50 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50">
                        <div v-if="errors.name">
                            <span class="text-sm text-red-400">{{ errors.name[0] }}</span>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                        <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Submit</button>
                    </div>
            </form>
        </div>
    </div>
</template>