import {createRouter, createWebHistory} from 'vue-router'
import {AGHome, AGTest} from '@pages/index.js'

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AGHome
        },
        {
            path: '/test',
            component: AGTest
        },
    ]
})