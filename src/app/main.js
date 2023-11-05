import { createApp } from 'vue'
import App from '@/app/App.vue'
import {router} from "@/app/routes/router.js";

import '@styles/index.scss'

createApp(App)
    .use(router)
    .mount('#app')
