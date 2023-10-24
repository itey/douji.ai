import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/page/Home")
  },
  {
    path: '/',
    name: 'usercenter',
    component: () => import("@/page/UserCenter")
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
