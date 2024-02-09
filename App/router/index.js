
import { createRouter, createWebHistory } from "vue-router";
import AllProducts from "./components/AllProducts.vue";


import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import Cart from '/src/views/Cart.vue'
import DefaultLayout from '/src/layouts/DefaultLayout.vue'

const routes = [
    {
        path: "/produtos",
        name: "AllProducts",
        component: AllProducts,
    },
    {
        path: "/vinhoTinto",
        name: "WineTinto",
        component: () => import("../components/WineTinto.vue"),
    },
    {
        path: "/vinhoBranco",
        name: "vinhoBranco",
        component: () => import("../components/VinhoBranco.vue"),
    },
    // {
    //     path: "/cart",
    //     name: "cart",
    //     component: () => import("../components/Cart.vue"),
    // },

    // versao da loja 6
    {
        path: '/loja6',
        name: 'Public',
        component: DefaultLayout,
        redirect: '/',
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/about',
                name: 'About',
                component: About
            },
            {
                path: '/cart',
                name: 'Cart',
                component: Cart
            }
        ]
    },


];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;