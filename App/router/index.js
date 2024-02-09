
import { createRouter, createWebHistory } from "vue-router";
import AllProducts from "./components/AllProducts.vue";

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
    {
        path: "/cart",
        name: "cart",
        component: () => import("../components/Cart.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;