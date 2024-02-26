<template>
  <div class="container">
    <h1>Receber senha?</h1>

    <input v-model="email" type="email" id="email" placeholder="Digite seu e-mail" />
    <button @click="sendEmail">Enviar código</button>

    <div v-if="showVerificationCode">
      <input v-model="verificationCode" type="text" id="email" placeholder="Digite o código de verificação" />
      <button @click="validateCode" id="bt">Validar código</button>
    </div>
  </div>
</template>

<script>
import store from '../../store';
import { mapState, mapActions } from 'vuex';
const codigoAleatorio = store.state.codigoAleatorio;

export default {
  name: "ReceberCodigo",
  computed: {
    ...mapState(['codigoAleatorio']),
  },
  methods: {
    ...mapActions(['salvarCodigoAleatorio']),
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
</style>
