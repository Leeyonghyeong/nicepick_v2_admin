import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'EmptyLayout',
    component: () => import('../layout/EmptyLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue'),
      },
    ],
  },

  {
    path: '/',
    name: 'MainLayout',
    component: () => import('../layout/MainLayout.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard/index.vue'),
      },
      {
        path: '/traffic',
        name: 'traffic',
        component: () => import('../views/traffic/index.vue'),
      },
      {
        path: '/sale/all',
        name: 'saleAll',
        component: () => import('../views/sale/all/index.vue'),
      },
      {
        path: '/sale/detail',
        name: 'saleDetail',
        component: () => import('../views/sale/detail/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
  routes,
})

export default router
