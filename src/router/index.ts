import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/home/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/home/RegistrationView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/home/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/home/ContactView.vue'),
    },
  ],
})

export default router
