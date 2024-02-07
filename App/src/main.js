import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { createRouter, createWebHistory } from "vue-router";
import "primevue/resources/themes/saga-blue/theme.css"; // Tema do PrimeVue
import "primevue/resources/primevue.min.css"; // Estilos do PrimeVue
import "primeicons/primeicons.css"; // Ícones do PrimeVue
import "./styles/tailwind.css"; // Arquivo CSS gerado pelo Tailwind
import Home from "./pages/Home.vue"; // Importe o componente Home
import Loja from "./pages/Loja.vue";
import Quiz from "./pages/WineQuiz.vue";
import Login from "./pages/Login.vue";
import WineCard from "./components/WineCard.vue";

const routes = [
  { path: "/", component: Home }, // Rota para o componente Home
  { path: "/loja", component: Loja },
  { path: "/quiz", component: Quiz },
  { path: "/login", component: Login },
  { path: "/winecard", component: WineCard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router); // Use o router criado
app.use(PrimeVue, {
  unstyled: true,
});
app.mount("#app");
