<script setup>
import useContactGroups from '../../composabiles/contactGroups';
import { onMounted } from 'vue';

const { contactGroup, getContactGroup, updateContactGroup, errors }  = useContactGroups();

const props = defineProps({
    id:{
        required:true,
        type:String,
    },
    
});

onMounted(() => getContactGroup(props.id))

</script>
<template>
       <div class="mt-12">
        <div class="px-12">
            <form class="max-w-xl mx-auto p-5 bg-white show-md round-md border border-gray-300 rounded"
                @submit.prevent="updateContactGroup($route.params.id)">
                <div class="space-y-6">
                    <label for="contacts" class="block mb-2 text-xl font-medium text-black dark:text-black">Edit
                        Contact Group</label>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-black dark:text-black">First
                            Name</label>
                        <input type="text" id="name" v-model="contactGroup.name"
                            class="bg-white border border-gray-500 text-black text-sm rounded-lg focus:ring-blue-50 focus:border-blue-50 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50">
                        <div v-if="errors.name">
                            <span class="text-sm text-red-400">{{ errors.name[0] }}</span>
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