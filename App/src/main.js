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

// import router from "../router"; //desativada essa importação pois a linha 5 ja é suficiente
import store from "./store/index.js";
// import lojaa from "./store/index2.js";

// import AllProducts from "./components/AllProducts.vue";

// import Wrapper from "./components/Wrapper.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import Home2 from "./views/Home.vue";
// import Cart from "./views/Cart.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";

const vuetify = createVuetify({
  components,
  directives,
});

// Importe os componentes e páginas necessários
import Header from "./components/Header.vue";
import WineCard from "./components/WineCard.vue";
import PopUp from "./components/PopUp.vue";
import Home from "./pages/Home.vue";
import Loja from "./pages/Loja.vue";
import Loja2 from "./pages/Loja2.vue";
import Loja3 from "./pages/Loja3.vue";
import Loja4 from "./pages/Loja4.vue";
import Loja5 from "./pages/Loja5.vue";
import Loja6 from "./pages/Loja6.vue";

import WineQuiz from "./pages/WineQuiz.vue";
import WineForm from "./pages/WineForm.vue";
import WineList from "./pages/WineList.vue";

//imports das views (pages) de login
// import Login from "./pages/Login/Login.vue";
// import Cadastro from "./pages/Login/Cadastro.vue";
// import EsqueceuSenha from "./pages/Login/EsqueceuSenha.vue";
// import ValidarCodigo from "./pages/Login/ValidarCodigo.vue";
// import CriarSenha from "./pages/Login/CriarSenha.vue";
// import SenhaAlterada from "./pages/Login/SenhaAlterada.vue";

// Defina as rotas
const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/loja", component: Loja },
  { path: "/loja2", component: Loja2 },
  { path: "/loja3", component: Loja3 },
  { path: "/loja4", component: Loja4 },
  { path: "/loja5", component: Loja5 },

  { path: "/wineCard", component: WineCard },
  { path: "/wineQuiz", component: WineQuiz },
  { path: "/wineForm", component: WineForm },
  { path: "/popUp", component: PopUp },
  { path: "/wineList", component: WineList },

  //rotas do login desativadas pois
  // estou testando via arquivo routes (index na pasta de rota)
  // { path: "/login", component: Login },
  // { path: "/cadastro", component: Cadastro },
  // { path: "/esqueceusenha", component: EsqueceuSenha },
  // { path: "/validarcodigo", component: ValidarCodigo },
  // { path: "/criarsenha", component: CriarSenha },
  // { path: "/senhaalterada", component: SenhaAlterada },
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
app.use(router);
app.use(vuetify);
app.use(store);
// app.use(lojaa);
// app.component("Wrapper", Wrapper);

// Monte o aplicativo Vue no elemento com o id "app"
app.mount("#app");
