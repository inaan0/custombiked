import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/HomePage.vue'),
      meta: { title: 'CustomBiked — Made for every rider' },
    },
    {
      path: '/models',
      component: () => import('@/pages/ModelsPage.vue'),
      meta: { title: 'Models · CustomBiked' },
    },
    {
      path: '/accessibility',
      component: () => import('@/pages/AccessibilityPage.vue'),
      meta: { title: 'Accessibility · CustomBiked' },
    },
    {
      path: '/reviews',
      component: () => import('@/pages/ReviewsPage.vue'),
      meta: { title: 'Reviews · CustomBiked' },
    },
    {
      path: '/contact',
      component: () => import('@/pages/ContactPage.vue'),
      meta: { title: 'Contact · CustomBiked' },
    },
  ],
})

router.afterEach((to) => {
  document.title = (to.meta.title as string) ?? 'CustomBiked'
})

export default router
