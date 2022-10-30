import { ref } from "vue";
import axios from 'axios';
import { useRouter } from 'vue-router';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";

export default function useContactGroups(){
    
    const contactGroups = ref([]);
    const contactGroup = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getContactGroups = async () => {
        const response = await axios.get("contactGroups");
        contactGroups.value = response.data.data;
    };

    const getContactGroup = async (id) => {
        const response = await axios.get("contactGroups/" + id);
        contactGroup.value = response.data.data;
    }

    const storeContactGroup = async (data) => {
        try{
            await axios.post("contactGroups", data);
            router.push({name:"ContactGroupIndex"});
        } catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateContactGroup = async (id) => {
        try{
            await axios.put("contactGroups/" + id, contactGroup.value);
            await router.push({name:"ContactGroupIndex"});
        } catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const destroyContactGroup = async (id) => {
        if(!window.confirm("Are You Sure?")){
            return;
        }

        await axios.delete("contactGroups/" + id);
        await getContactGroups();
    }
    return{
        contactGroup,
        contactGroups,
        getContactGroup,
        getContactGroups,
        storeContactGroup,
        storeContactGroup,
        updateContactGroup,
        destroyContactGroup,
        errors,
    } 
}