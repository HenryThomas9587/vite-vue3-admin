import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import { useMenuStore } from '@/stores/menu'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})

// Dynamic route registration
const registerRoutes = (router: any) => {
  const menuStore = useMenuStore()
  
  menuStore.flattenedRoutes.forEach(route => {
    if (route.path && route.component && !router.hasRoute(route.path)) {
      router.addRoute({
        path: route.path,
        name: route.title,
        component: route.component
      })
    }
  })
}

// Register routes after the router is ready
router.isReady().then(() => {
  registerRoutes(router)
})

router.beforeEach((to, from, next) => {
  if (!router.hasRoute(to.name as string) && to.path !== '/') {
    next('/')
  } else {
    next()
  }
})

export default router