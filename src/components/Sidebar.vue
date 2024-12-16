<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuItems = [
  { name: 'Dashboard', path: '/', icon: 'ChartBarIcon' },
  { name: 'Products', path: '/products', icon: 'CubeIcon' },
  { name: 'Orders', path: '/orders', icon: 'ShoppingCartIcon' },
]
</script>

<template>
  <aside class="w-64 h-screen bg-white border-r border-gray-200">
    <div class="p-4">
      <h1 class="text-xl font-bold text-primary">DashStack</h1>
    </div>
    <nav class="mt-4">
      <RouterLink
        v-for="item in menuItems"
        :key="item.name"
        :to="item.path"
        class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        <span class="ml-2">{{ item.name }}</span>
      </RouterLink>
    </nav>
  </aside>
</template>