<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js'
import type { ChartData } from '@/types/dashboard'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

defineProps<{
  data: ChartData
}>()

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  },
  elements: {
    line: {
      tension: 0.4
    }
  }
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm p-6">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Sales Details</h2>
      <select class="px-3 py-2 rounded-lg border border-gray-200 text-sm">
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>
    </div>
    
    <div class="h-[400px]">
      <Line
        :data="data"
        :options="chartOptions"
      />
    </div>
  </div>
</template>