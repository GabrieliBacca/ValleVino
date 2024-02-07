<template>
  <div id="app">
    <Header />
    <!-- <WineCard /> -->
    <router-view></router-view>
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
import WineQuiz from "./pages/WineQuiz.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Loja,
    WineQuiz,
    WineCard,
  },
};
</script>

<style scoped></style>
