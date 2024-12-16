import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDashboardStore = defineStore('dashboard', () => {
  const totalUsers = ref(40689)
  const totalOrders = ref(10293)
  const totalSales = ref(89000)
  const totalPending = ref(2040)

  const salesData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      data: [30, 40, 60, 70, 50, 60],
      fill: true,
      borderColor: '#646cff',
      backgroundColor: 'rgba(100, 108, 255, 0.1)'
    }]
  })

  return {
    totalUsers,
    totalOrders,
    totalSales,
    totalPending,
    salesData
  }
})