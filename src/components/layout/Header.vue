<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const user = {
  name: 'Moni Roy',
  role: 'Admin',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MonaRoy'
}
</script>

<template>
  <header class="bg-white h-16 px-6 flex items-center justify-between border-b border-gray-200">
    <div class="flex items-center">
      <div class="relative w-64">
        <input
          type="text"
          placeholder="Search"
          class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-2.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    
    <div class="flex items-center space-x-4">
      <button class="p-2 rounded-lg hover:bg-gray-100">
        <BellIcon class="h-6 w-6 text-gray-500" />
      </button>
      
      <Menu as="div" class="relative">
        <MenuButton class="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2">
          <img :src="user.avatar" alt="" class="h-8 w-8 rounded-full" />
          <div class="text-left">
            <div class="text-sm font-medium text-gray-700">{{ user.name }}</div>
            <div class="text-xs text-gray-500">{{ user.role }}</div>
          </div>
          <ChevronDownIcon class="h-5 w-5 text-gray-400" />
        </MenuButton>
        
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems class="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                Your Profile
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                Settings
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                Sign out
              </a>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </header>
</template>