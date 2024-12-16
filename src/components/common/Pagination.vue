<script setup lang="ts">
import { computed } from 'vue'
import type { Pagination } from '@/types/common'

const props = defineProps<{
  pagination: Pagination
}>()

const emit = defineEmits<{
  (e: 'update:page', value: number): void
}>()

const pages = computed(() => {
  const totalPages = Math.ceil(props.pagination.total / props.pagination.limit)
  return Array.from({ length: totalPages }, (_, i) => i + 1)
})
</script>

<template>
  <div class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
    <div class="flex justify-between sm:hidden">
      <button
        :disabled="pagination.page === 1"
        @click="emit('update:page', pagination.page - 1)"
        class="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
      >
        Previous
      </button>
      <button
        :disabled="pagination.page === pages.length"
        @click="emit('update:page', pagination.page + 1)"
        class="ml-3 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
      >
        Next
      </button>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ (pagination.page - 1) * pagination.limit + 1 }}</span>
          to
          <span class="font-medium">
            {{ Math.min(pagination.page * pagination.limit, pagination.total) }}
          </span>
          of
          <span class="font-medium">{{ pagination.total }}</span>
          results
        </p>
      </div>
      <div>
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
          <button
            v-for="page in pages"
            :key="page"
            @click="emit('update:page', page)"
            :class="[
              page === pagination.page
                ? 'z-10 bg-primary text-white'
                : 'bg-white text-gray-500 hover:bg-gray-50',
              'relative inline-flex items-center px-4 py-2 text-sm font-medium'
            ]"
          >
            {{ page }}
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>