<script setup lang="ts">
import { ref } from 'vue'
import Table from '@/components/common/Table.vue'
import Pagination from '@/components/common/Pagination.vue'
import Card from '@/components/common/Card.vue'
import type { TableColumn, Pagination as PaginationType } from '@/types/common'

const columns: TableColumn[] = [
  { key: 'id', label: 'Order ID' },
  { key: 'customer', label: 'Customer' },
  { key: 'date', label: 'Date' },
  { key: 'amount', label: 'Amount', align: 'right' },
  { key: 'status', label: 'Status' }
]

const orders = ref([
  {
    id: '#ORD-001',
    customer: 'John Doe',
    date: '2024-03-15',
    amount: '$299.99',
    status: 'Completed'
  },
  {
    id: '#ORD-002',
    customer: 'Jane Smith',
    date: '2024-03-14',
    amount: '$199.99',
    status: 'Pending'
  }
])

const pagination = ref<PaginationType>({
  page: 1,
  limit: 10,
  total: 50
})
</script>

<template>
  <div class="p-6">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Orders</h1>
      <div class="flex space-x-2">
        <button class="btn btn-primary">Export Orders</button>
      </div>
    </div>

    <Card>
      <div class="flex items-center justify-between mb-4">
        <div class="relative">
          <input
            type="text"
            placeholder="Search orders..."
            class="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 absolute left-3 top-2.5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="flex space-x-2">
          <select class="px-3 py-2 rounded-lg border border-gray-200 text-sm">
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
          <select class="px-3 py-2 rounded-lg border border-gray-200 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <Table
        :columns="columns"
        :data="orders"
      />
      
      <Pagination
        v-model:page="pagination.page"
        :pagination="pagination"
      />
    </Card>
  </div>
</template>