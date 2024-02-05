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
    component: async () => await import("@/views/AccommodationView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: async () => await import("@/views/CartView.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    component: async () => await import("@/views/FAQView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: async () => await import("@/views/LoginView.vue"),
  },
  {
    path: "/me",
    name: "me",
    component: async () => await import("@/views/AccountView.vue"),
  },
  {
    path: "/order/:id",
    name: "order",
    component: async () => await import("@/views/OrderView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: async () => await import("@/views/RegisterView.vue"),
  },
  {
    path: "/team",
    name: "team",
    component: async () => await import("@/views/TeamView.vue"),
  },
  {
    path: "/venue",
    name: "venue",
    component: async () => await import("@/views/VenueView.vue"),
  },
  {
    path: "/speaker/:key",
    name: "speaker",
    component: async () => await import("@/views/SpeakerTemplateView.vue"),
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
