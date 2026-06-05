import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import BreathView from "../views/BreathView.vue";
import Splash from "../views/Splash.vue";
import ComingSoon from "../views/ComingSoon.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/breath",
    name: "BreathView",
    component: BreathView,
  },
  {
    path: "/splash",
    name: "Splash",
    component: Splash,
  },
  {
    path: "/",
    name: "ComingSoon",
    component: ComingSoon,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
