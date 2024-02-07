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
import Login from "./pages/Login.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Loja,
    Quiz,
    Login,
    WineCard,
  },
};
</script>

<style scoped></style>
