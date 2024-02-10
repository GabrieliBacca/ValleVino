import { createRouter, createWebHistory } from "vue-router";
import LojaHome from '../src/pages/Home.vue'; // Assuming LojaHome is the component for the home page
import Loja3 from '../src/pages/Loja3.vue'; // Assuming Loja3 is the component for the loja3 page
import Loja5 from '../src/pages/Loja5.vue'; // Assuming Loja5 is the component for the loja5 page

const routes = [
    { path: '/', component: LojaHome },
    { path: '/loja3', component: Loja3 },
    { path: '/loja5', component: Loja5 },
    // other routes
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;