import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Base',
      component: () => import('@/layouts/Layout.vue'),
      redirect: (to) => ({ name: 'Home' }),
      meta: {
        requiresAuth: false,
      },
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/Home.vue'),
        },
      ]
    },

  ],
});

export default router;
