<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { useMenuStore } from '@/stores/menu'
import type { MenuItem } from '@/types/menu'
import MenuLink from './MenuLink.vue'

const route = useRoute()
const menuStore = useMenuStore()
const expandedMenus = ref<Set<string>>(new Set())

const toggleMenu = (menuId: string) => {
  if (expandedMenus.value.has(menuId)) {
    expandedMenus.value.delete(menuId)
  } else {
    expandedMenus.value.add(menuId)
  }
}

const isActive = (item: MenuItem): boolean => {
  if (item.path === route.path) return true
  if (item.children) {
    return item.children.some(child => child.path === route.path)
  }
  return false
}

const isExpanded = (menuId: string): boolean => {
  return expandedMenus.value.has(menuId)
}
</script>

<template>
  <aside
    class="relative flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300"
    :class="{ 'w-20': menuStore.collapsed, 'w-64': !menuStore.collapsed }"
  >
    <div class="p-6 flex items-center justify-between">
      <div class="flex items-center space-x-2" :class="{ 'justify-center': menuStore.collapsed }">
        <img src="/vite.svg" alt="Logo" class="h-8 w-8" />
        <h1 v-if="!menuStore.collapsed" class="text-xl font-bold text-gray-900">DashStack</h1>
      </div>
      <button
        class="p-2 rounded-lg hover:bg-gray-100"
        @click="menuStore.toggleCollapsed"
      >
        <Bars3Icon class="h-5 w-5 text-gray-500" />
      </button>
    </div>

    <div class="flex-1 overflow-y-auto scrollbar-thin">
      <nav class="px-4 space-y-1">
        <template v-for="item in menuStore.items" :key="item.id">
          <MenuLink
            :item="item"
            :is-active="isActive(item)"
            :is-expanded="isExpanded(item.id)"
            :collapsed="menuStore.collapsed"
            @toggle="toggleMenu"
          />
          
          <div
            v-if="item.children && isExpanded(item.id)"
            class="ml-4 pl-4 border-l border-gray-200 space-y-1"
          >
            <MenuLink
              v-for="child in item.children"
              :key="child.id"
              :item="child"
              :is-active="isActive(child)"
              :is-expanded="false"
              :collapsed="menuStore.collapsed"
              @toggle="toggleMenu"
            />
          </div>
        </template>
      </nav>
    </div>

    <div class="p-4 space-y-1 border-t border-gray-200">
      <MenuLink
        v-for="item in menuStore.bottomItems"
        :key="item.id"
        :item="item"
        :is-active="isActive(item)"
        :is-expanded="false"
        :collapsed="menuStore.collapsed"
        @toggle="toggleMenu"
      />
    </div>
  </aside>
</template>

<style scoped>
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 3px;
}
</style>