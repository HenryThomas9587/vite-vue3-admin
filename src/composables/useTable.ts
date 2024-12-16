import { ref, computed } from 'vue'
import type { Pagination } from '@/types/common'

export function useTable(initialLimit = 10) {
  const currentPage = ref(1)
  const totalItems = ref(0)
  const itemsPerPage = ref(initialLimit)
  const loading = ref(false)

  const pagination = computed<Pagination>(() => ({
    page: currentPage.value,
    limit: itemsPerPage.value,
    total: totalItems.value
  }))

  const setPage = (page: number) => {
    currentPage.value = page
  }

  const setTotal = (total: number) => {
    totalItems.value = total
  }

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  return {
    currentPage,
    totalItems,
    itemsPerPage,
    loading,
    pagination,
    setPage,
    setTotal,
    setLoading
  }
}