import { createApp } from 'vue'
import '@styles/index.scss'
import App from '@/app/App.vue'
import {router} from "@/app/routes/router.js";

createApp(App)
    .use(router)
    .mount('#app')
