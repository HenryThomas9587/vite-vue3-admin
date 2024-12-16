import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])
  const loading = ref(false)
  const filters = ref({
    search: '',
    category: '',
    status: ''
  })
  const pagination = ref({
    page: 1,
    limit: 10,
    total: 0
  })

  async function fetchProducts() {
    loading.value = true
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      products.value = [
        {
          name: 'Apple Watch Series 7',
          category: 'Electronics',
          price: '$399',
          stock: 45,
          status: 'In Stock'
        },
        {
          name: 'MacBook Pro M1',
          category: 'Electronics',
          price: '$1299',
          stock: 12,
          status: 'Low Stock'
        }
      ]
      pagination.value.total = 100
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    loading,
    filters,
    pagination,
    fetchProducts
  }
})