<script setup lang="ts">
import { useDashboardStore } from '@/stores/dashboard'
import StatCard from '@/components/dashboard/StatCard.vue'
import SalesChart from '@/components/dashboard/SalesChart.vue'
import { UsersIcon, ShoppingCartIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/vue/24/outline'

const store = useDashboardStore()
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="p-8">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
        <button class="btn btn-primary">
          Download Report
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total User"
          :value="store.totalUsers"
          :icon="UsersIcon"
          :change="{ value: 8.5, type: 'increase', period: 'Up from yesterday' }"
        />
        <StatCard
          title="Total Order"
          :value="store.totalOrders"
          :icon="ShoppingCartIcon"
          :change="{ value: 1.3, type: 'increase', period: 'Up from past week' }"
        />
        <StatCard
          title="Total Sales"
          :value="'$' + store.totalSales"
          :icon="CurrencyDollarIcon"
          :change="{ value: 4.3, type: 'decrease', period: 'Down from yesterday' }"
        />
        <StatCard
          title="Total Pending"
          :value="store.totalPending"
          :icon="ClockIcon"
          :change="{ value: 1.8, type: 'increase', period: 'Up from yesterday' }"
        />
      </div>

      <SalesChart :data="store.salesData" />
    </div>
  </div>
</template>