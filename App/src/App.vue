<template>
  <div id="app">
    <Header />
    <!-- <Home /> -->
    <!-- <Loja /> -->
    <!-- <WineCard /> -->
    <Login />
  </div>
</template>

<script>
import "./styles/global.css"; //aplicando as configurações do css global

//componentes
import Header from "./components/Header.vue";
import WineCard from "./components/WineCard.vue";

// pages
import Home from "./pages/Home.vue";
import Loja from "./pages/Loja.vue";
import Quiz from "./pages/WineQuiz.vue";
import Login from "./pages/Login/Login.vue";
import Cadastro from "./pages/Login/Cadastro.vue";
import EsqueceuSenha from "./pages/Login/EsqueceuSenha.vue";
import ValidarCodigo from "./pages/Login/ValidarCodigo.vue";
import CriarSenha from "./pages/Login/CriarSenha.vue";
import SenhaAlterada from "./pages/Login/SenhaAlterada.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Loja,
    Quiz,
    WineCard,
    Login,
    Cadastro,
    EsqueceuSenha,
    ValidarCodigo,
    CriarSenha,
    SenhaAlterada,
  },
};
</script>

<style scoped></style>
