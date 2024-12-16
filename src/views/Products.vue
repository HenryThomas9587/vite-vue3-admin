<script setup lang="ts">
import { ref } from 'vue'
import Table from '@/components/common/Table.vue'
import Pagination from '@/components/common/Pagination.vue'
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'
import type { TableColumn, Pagination as PaginationType } from '@/types/common'

const columns: TableColumn[] = [
  { key: 'name', label: 'Product Name' },
  { key: 'category', label: 'Category' },
  { key: 'price', label: 'Price', align: 'right' },
  { key: 'stock', label: 'Stock', align: 'right' },
  { key: 'status', label: 'Status' }
]

const products = ref([
  {
    name: 'Apple Watch Series 7',
    category: 'Electronics',
    price: '$399',
    stock: 45,
    status: 'In Stock'
  },
  {
    name: 'MacBook Pro M1',
    category: 'Electronics',
    price: '$1299',
    stock: 12,
    status: 'Low Stock'
  }
])

const pagination = ref<PaginationType>({
  page: 1,
  limit: 10,
  total: 100
})

const actions = [
  {
    label: 'Edit',
    icon: PencilIcon,
    onClick: (item: any) => console.log('Edit', item)
  },
  {
    label: 'Delete',
    icon: TrashIcon,
    onClick: (item: any) => console.log('Delete', item)
  }
]
</script>

<template>
  <div class="p-6">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Products</h1>
      <button class="btn btn-primary">Add Product</button>
    </div>

    <div class="card">
      <div class="flex items-center justify-between mb-4">
        <div class="relative">
          <input
            type="text"
            placeholder="Search products..."
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
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Clothing</option>
          </select>
          <select class="px-3 py-2 rounded-lg border border-gray-200 text-sm">
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>

      <Table
        :columns="columns"
        :data="products"
        :actions="actions"
      />
      
      <Pagination
        v-model:page="pagination.page"
        :pagination="pagination"
      />
    </div>
  </div>
</template>