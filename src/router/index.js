import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/components/pages/TheHome.vue';

const PAGE_NAMES = new Map();
PAGE_NAMES.set('Home', 'Danil Listov - Vue Frontend Developer');

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'Home',
            component: Home,
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = PAGE_NAMES.get(to.name) ?? to.name;
    next();
});

export default router;