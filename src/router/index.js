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
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/MyTransitions',
    name: 'Transitions',
    component: () => import('../views/MyTransitions.vue')
  },
  {
    path: '/NewTask',
    name: 'CreateNewTask',
    component: () => import('../views/AddNewTask.vue')
  },
  {
    path: '/AddNewTransition',
    name: 'NewTransition',
    component: () => import('../views/AddingNewTransition.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
