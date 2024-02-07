<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import "./styles/global.css"; //aplicando as configurações do css global

import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";
import Loja from "./pages/Loja.vue"
import Quiz from "./pages/WineQuiz.vue"


export default {
  name: "App",
  components: {
    Header,
    Home,
    Loja,
    Quiz,
  },
};
</script>

<style scoped></style>
