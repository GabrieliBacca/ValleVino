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
    </div>
    <button id="bt" @click="sendEmail">
      <router-link to="ValidarCodigo">Enviar código</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "ReceberCodigo",
  setup() {
    // const email = ref("");
    // const verificationCode = ref("");
    // const showVerificationCode = ref(false);

    // const sendEmail = async () => {
    //   // Utilize o serviço de API para enviar um e-mail com o código de verificação para o endereço digitado.
    //   // O código de verificação deve ser um número aleatório de 4 dígitos.

    //   // Exiba um alerta de sucesso ou erro ao enviar o e-mail.

    //   showVerificationCode.value = true;
    // };

    // const validateCode = async () => {
    //   // Verifique se o código de verificação digitado é igual ao código enviado por e-mail.
    //   // Se o código for válido, redirecione o usuário para outro componente.
    //   // Utilize o roteador do Vue.js para realizar o redirecionamento.
    //   // Exiba um alerta de sucesso ou erro ao validar o código.
    // };

    return {
      //   email,
      //   verificationCode,
      //   showVerificationCode,
      //   sendEmail,
      //   validateCode,
    };
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
