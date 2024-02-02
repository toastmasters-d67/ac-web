import { createApp } from "vue";
// @ts-expect-error TS(2307): Cannot find module './App.vue' or its correspondin... Remove this comment to see the full error message
import App from "./App.vue";
import router from "./router";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import i18n from "./i18n";
import store from "./store";
const app = createApp(App).use(i18n);
app.use(router).use(PrimeVue);
app.use(store);
app.component("Button", Button);
app.component("Sidebar", Sidebar);
app.mount("#app");
