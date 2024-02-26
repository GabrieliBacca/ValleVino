<template>
  <div class="container">
    <img
      class="img-bg"
      src="../../assets/img/validar-codigo-bg.svg"
      alt="background Image"
    />

    <h1>Receber código de validação</h1>
    <div class="textBox">
      <input
        v-model="email"
        type="email"
        id="email"
        placeholder="Digite seu e-mail"
      />
      <h1>Receber senha?</h1>

      <input
        v-model="email"
        type="email"
        id="email"
        placeholder="Digite seu e-mail"
      />
      <button @click="sendEmail">Enviar código</button>

      <div v-if="showVerificationCode">
        <input
          v-model="verificationCode"
          type="text"
          id="email"
          placeholder="Digite o código de verificação"
        />
        <button @click="validateCode" id="bt">Validar código</button>
      </div>
      <button id="bt" @click="sendEmail">
        <router-link to="ValidarCodigo">Enviar código</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import store from "../../store";
import { mapState, mapActions } from "vuex";
const codigoAleatorio = store.state.codigoAleatorio;

export default {
  name: "ReceberCodigo",
  computed: {
    ...mapState(["codigoAleatorio"]),
  },
  methods: {
    ...mapActions(["salvarCodigoAleatorio"]),
    sendEmail() {
      // Lógica para enviar o e-mail com o código de verificação
      this.showVerificationCode = true;
    },
    validateCode() {
      if (this.verificationCode === this.codigoAleatorio) {
        // Código válido, redirecionar para a rota do usuário com o ID em questão
        this.$router.push(`/usuario/${this.userId}`);
        // Exibir alerta de sucesso
      } else {
        // Código inválido, exibir alerta de erro
      }
    },
  },
};
</script>

<style scoped>
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
.img-bg {
  width: 100vw;
  height: auto;
  position: absolute;
  object-fit: cover;
  opacity: 0.5;
  right: 0;
  bottom: 0;
  filter: brightness(0.3);
  z-index: -1;
}

#email {
  background-color: #f7f8f9;
  color: #482817;
  font-size: 15px;
  border: #e8ecf4 solid 1px;
  margin: 15px;
  padding: 5px;
  width: 330px;
  height: 56px;
  border-radius: 8px;
  text-align: left;
  font-family: montserrat;
}

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

/* responsividade */
@media (max-width: 575px) {
  /* Ajustes para smartphones */
  .container {
    padding: 10px;
  }

  #email {
    width: 50%;
    margin: 15px;
  }

  #bt {
    width: 50%;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  /* Ajustes para tablets */
  .container {
    width: 95vw;
  }

  #email {
    width: 50%;
    margin: 15px;
  }

  #bt {
    width: 50%;
  }
}

@media (min-width: 768px) {
  /* Ajustes para desktops */
  .container {
    width: 100%;
  }
}
</style>
