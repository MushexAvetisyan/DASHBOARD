import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Refresh',
    name: 'Refresh',
    component: () => import('../views/Refresh.vue')
  },
  {
    path: '/Help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
