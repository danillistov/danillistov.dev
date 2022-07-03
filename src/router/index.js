import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/components/pages/TheHome.vue';
import About from '@/components/pages/TheAbout.vue';
import Contacts from '@/components/pages/TheContacts.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts,
        },
    ],
});

export default router;