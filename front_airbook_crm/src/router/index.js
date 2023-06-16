import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    redirect: { name: "Login" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/loginPage.vue"),
  },

  {
    path: "/default",
    name: "Default",
    component: () => import("../Layout/Default.vue"),
    children: [
      {
        path: "/contacts",
        name: "Contacts",
        component: () => import("../views/Contact.vue"),
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "crm-active-link",
});

export default router;
