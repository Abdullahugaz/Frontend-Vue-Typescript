// src/stores/customers.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { http } from '@/axios/api';
import { Customer } from '@/types/customer';

export const useCustomerStore = defineStore('customers', () => {
  // State
  const customers = ref<Customer[]>([]);
  const loading = ref(false);

  // Actions
  async function fetchCustomers() {
    loading.value = true;
    try {
      const res = await http.get<Customer[]>('/customers');
      customers.value = res.data;
    } finally {
      loading.value = false;
    }
  }

  async function addCustomer(newCustomer: Customer) {
    await http.post('/customers', newCustomer);
    await fetchCustomers();
  }

  async function updateCustomer(id: number, updated: Partial<Customer>) {
    await http.put(`/customers/${id}`, updated);
    await fetchCustomers();
  }

  async function deleteCustomer(id: number) {
    await http.delete(`/customers/${id}`);
    customers.value = customers.value.filter(c => c.id !== id);
  }

  return { customers, loading, fetchCustomers, addCustomer, updateCustomer, deleteCustomer };
});
