import { createRouter, createWebHistory } from "vue-router";

// Pages Routers
import LandingPage from "@/pages/LandingPage/LandingPage.vue";
import Dashboard from "@/pages/Dashboard/Dashboard.vue";
import Profile from "@/pages/Profile/Profile.vue";

const routes = [
  { path: "/", name: "landing", component: LandingPage },
  { path: "/dashboard", name: "dashboard", component: Dashboard },
  { path: "/profile", name: "profile", component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
