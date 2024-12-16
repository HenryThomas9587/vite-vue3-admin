<script setup lang="ts">
import type { TableColumn, TableAction } from '@/types/common'

defineProps<{
  columns: TableColumn[]
  data: any[]
  actions?: TableAction[]
  loading?: boolean
}>()
</script>

<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ column.label }}
          </th>
          <th v-if="actions" scope="col" class="relative px-6 py-3">
            <span class="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-if="loading" class="animate-pulse">
          <td
            :colspan="actions ? columns.length + 1 : columns.length"
            class="px-6 py-4"
          >
            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          </td>
        </tr>
        <template v-else>
          <tr v-for="(item, index) in data" :key="index">
            <td
              v-for="column in columns"
              :key="column.key"
              class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
              :class="{ 'text-right': column.align === 'right' }"
            >
              {{ item[column.key] }}
            </td>
            <td v-if="actions" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                v-for="action in actions"
                :key="action.label"
                class="text-primary hover:text-secondary ml-4 first:ml-0"
                @click="action.onClick(item)"
              >
                <component
                  v-if="action.icon"
                  :is="action.icon"
                  class="h-5 w-5"
                />
                <span v-else>{{ action.label }}</span>
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>