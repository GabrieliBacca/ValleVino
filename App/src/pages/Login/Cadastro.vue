<template>
  <div class="container">
    <img
      class="img-bg"
      src="../../assets/img/inscreva-se-bg.svg"
      alt="background Image"
    />

    <form @submit.prevent="submit">
      <h1>
        Olá! <br />
        Registre-se para começar...
      </h1>
      <div class="textBox">
        <input
          v-model="name"
          id="user"
          type="text"
          placeholder="Nome de usuário"
        />
        <input v-model="email" id="email" type="text" placeholder="Seu email" />
        <input id="password" type="password" placeholder="Senha" />
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />
      </div>
      <button type="submit" id="bt-sigin">Registrar</button>
    </form>

    <div class="textWhitSocialMedia">
      <p class="txtInfo">Ou faça login com</p>

      <img
        id="loginSocialMedia"
        src="../../assets/img/bt-Facebook.svg"
        alt="botão login com Facebook"
      />
      <img
        id="loginSocialMedia"
        src="../../assets/img/bt-Google.svg"
        alt="botão login com Google"
      />
      <img
        id="loginSocialMedia"
        src="../../assets/img/bt-Apple.svg"
        alt="botão login com Apple"
      />

      <p class="txtInfo">
        Ja possui uma conta?<RouterLink to="/login"> Logar Agora!</RouterLink>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cadastro",
  components: {},
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
  width: 388px;
  height: 265px;
  margin: 0 auto;
  padding: 10px;

  /* Cálculo da altura usando a Sequência Fibonacci */
  height: calc(89px + 55px + 89px);

  background-color: var(--color-background-light);
  color: #482817;
  opacity: 0.65;
  border: #e8ecf4 solid 1px;
  border-radius: 8px;
  z-index: -12;
  align-items: center;
}

/* Estilo do texto informativo */
.txtInfo {
  color: #482817;
  font-size: 24px;
  text-decoration: none;
  margin: 10px 0px 10px 0px;
}


#user,
#email,
#password,
#confirmPassword {
  display: flex;
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
}/* Estilo do botão de registro */
#bt-sigin {
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
</style>
