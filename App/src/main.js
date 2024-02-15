import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; // Tema do PrimeVue
import "primevue/resources/primevue.min.css"; // Estilos do PrimeVue
import "primeicons/primeicons.css"; // Ícones do PrimeVue
import "./styles/tailwind.css"; // Arquivo CSS gerado pelo Tailwind
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";

import { initI18n } from './i18n.js';

import store from "./store/index.js";


import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import Home2 from "./views/Home.vue";

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
import Loja from "./pages/Loja5.vue";
import Loja2 from "./pages/Loja2.vue";
import Loja3 from "./pages/Loja3.vue";
import Loja4 from "./pages/Loja4.vue";
import Loja5 from "./pages/Loja.vue";
import Loja6 from "./pages/Loja6.vue";
import AboutUs from "./pages/AboutUs.vue";


//import das views (pages)
import Adm from '../src/pages/Adm.vue';
import AdmEdit from '../src/pages/AdmEdit.vue';
import WineForm from "./pages/WineForm.vue";
import WineQuiz from "./pages/WineQuiz.vue";
import WineList from "./pages/WineList.vue";

//imports das views (pages) de login
import Login from "./pages/Login/Login.vue";
import Cadastro from "./pages/Login/Cadastro.vue";
import EsqueceuSenha from "./pages/Login/EsqueceuSenha.vue";
import ValidarCodigo from "./pages/Login/ValidarCodigo.vue";
import CriarSenha from "./pages/Login/CriarSenha.vue";
import SenhaAlterada from "./pages/Login/SenhaAlterada.vue";


// Defina as rotas
const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/loja", component: Loja },
  { path: "/loja2", component: Loja2 },
  { path: "/loja3", component: Loja3 },
  { path: "/loja4", component: Loja4 },
  { path: "/loja5", component: Loja5 },
  { path: "/loja6", component: Loja6 },
  { path: "/aboutus", component: AboutUs },

  { path: "/wineCard", component: WineCard },
  { path: "/wineQuiz", component: WineQuiz },
  { path: "/popUp", component: PopUp },
  { path: "/wineList", component: WineList },

  //rotas do Adm 

  { path: '/adm', component: Adm },
  { path: "/wineForm", component: WineForm },
  { path: '/admEdit/:id/', component: AdmEdit },


  //rotas do login
  { path: "/login", component: Login },
  { path: "/cadastro", component: Cadastro },
  { path: "/esqueceusenha", component: EsqueceuSenha },
  { path: "/validarcodigo", component: ValidarCodigo },
  { path: "/criarsenha", component: CriarSenha },
  { path: "/senhaalterada", component: SenhaAlterada },
];

// Crie o roteador
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const initApp = async () => {
  const i18n = await initI18n();


  // Crie o aplicativo Vue e configure os plugins e o roteador
  const app = createApp(App);
  app.use(PrimeVue, { unstyled: true }); // Use o plugin PrimeVue
  app.component("Header", Header); // Registre o componente Header globalmente
  app.component("DataView", DataView);
  app.component("DataViewLayoutOptions", DataViewLayoutOptions);
  app.use(router);
  app.use(vuetify);
  app.use(store);
  app.use(i18n);
  // app.use(lojaa);
  // app.component("Wrapper", Wrapper);
  // Monte o aplicativo Vue no elemento com o id "app"
  app.mount("#app");
  // Unmount any previous app instance before mounting the new app
  // app.unmount('#app');
}

initApp();

