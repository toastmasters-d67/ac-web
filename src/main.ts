import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router.ts'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primeicons/primeicons.css'
import i18n from './i18n.ts'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(i18n)
app.use(router)
app.use(PrimeVue)
app.component('Button', Button)
app.component('Sidebar', Sidebar)
app.mount('#app')
