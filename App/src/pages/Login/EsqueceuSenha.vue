<template>
  <div class="container">
    <img
      class="img-bg"
      src="../../assets/img/esqueceu-senha-bg.svg"
      alt="background Image"
    />
    <h1>Esqueceu a senha?</h1>
    <h3>
      Não se preocupe, acontece! <br />
      Insira o endereço de e-mail vinculado à sua conta.
    </h3>

    <form @submit.prevent="onSubmit">
      <div class="textBox">
        <input
          v-model="email"
          id="email"
          type="text"
          placeholder="Digite seu email"
        />
      </div>
      <button type="submit" id="bt">
        <RouterLink to="/ReceberCodigo">Receber Codigo</RouterLink>
      </button>
    </form>
    <p class="txtInfo">
      Lembrou-se da senha?
      <RouterLink to="/login">Logar Agora!</RouterLink>
    </p>
  </div>
</template>

<script>
export default {
  name: "EsqueceuSenha",
  methods: {
    onSubmit() {
      // Validar o formulário
      // ...

      this.$router.push("./ReceberCodigo.vue");
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
.textBox {
  width: 390px;
  height: 110px;
  margin: 0 auto;
  padding: 10px;
  background-color: var(--color-background-light);
  color: #482817;
  opacity: 0.65;
  border: #e8ecf4 solid 1px;
  border-radius: 8px;
  z-index: -12;
  align-items: center;
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
/* Estilo do botão de login */
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

  #email {
    width: 90%;
    margin: 15px;
  }
  .textBox {
    width: 80vw;
  }

  #bt-sigin {
    width: 70%;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  /* Ajustes para tablets */

  .container {
    width: 95vw;
  }

  #user,
  #email,
  #password,
  #confirmPassword,
  #address,
  #birthday,
  #gender,
  #phone {
    width: 90%;
    margin: 15px;
  }

  #bt-sigin {
    width: 80%;
  }
}

@media (min-width: 768px) {
  /* Ajustes para desktops */
  .container {
    width: 100%;
  }
}
</style>
