import { createApp } from 'vue'
import '@styles/main.scss'
import App from '@/app/App.vue'
import {router} from "@/app/routes/router.js";

createApp(App)
    .use(router)
    .mount('#app')
