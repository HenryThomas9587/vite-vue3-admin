<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { 
  HomeIcon, 
  ShoppingBagIcon, 
  ClockIcon,
  CalendarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()

const menuItems = [
  { name: 'Dashboard', path: '/', icon: HomeIcon },
  { name: 'Products', path: '/products', icon: ShoppingBagIcon },
  { name: 'Order Lists', path: '/orders', icon: ClockIcon },
  { name: 'Calendar', path: '/calendar', icon: CalendarIcon },
  { name: 'Team', path: '/team', icon: UserGroupIcon },
  { name: 'Invoice', path: '/invoice', icon: DocumentTextIcon },
]

const bottomMenuItems = [
  { name: 'Settings', path: '/settings', icon: Cog6ToothIcon },
  { name: 'Logout', path: '/logout', icon: ArrowLeftOnRectangleIcon },
]
</script>

<template>
  <aside class="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
    <div class="p-6">
      <div class="flex items-center space-x-2">
        <img src="/vite.svg" alt="Logo" class="h-8 w-8" />
        <h1 class="text-xl font-bold text-gray-900">DashStack</h1>
      </div>
    </div>
    
    <nav class="flex-1 px-4 space-y-1">
      <RouterLink
        v-for="item in menuItems"
        :key="item.name"
        :to="item.path"
        :class="[
          route.path === item.path
            ? 'bg-primary text-white'
            : 'text-gray-700 hover:bg-gray-100',
          'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors'
        ]"
      >
        <component :is="item.icon" class="h-5 w-5 mr-3" />
        {{ item.name }}
      </RouterLink>
    </nav>
    
    <div class="p-4 space-y-1">
      <RouterLink
        v-for="item in bottomMenuItems"
        :key="item.name"
        :to="item.path"
        class="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <component :is="item.icon" class="h-5 w-5 mr-3" />
        {{ item.name }}
      </RouterLink>
    </div>
  </aside>
</template>