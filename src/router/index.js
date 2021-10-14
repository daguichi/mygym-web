import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LogIn from "../views/LogIn";
import NotFound from "../views/NotFound";
import Profile from "../views/Profile";
import Favorites from "../views/Favorites";
import Routines from "../views/Routines";
import Register from "../views/Register";
import Verification from "../views/Verification";

import MiPerfil from "../components/profile/MiPerfil";
import MisRutinas from "../components/profile/MisRutinas";
import MisEjercicios from "../components/profile/MisEjercicios"

import security from "@/store/modules/security"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
    meta: { requiresAuth: true }
  },
  {
    path: "/routines",
    name: "Routines",
    component: Routines,
    meta: { requiresAuth: true }
  },
  {
    path: "/profile/",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true },
    children: [
      {
        path: "miperfil",
        name: "Mi perfil",
        component: MiPerfil,
        meta: { requiresAuth: true }
      },
      {
        path: "misejercicios",
        name: "Mis ejercicios",
        component: MisEjercicios,
        meta: { requiresAuth: true }
      },
      {
        path: "misrutinas",
        name: "Mis rutinas",
        component: MisRutinas,
        meta: { requiresAuth: true }
      },
    ],
  },
  {
    path: "/verification",
    name: "Verification",
    component: Verification,
  },
  {
    path: "notFound",
    alias: "*",
    name: "NotFound",
    component: NotFound,
    
  },

];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL, INVESTIGAR QUE HACE
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!security.state.token) {
      next({ name: "LogIn", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
