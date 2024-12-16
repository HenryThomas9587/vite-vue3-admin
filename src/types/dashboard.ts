export interface StatChange {
  value: number
  type: 'increase' | 'decrease'
  period: string
}

export interface MenuItem {
  name: string
  path: string
  icon: string
}

export interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    fill: boolean
    borderColor: string
    backgroundColor: string
  }[]
}