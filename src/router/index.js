import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from "../views/Create.vue"
import CreateRoutine from "../views/CreateRoutine";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: () =>
        import(/* webpackChunkName: "login" */ "@/views/LogIn.vue"),
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
        import(/* webpackChunkName: "Register" */ "@/views/Register.vue"),
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites',   
    name: 'Favorites',
    component: () =>
        import(/* webpackChunkName: "Favorites" */ "@/views/Favorites.vue"),
  },
  {
    path: '/routines',   
    name: 'Routines',
    component: () =>
        import(/* webpackChunkName: "Routines" */ "@/views/Routines.vue"),
  },
  {
    path: "/create",
    name: "Create",
    component: Create
  },
  {
    path: "/createRoutine",
    name: CreateRoutine,
    component: CreateRoutine
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
        import(/* webpackChunkName: "Profile" */ "@/views/Profile.vue"),
  },
  {
    path: "notFound",
    alias: "*",
    name: "NotFound",
    component: () =>
        import(/* webpackChunkName: "notfound" */ "@/views/NotFound.vue"),
  }
];

const router = new VueRouter({
  mode: 'history',
 // base: process.env.BASE_URL,
  routes
});


export default router;
