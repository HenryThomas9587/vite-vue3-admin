import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { MenuItem } from '@/types/menu'
import { 
  HomeIcon, 
  ShoppingBagIcon,
  ClockIcon,
  CalendarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  CubeIcon,
  InboxIcon,
  HeartIcon,
  ListBulletIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/vue/24/outline'

export const useMenuStore = defineStore('menu', () => {
  const collapsed = ref(false)
  const items = ref<MenuItem[]>([
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: HomeIcon,
      path: '/',
      component: () => import('@/views/Dashboard.vue')
    },
    {
      id: 'products',
      title: 'Products',
      icon: ShoppingBagIcon,
      children: [
        {
          id: 'product-list',
          title: 'Product List',
          path: '/products',
          component: () => import('@/views/Products.vue')
        },
        {
          id: 'product-stock',
          title: 'Product Stock',
          path: '/product-stock',
          component: () => import('@/views/Products.vue')
        }
      ]
    },
    {
      id: 'favorites',
      title: 'Favorites',
      icon: HeartIcon,
      path: '/favorites'
    },
    {
      id: 'inbox',
      title: 'Inbox',
      icon: InboxIcon,
      path: '/inbox'
    },
    {
      id: 'orders',
      title: 'Orders',
      icon: ClockIcon,
      path: '/orders',
      component: () => import('@/views/Orders.vue')
    },
    {
      id: 'calendar',
      title: 'Calendar',
      icon: CalendarIcon,
      path: '/calendar'
    },
    {
      id: 'team',
      title: 'Team',
      icon: UserGroupIcon,
      path: '/team'
    },
    {
      id: 'invoice',
      title: 'Invoice',
      icon: DocumentTextIcon,
      path: '/invoice'
    }
  ])

  const bottomItems = ref<MenuItem[]>([
    {
      id: 'settings',
      title: 'Settings',
      icon: Cog6ToothIcon,
      path: '/settings'
    },
    {
      id: 'logout',
      title: 'Logout',
      icon: ArrowLeftOnRectangleIcon,
      path: '/logout'
    }
  ])

  const toggleCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  const flattenedRoutes = computed(() => {
    const flatten = (items: MenuItem[]): MenuItem[] => {
      return items.reduce((acc: MenuItem[], item) => {
        if (item.path && item.component) {
          acc.push(item)
        }
        if (item.children) {
          acc.push(...flatten(item.children))
        }
        return acc
      }, [])
    }
    return flatten(items.value)
  })

  return {
    collapsed,
    items,
    bottomItems,
    toggleCollapsed,
    flattenedRoutes
  }
})