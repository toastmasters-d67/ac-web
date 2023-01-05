import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(router).use(PrimeVue);
app.component("Button", Button);
app.component("Sidebar", Sidebar);
app.mount("#app");
