import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/mission',
      component: () => import('@/views/MissionView.vue'),
    },
    {
      path: '/sondage',
      component: () => import('@/views/SondageView.vue'),
    },
  ],
})

export default router
