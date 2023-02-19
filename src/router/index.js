import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'text-primary',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/calendar.vue')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/new.vue')
    }
  ]
})

export default router
