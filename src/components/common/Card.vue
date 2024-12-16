<script setup lang="ts">
defineProps<{
  title?: string
  loading?: boolean
}>()
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm">
    <div v-if="title || $slots.header" class="px-6 py-4 border-b border-gray-200">
      <slot name="header">
        <h3 class="text-lg font-medium text-gray-900">{{ title }}</h3>
      </slot>
    </div>
    <div :class="{ 'p-6': !$slots.header }">
      <div v-if="loading" class="animate-pulse space-y-4">
        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
      <slot v-else></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>