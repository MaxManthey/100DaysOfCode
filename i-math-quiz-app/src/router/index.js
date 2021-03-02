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
    path: '/addition',
    name: 'Addition',
    component: () => import(/* webpackChunkName: "about" */ '../views/Addition.vue')
  },
  {
    path: '/subtraction',
    name: 'Subtraction',
    component: () => import(/* webpackChunkName: "about" */ '../views/Subtraction.vue')
  },
  {
    path: '/multiplication',
    name: 'Multiplication',
    component: () => import(/* webpackChunkName: "about" */ '../views/Multiplication.vue')
  },
  {
    path: '/division',
    name: 'Division',
    component: () => import(/* webpackChunkName: "about" */ '../views/Division.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
