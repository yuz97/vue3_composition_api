import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
   },
   {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
   },
   {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
   },
   {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
   },
   {
      path: "/post",
      name: "post",
      component: () => import("../views/PostView.vue"),
   },
   {
      path: "/post2",
      name: "post2",
      component: () => import("../views/PostView2.vue"),
   },
   {
      path: "/post/:id",
      name: "post-detail",
      component: () => import("../views/PostDetail.vue"),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   linkActiveClass: "text-blue-500",
   routes,
});

export default router;
