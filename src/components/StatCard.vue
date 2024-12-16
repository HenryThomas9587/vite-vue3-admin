<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  change: {
    value: number
    type: 'increase' | 'decrease'
    period: string
  }
}>()
</script>

<template>
  <div class="card">
    <h3 class="text-gray-500 text-sm">{{ title }}</h3>
    <div class="mt-2 flex items-baseline">
      <div class="text-2xl font-semibold">{{ value }}</div>
      <div
        class="ml-2 text-sm"
        :class="{
          'text-green-500': change.type === 'increase',
          'text-red-500': change.type === 'decrease'
        }"
      >
        {{ change.value }}%
        {{ change.type === 'increase' ? '↑' : '↓' }}
      </div>
    </div>
    <div class="text-gray-400 text-xs mt-1">
      {{ change.period }}
    </div>
  </div>
</template>