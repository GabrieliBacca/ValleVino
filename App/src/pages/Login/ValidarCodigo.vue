<template>
  <div class="container">
    <img
      class="img-bg"
      src="../../assets/img/validar-codigo-bg.svg"
      alt="background Image"
    />
    <h1>Verificação de código</h1>
    <h3>
      Digite o código de verificação que acabamos de enviar em seu endereço de
      e-mail.
    </h3>
    <form @submit.prevent="login">
      <div class="textBox">
        <input v-model="cod1" id="validaCodigo1" type="text" placeholder="*" />
        <input v-model="cod2" id="validaCodigo2" type="text" placeholder="*" />
        <input v-model="cod3" id="validaCodigo3" type="text" placeholder="*" />
        <input v-model="cod4" id="validaCodigo4" type="text" placeholder="*" />
      </div>
      <button type="submit" id="bt">Validar Código</button>
    </form>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import ValidarCodigo from "@/pages/Login/ValidarCodigo.vue";

export default {
  name: "ValidarCodigo",
  created() {
    //   const codigoSalvo = this.$store.state.codigoAleatorio;
    //   this.numeroCriado = this.$route.params.numeroCriado;
    //   console.log('Código aleatório do Vuex2:', this.numeroCriado);
    // },
    const codigoGerado = localStorage.getItem("codigoGerado");
    console.log("Codigo aleatório recuperado da localStorage:", codigoGerado);
  },
  computed: {
    ...mapState({
      codigoAleatorio: (state) => state.codigoAleatorio,
    }),
    ...mapGetters(["getCodigoAleatorio"]),
    randomCode() {
      return this.getCodigoAleatorio;
    },
  },
  data() {
    return {
      cod1: "",
      cod2: "",
      cod3: "",
      cod4: "",
    };
  },
  components: {},
  methods: {
    login() {
      const codigoInserido = this.cod1 + this.cod2 + this.cod3 + this.cod4;
      const codigoSalvo = localStorage.getItem("codigoGerado");
      console.log("Código inserido:", codigoInserido);
      console.log("Código salvo:", codigoSalvo);

      if (codigoInserido === codigoSalvo) {
        // Código correto, redirecionar para a rota userprofile/:id
        const userId = this.$route.query.id; // Substitua isso pela lógica real para obter o ID do usuário
        this.$router.push(`/userProfileSenha/${userId}`);
      } else {
        // Código incorreto, mostrar mensagem de erro ou tomar outra ação
        alert("Código incorreto. Por favor, tente novamente.");
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: var(--color-background-light);
}

h1 {
  color: #482817;
  padding-bottom: 20px;
}

/* Estilo geral do container */
.container {
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 0px 0px 20px 0px;
  padding: 50px;
  background: rgba(250, 247, 242, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #f5ebda;
  opacity: 0.9;
}

/* Estilo da caixa de texto */
.textBox {
  width: 380px;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  background-color: var(--color-background-light);
  color: #482817;
  opacity: 0.65;
  border: #e8ecf4 solid 1px;
  border-radius: 8px;
  z-index: -12;
  display: flex;
  justify-content: center;
}

#validaCodigo1,
#validaCodigo2,
#validaCodigo3,
#validaCodigo4 {
  display: flex;
  background-color: #f7f8f9;
  color: #482817;
  font-size: 15px;
  border: #e8ecf4 solid 1px;
  margin: 10px;
  padding: 5px;
  width: 70px;
  height: 60px;
  border-radius: 8px;
  text-align: center;
  font-family: montserrat;
}

/* Estilo do botão */
#bt {
  background-color: var(--color-background-light);
  color: var(--color-background);
  font-size: 24px;
  font-family: baskerville;
  padding: 5px;
  width: 330px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  margin-top: 45px;
}

.img-bg {
  width: 100vw;
  height: 100%;
  position: absolute;
  object-fit: cover;
  opacity: 0.5;
  right: 0;
  bottom: 0;
  filter: brightness(0.3);
  z-index: -1;
}

/* responsividade */

@media (max-width: 575px) {
  /* Ajustes para smartphones */
  .container {
    padding: 10px;
  }

  #validaCodigo1,
  #validaCodigo2,
  #validaCodigo3,
  #validaCodigo4 {
    width: 90%;
  }

  .textBox {
    width: 80vw;
  }

  #bt {
    width: 70%;
    height: auto;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  /* Ajustes para tablets */

  .container {
    width: 95vw;
  }

  /* #validaCodigo1,
  #validaCodigo2,
  #validaCodigo3,
  #validaCodigo4 {
    margin: 15px;
  } */
  .textBox {
    max-width: 380px;
    height: auto;
  }
  #bt {
    max-width: 330px;
    height: auto;
  }
}

@media (min-width: 768px) {
  /* Ajustes para desktops */
  .container {
    width: 100%;
  }
}
</style>
