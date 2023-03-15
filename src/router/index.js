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
    },
    {
      path: '/read/:id',
      name: 'read',
      component: () => import('../views/read.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Not found',
      component: () => import('../views/notfound.vue')
    }
  ]
})

export default router
