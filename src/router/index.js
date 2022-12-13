import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/speakers",
    name: "speakers",
    component: () => import("@/views/SpeakersView.vue"),
  },
  {
    path: "/speakers/:name",
    name: "speaker",
    component: () => import("@/views/SpeakerTemplateView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
