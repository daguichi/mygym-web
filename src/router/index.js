import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateRoutine from "../views/CreateRoutine";
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
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/routines",
    name: "Routines",
    component: Routines,
  },
  {
    path: "/createRoutine",
    name: CreateRoutine,
    component: CreateRoutine,
  },
  {
    path: "/profile/",
    name: "Profile",
    component: Profile,
    children: [
      {
        path: "miperfil",
        name: "Mi perfil",
        component: MiPerfil,
      },
      {
        path: "misejercicios",
        name: "Mis ejercicios",
        component: MisEjercicios,
      },
      {
        path: "misrutinas",
        name: "Mis rutinas",
        component: MisRutinas,
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

export default router;
