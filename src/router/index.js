import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import LogIn from '../views/LogIn.vue'
import NotFound from "../views/NotFound";
import Create from "../views/Create.vue"
import Profile from "../views/Profile.vue"
import Routines from "../views/Routines.vue"
import Favorites from "../views/Favorites.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/favorites',   
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/routines',   
    name: 'Routines',
    component: Routines
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
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
