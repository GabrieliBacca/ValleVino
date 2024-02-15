<template>
  <div id="app">
    <div id="tela-inicial" v-if="!telaInicialEscondida">
      <div class="logo-container">
        <img class="logo" src="../src/assets/img/logoValleVinoWhite.png" alt="">
      </div>
    </div>
    <PopUp v-if="showPopup" @confirm="proceed" @reject="reloadPage" />
    <div id="content" v-else>
      <Header />
      <router-view></router-view>
      <Footer />
    </div>
    <phone-mask></phone-mask>
  </div>
</template>

<script>
import "./styles/global.css"; //aplicando as configurações do css global

//componentes
import Header from "./components/Header.vue";
import WineCard from "./components/WineCard.vue";
import PopUp from "./components/PopUp.vue";
import Footer from "./components/AppFooter.vue";

// pages
import Home from "./pages/Home.vue";
import Loja from "./pages/Loja.vue";
import WineQuiz from "./pages/WineQuiz.vue";
import WineForm from "./pages/WineForm.vue";

//imports das views (pages) de login
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
    WineQuiz,
    WineCard,
    WineForm,
    PopUp,
    Login,
    Cadastro,
    EsqueceuSenha,
    ValidarCodigo,
    CriarSenha,
    SenhaAlterada,
    Footer,
  },
  data() {
    return {
      showPopup: !localStorage.getItem("popupShown"), // Exibir o popup apenas se não estiver armazenado no localStorage
      telaInicialEscondida: false,
      animationExecuted: false, //adicionei da animacao para rodar uma vez apenas
    };
  },
  methods: {
    proceed() {
      // Lógica para prosseguir se o usuário tiver mais de 18 anos
      // Por exemplo, redirecionar para a página principal
      this.showPopup = false;
      localStorage.setItem("popupShown", true); // Armazenar no localStorage que o popup já foi exibido
    },
    mounted() {
      if (!this.animationExecuted) { // Verifica se a animação ainda não foi executada
        setTimeout(() => {
          this.telaInicialEscondida = true;
          this.animationExecuted = true; // Marca a animação como executada
        }, 4000);
      }
    },
    reloadPage() {
      // Recarrega a página se o usuário não tiver mais de 18 anos
      window.location.reload();
    },
  },
  beforeRouteEnter(to, from, next) {
    // Verifica se a animação já foi executada antes de entrar na rota
    if (!this.animationExecuted) {
      setTimeout(() => {
        this.telaInicialEscondida = true;
        this.animationExecuted = true; // Marca a animação como executada
      }, 4000);
    }
    next();
  },
  created() {
    const animationExecuted = localStorage.getItem("animationExecuted");
    if (!animationExecuted) { // Verifica se a animação ainda não foi executada
      setTimeout(() => {
        this.telaInicialEscondida = true;
        localStorage.setItem("animationExecuted", true); // Marca a animação como executada no localStorage
      }, 4000);
    }

  },

};

</script>

<style scoped>
#tela-inicial {
  background-color: rgb(0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: slide-up 2s ease-out forwards;
}

.logo {
  max-width: 20%;
  align-items: center;
}

@keyframes slide-up {
  10% {
    transform: translateY(0);

  }

  50% {
    opacity: 1;

  }

  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>