import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("@/views/FAQView.vue"),
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
