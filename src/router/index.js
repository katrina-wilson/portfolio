import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
          path: '/home',
          name: 'Home',
          component: () => import('@/views/Home.vue'),
        },
      ]
    },

  ],
});

export default router;
