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
    path: '/products/:id',
    name: 'ProductsList',
    component: () => import('../views/ProductsList.vue')
  },
  {
    path: '/admin',
    name: 'adminPanel',
    component: () => import('../views/adminPanel.vue')
  },
  {
    path: '/sert',
    name: 'Sertific',
    component: () => import('../components/Sertific.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
