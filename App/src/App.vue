<template>
  <div id="app">
    <Home />
    <Home />
  </div>
</template>

<script>
import "./styles/global.css"; //aplicando as configurações do css global

import Header from "./components/Header.vue";
import Home from "./pages/Home";

export default {
  name: "App",
  components: {
    Header,
    Home,
  },
};
</script>

<style scoped></style>
