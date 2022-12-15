import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/intro',
    name: 'Intro',
    component: () => import('../views/Intro.vue'),
  },
  {
    path: '/afk',
    name: 'Afk',
    component: () => import('../views/Afk.vue'),
  },
  {
    path: '/outro',
    name: 'Outro',
    component: () => import('../views/Outro.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
