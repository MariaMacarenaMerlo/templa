import { createRouter, createWebHashHistory } from "vue-router";
import { subscribeToUserStateChanges } from "../services/auth.js";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import BreathView from "../views/BreathView.vue";
import Splash from "../views/Splash.vue";
import Perfil from "../views/Profile.vue";
const routes = [
  {
    path: "/",
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
    path: "/breath/:id",
    name: "BreathView",
    component: BreathView,
  },
  {
    path: "/splash",
    name: "Splash",
    component: Splash,
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil,
    meta: { isProtected: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//protección con guards

let user = null;
subscribeToUserStateChanges((userData) => {
  user = userData;
});

router.beforeEach((to, from) => {
  console.log("user:", user);
  if (to.meta.isProtected && !user) return "/login";
});

export default router;
