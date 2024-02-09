<template>
  <div id="app">
    <PopUp v-if="showPopup" @confirm="proceed" @reject="reloadPage" />
    <div v-else>
      <Header />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./styles/global.css"; //aplicando as configurações do css global

//componentes
import Button from "./components/Button.vue";
import Header from "./components/Header.vue";
import WineCard from "./components/WineCard.vue";
import PopUp from "./components/PopUp.vue";

// pages
import Home from "./pages/Home.vue";
import Loja from "./pages/Loja.vue";
import WineQuiz from "./pages/WineQuiz.vue";
import WineForm from "./pages/WineForm.vue";

export default {
  name: "App",
  components: {
    Button,
    Header,
    Home,
    Loja,
    WineQuiz,
    WineCard,
    WineForm,
    PopUp,
  },
  data() {
    return {
      showPopup: !localStorage.getItem("popupShown"), // Exibir o popup apenas se não estiver armazenado no localStorage
    };
  },
  methods: {
    proceed() {
      // Lógica para prosseguir se o usuário tiver mais de 18 anos
      // Por exemplo, redirecionar para a página principal
      this.showPopup = false;
      localStorage.setItem("popupShown", true); // Armazenar no localStorage que o popup já foi exibido
    },
    reloadPage() {
      // Recarrega a página se o usuário não tiver mais de 18 anos
      window.location.reload();
    },
  },
};
</script>

<style scoped></style>
