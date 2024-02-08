// main.js
import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { createWebHistory, createRouter } from "vue-router";
import "primevue/resources/themes/saga-blue/theme.css"; // Tema do PrimeVue
import "primevue/resources/primevue.min.css"; // Estilos do PrimeVue
import "primeicons/primeicons.css"; // Ícones do PrimeVue
import "./styles/tailwind.css"; // Arquivo CSS gerado pelo Tailwind
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

// Importe os componentes e páginas necessários
<<<<<<< HEAD
import Header from './components/Header.vue';
import WineCard from './components/WineCard.vue';
import PopUp from './components/PopUp.vue';
import Home from './pages/Home.vue';
import Loja from './pages/Loja.vue';
import Loja2 from './pages/Loja2.vue';
import Loja3 from './pages/Loja3.vue';

=======
import Header from "./components/Header.vue";
import WineCard from "./components/WineCard.vue";
import PopUp from "./components/PopUp.vue";
import Home from "./pages/Home.vue";
import Loja from "./pages/Loja.vue";
import Loja2 from "./pages/Loja2.vue";
>>>>>>> f33fe52a9b55fd424b4246ab78bd5db79a574b3f

import WineQuiz from "./pages/WineQuiz.vue";
import WineForm from "./pages/WineForm.vue";
import WineList from "./pages/WineList.vue";

// Defina as rotas
const routes = [
<<<<<<< HEAD
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/loja', component: Loja },
    { path: '/loja2', component: Loja2 },
    { path: '/loja3', component: Loja3 },

=======
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/loja", component: Loja },
  { path: "/loja2", component: Loja2 },
>>>>>>> f33fe52a9b55fd424b4246ab78bd5db79a574b3f

  { path: "/wineCard", component: WineCard },
  { path: "/wineQuiz", component: WineQuiz },
  { path: "/wineForm", component: WineForm },
  { path: "/popUp", component: PopUp },
  { path: "/wineList", component: WineList },
];

// Crie o roteador
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Crie o aplicativo Vue e configure os plugins e o roteador
const app = createApp(App);
app.use(PrimeVue, { unstyled: true }); // Use o plugin PrimeVue
app.component("Header", Header); // Registre o componente Header globalmente
app.component("DataView", DataView);
app.component("DataViewLayoutOptions", DataViewLayoutOptions);
app.use(router); // Use o roteador criado
app.use(vuetify);

// Monte o aplicativo Vue no elemento com o id "app"
app.mount("#app");
