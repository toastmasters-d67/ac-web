import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/accommodation",
    name: "accommodation",
    component: () => import("@/views/AccommodationView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/CartView.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("@/views/FAQView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/me",
    name: "me",
    component: () => import("@/views/AccountView.vue"),
  },
  {
    path: "/order",
    name: "order",
    component: () => import("@/views/OrderView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    path: "/venue",
    name: "venue",
    component: () => import("@/views/VenueView.vue"),
  },
  {
    path: "/:key",
    name: "speaker",
    component: () => import("@/views/SpeakerTemplateView.vue"),
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
