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
      path: '/boot-register',
      name: 'bootRegister',
      component: () => import('../views/home/BootRegistrationView.vue'),
    },
    {
      path: '/tail-register',
      name: 'tailRegister',
      component: () => import('../views/home/TailRegistrationView.vue'),
    },
    {
      path: '/bootstrap',
      name: 'bootstrap',
      component: () => import('../views/home/CustomBootstrap.vue'),
    },
    {
      path: '/tailwind',
      name: 'tailwind',
      component: () => import('../views/home/CustomTailwind.vue'),
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
