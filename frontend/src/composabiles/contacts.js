import { ref } from "vue";
import axios from 'axios';
import { useRouter } from 'vue-router';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";

export default function useContacts(){
    
    const contacts = ref([]);
    const contact = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getContacts = async () => {
        const response = await axios.get("contacts");
        contacts.value = response.data.data;
    };

    const getContact = async (id) => {
        const response = await axios.get("contacts" + id);
        contact.value = response.data.data;
    }

    const storeContact = async (data) => {
        try{
            await axios.post("contacts", data);
            router.push({name:"ContactIndex"});
        } catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateContact = async (id) => {
        try{
            await axios.put("contacts/" + id, data.value);
            router.push({name:"ContactIndex"});
        } catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const destroyContact = async (id) => {
        if(!window.confirm("Are You Sure?")){
            return;
        }

        await axios.delete("contacts/" + id);
        await getContacts();
    }
    return{
        contact,
        contacts,
        getContact,
        getContacts,
        storeContact,
        storeContact,
        updateContact,
        destroyContact,
        errors,
    } 
}