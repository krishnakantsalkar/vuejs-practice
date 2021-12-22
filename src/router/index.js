import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/characters",
    name: "Characters",
    component: () => import("../components/Characters.vue"),
  },
  {
    path: "/staff",
    name: "Staff",
    component: () => import("../components/Staff.vue"),
  },
  {
    path: "/students",
    name: "Students",
    component: () => import("../components/Students.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
