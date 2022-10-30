<script setup>
import useContacts from '../../composabiles/contacts';
import { onMounted } from 'vue';

const { contact, getContact, updateContact, errors }  = useContacts();

const props = defineProps({
    id:{
        required:true,
        type:String,
    },
});

onMounted(() => getContact(props.id))

</script>
<template>
       <div class="mt-12">
        <div class="px-12">
            <form class="max-w-xl mx-auto p-5 bg-white show-md round-md border border-gray-300 rounded"
                @submit.prevent="updateContact($route.params.id)">
                <div class="space-y-6">
                    <label for="contacts" class="block mb-2 text-xl font-medium text-black dark:text-black">Edit
                        Contact</label>
                    <div class="mb-6">
                        <label for="firstName" class="block mb-2 text-sm font-medium text-black dark:text-black">First
                            Name</label>
                        <input type="text" id="firstName" v-model="contact.firstName"
                            class="bg-white border border-gray-500 text-black text-sm rounded-lg focus:ring-blue-50 focus:border-blue-50 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50">
                        <div v-if="errors.firstName">
                            <span class="text-sm text-red-400">{{ errors.firstName[0] }}</span>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="lastName" class="block mb-2 text-sm font-medium text-black dark:text-black">Last
                            Name</label>
                        <input type="text" id="lastName" v-model="contact.lastName"
                            class="bg-white border border-gray-500 text-black text-sm rounded-lg focus:ring-blue-50 focus:border-blue-50 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50">
                        <div v-if="errors.lastName">
                            <span class="text-sm text-red-400">{{ errors.lastName[0] }}</span>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="mobile" class="block mb-2 text-sm font-medium text-black dark:text-black">Mobile
                            Number</label>
                        <input type="text" id="mobileNo" v-model="contact.mobileNo"
                            class="bg-white border border-gray-500 text-black text-sm rounded-lg focus:ring-blue-50 focus:border-blue-50 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50">
                        <div v-if="errors.mobileNo">
                            <span class="text-sm text-red-400">{{ errors.mobileNo[0] }}</span>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="email"
                            class="block mb-2 text-sm font-medium text-black dark:text-black">Email</label>
                        <input type="text" id="email" v-model="contact.email"
                            class="bg-white border border-gray-500 text-black text-sm rounded-lg focus:ring-blue-50 focus:border-blue-50 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50">
                        <div v-if="errors.email">
                            <span class="text-sm text-red-400">{{ errors.email[0] }}</span>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>