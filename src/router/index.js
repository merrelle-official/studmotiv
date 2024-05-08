import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestingView from '../views/TestingView.vue'
import ResultView from '@/views/ResultView.vue'
import AccountView from '@/views/AccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/testing',
      name: 'testing',
      component: TestingView
    },
    {
      path: "/result",
      name: "/result",
      component: ResultView
    },
    {
      path: "/account",
      name: "/account",
      component: AccountView
    }
  ]
})

export default router



