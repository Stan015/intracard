import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/rewards",
      name: "rewards",
      component: () => import("../views/RewardsView.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../views/FaqView.vue"),
    },
    {
      path: "/resources",
      name: "resources",
      component: () => import("../views/ResourcesView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/CantactView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUpView.vue"),
    },
  ],
});

export default router;
