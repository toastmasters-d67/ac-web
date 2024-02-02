import { createRouter, createWebHistory } from "vue-router";
// @ts-expect-error TS(2307): Cannot find module '@/views/HomeView.vue' or its c... Remove this comment to see the full error message
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
    // @ts-expect-error TS(2307): Cannot find module '@/views/AccommodationView.vue'... Remove this comment to see the full error message
    component: () => import("@/views/AccommodationView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    // @ts-expect-error TS(2307): Cannot find module '@/views/CartView.vue' or its c... Remove this comment to see the full error message
    component: () => import("@/views/CartView.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    // @ts-expect-error TS(2307): Cannot find module '@/views/FAQView.vue' or its co... Remove this comment to see the full error message
    component: () => import("@/views/FAQView.vue"),
  },
  {
    path: "/login",
    name: "login",
    // @ts-expect-error TS(2307): Cannot find module '@/views/LoginView.vue' or its ... Remove this comment to see the full error message
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/me",
    name: "me",
    // @ts-expect-error TS(2307): Cannot find module '@/views/AccountView.vue' or it... Remove this comment to see the full error message
    component: () => import("@/views/AccountView.vue"),
  },
  {
    path: "/order/:id",
    name: "order",
    // @ts-expect-error TS(2307): Cannot find module '@/views/OrderView.vue' or its ... Remove this comment to see the full error message
    component: () => import("@/views/OrderView.vue"),
  },
  {
    path: "/register",
    name: "register",
    // @ts-expect-error TS(2307): Cannot find module '@/views/RegisterView.vue' or i... Remove this comment to see the full error message
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    path: "/team",
    name: "team",
    // @ts-expect-error TS(2307): Cannot find module '@/views/TeamView.vue' or its c... Remove this comment to see the full error message
    component: () => import("@/views/TeamView.vue"),
  },
  {
    path: "/venue",
    name: "venue",
    // @ts-expect-error TS(2307): Cannot find module '@/views/VenueView.vue' or its ... Remove this comment to see the full error message
    component: () => import("@/views/VenueView.vue"),
  },
  {
    path: "/:key",
    name: "speaker",
    // @ts-expect-error TS(2307): Cannot find module '@/views/SpeakerTemplateView.vu... Remove this comment to see the full error message
    component: () => import("@/views/SpeakerTemplateView.vue"),
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  // @ts-expect-error TS(1343): The 'import.meta' meta-property is only allowed wh... Remove this comment to see the full error message
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
