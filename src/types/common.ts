export interface TableColumn {
  key: string
  label: string
  sortable?: boolean
  align?: 'left' | 'center' | 'right'
}

export interface Pagination {
  page: number
  limit: number
  total: number
}

export interface FilterOption {
  label: string
  value: string | number
}

export interface TableAction {
  label: string
  icon?: any
  onClick: (item: any) => void
}