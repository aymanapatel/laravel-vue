import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../views/DefaultLayout.vue";
import Dashboard from "../views/Dashboard.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

const routes = [
  //   {
  {
    path: "/dashboard",
    name: "dashboard",
    // redirect: "/dashboard",
    component: Dashboard,
    // children: [
    //   { path: "/dashboard", name: "Dashboard", component: Dashboard },
    //   { path: "/surveys", name: "Surveys", component: Surveys },
    // ],
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
