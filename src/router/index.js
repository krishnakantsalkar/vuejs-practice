import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/crud",
    name: "CRUD",
    component: () => import("../components/Crud.vue"),
  },
  {
    path: "/harrypotter",
    name: "HarryPotter",
    component: () => import("../components/HarryPotter.vue"),
    children: [
      {
        path: "characters",
        name: "Characters",
        component: () => import("../components/Characters.vue"),
      },
      {
        path: "staff",
        name: "Staff",
        component: () => import("../components/Staff.vue"),
      },
      {
        path: "students",
        name: "Students",
        component: () => import("../components/Students.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
