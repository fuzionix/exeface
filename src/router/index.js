import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
    alias: '/home'
  },
  {
    path: '/error/:name',
    name: 'error',
    component: () => import('../views/Error.vue'),
    hidden: true
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/error/page',
    hidden: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router