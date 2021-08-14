import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../src/views/Home.vue";
import MorningPages from "../src/views/pages/morning-pages/morning-pages.vue";
import PageDiary from "../src/views/pages/page-diary/page-diary.vue";
import PageMailToAngel from "../src/views/pages/page-mail-to-angel/page-mail-to-angel.vue";
import PageWealth from "../src/views/pages/page-wealth/page-wealth.vue";
import PageSelfWorking from "../src/views/pages/page-self-working/page-self-working.vue";

Vue.use(VueRouter)

const routes = [{
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        path: '/morning-pages',
        name: 'morning-pages',
        component: MorningPages
    },
    {
        path: '/page-diary',
        name: 'page-diary',
        component: PageDiary
    },
    {
        path: '/page-mail-to-angel',
        name: 'page-mail-to-angel',
        component: PageMailToAngel
    },
    {
        path: '/page-wealth',
        name: 'page-wealth',
        component: PageWealth
    },
    {
        path: '/page-self-working',
        name: 'page-self-working',
        component: PageSelfWorking
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router