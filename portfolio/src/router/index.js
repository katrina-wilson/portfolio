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
        requiresAuth: false, // TODO: true, implement auth
      },
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/Home.vue'),
        },
        // {
        //   path: '/about',
        //   name: 'About',
        //   component: () => import('@/views/AboutView.vue'),
        // },
      ]
    },

  ],
});

export default router
