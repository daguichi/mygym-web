import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import LogIn from '../views/LogIn.vue'
import NotFound from "../views/NotFound";
import Create from "../views/Create.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',   
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/create",
    name: "Create",
    component: Create
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
