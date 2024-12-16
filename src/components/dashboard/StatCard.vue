<script setup lang="ts">
import type { StatChange } from '@/types/dashboard'

defineProps<{
  title: string
  value: string | number
  icon: any
  change: StatChange
}>()
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm p-6 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
      <div class="absolute inset-0 bg-primary opacity-10 rounded-full"></div>
    </div>
    
    <div class="relative">
      <component :is="icon" class="h-8 w-8 text-primary mb-4" />
      
      <h3 class="text-gray-500 text-sm font-medium mb-2">{{ title }}</h3>
      
      <div class="flex items-baseline space-x-2">
        <div class="text-2xl font-bold text-gray-900">{{ value }}</div>
        <div
          class="text-sm font-medium"
          :class="{
            'text-green-500': change.type === 'increase',
            'text-red-500': change.type === 'decrease'
          }"
        >
          {{ change.value }}%
          <span class="inline-block transform" :class="{ 'rotate-180': change.type === 'decrease' }">
            ↑
          </span>
        </div>
      </div>
      
      <div class="text-gray-400 text-xs mt-1">
        {{ change.period }}
      </div>
    </div>
  </div>
</template>