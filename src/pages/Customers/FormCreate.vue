<template>
  <div>
    <h2 class="font-semibold text-black text-2xl justify-center items-center">Customers</h2>

    <form @submit.prevent="create" class="text-black text-2xl flex flex-col rounded bg-gray-300 w-1/2 mt-10">
    <label>Name  </label>
    
      <input v-model="form.name" placeholder="Name" class="mt-4 rounded focus:outline-none focus:ring-blue-950 ring-2"  />
      
    
      <label>Email  </label>
      <input v-model="form.email" placeholder="Email" class="mt-4 rounded focus:outline-none focus:ring-blue-950 ring-2"  />
    

<label> Phone </label>
      <input v-model="form.phoneNumber" placeholder="Phone" class="mt-4 rounded focus:outline-none focus:ring-blue-950 ring-2"  />
      
<label>Address  </label>
      <input v-model="form.address" placeholder="Address" class="mt-4 rounded focus:outline-none focus:ring-blue-950 ring-2"  />
     
      <label>Password</label>
      <input v-model="form.password" placeholder="*****" class="mt-4 rounded focus:outline-none focus:ring-blue-950 ring-2"  />


      <button type="submit" class="rounded-lg text-white text-xl bg-blue-950 mt-4">New Record</button>
    </form>

    <div v-if="loading">Loading...</div>

    <ul class="w-1/2 ">
      <li v-for="c in customers" :key="c.id">
        {{ c.name }} - {{ c.email }} - {{ c.phoneNumber }}
        <button @click="remove(c.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue';
import { useCustomerStore } from '@/stores/customers';
import { storeToRefs } from 'pinia';


const customerStore = useCustomerStore();
const { customers, loading } = storeToRefs(customerStore);

const form = reactive({
  name: '',
  email: '',
  phoneNumber: '',
  address: '',
  password: '',
});

async function create() {
  await customerStore.addCustomer(form);
  form.name = '';
  form.email = '';
  form.phoneNumber = '';
  form.address = '';
  form.password = '';
}

async function remove(id: number) {
  await customerStore.deleteCustomer(id);
}

onMounted(() => {
  customerStore.fetchCustomers();
});
</script>
