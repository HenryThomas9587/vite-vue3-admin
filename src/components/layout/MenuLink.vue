<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import type { MenuItem } from '@/types/menu'

const props = defineProps<{
  item: MenuItem
  isActive: boolean
  isExpanded: boolean
  collapsed: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle', id: string): void
}>()
</script>

<template>
  <div>
    <template v-if="item.children">
      <button
        class="w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors"
        :class="isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'"
        @click="emit('toggle', item.id)"
      >
        <div class="flex items-center">
          <component
            v-if="item.icon"
            :is="item.icon"
            class="h-5 w-5 mr-3"
          />
          <span :class="{ hidden: collapsed }">
            {{ item.title }}
          </span>
        </div>
        <ChevronDownIcon
          class="h-4 w-4 transition-transform"
          :class="{ 'rotate-180': isExpanded }"
        />
      </button>
    </template>
    <template v-else>
      <RouterLink
        :to="item.path || '#'"
        class="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors"
        :class="isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'"
      >
        <component
          v-if="item.icon"
          :is="item.icon"
          class="h-5 w-5 mr-3"
        />
        <span :class="{ hidden: collapsed }">
          {{ item.title }}
        </span>
      </RouterLink>
    </template>
  </div>
</template>