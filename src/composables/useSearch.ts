import { ref, watch } from 'vue'
import { debounce } from '@/utils/debounce'

export function useSearch(callback: (query: string) => void, delay = 300) {
  const searchQuery = ref('')

  const debouncedSearch = debounce((query: string) => {
    callback(query)
  }, delay)

  watch(searchQuery, (newQuery) => {
    debouncedSearch(newQuery)
  })

  return {
    searchQuery
  }
}