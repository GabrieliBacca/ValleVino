<template>
  <div>
    <form @submit.prevent="submit">
      <h1>
        Olá! <br />
        Registre-se para começar...
      </h1>
      <div class="textBox">
        <input v-model="name" id="user" type="text" placeholder="Nome de usuário" />
        <input v-model="email" id="email" type="text" placeholder="Seu email" />
        <input id="password" type="password" placeholder="Senha" />
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />
      </div>
      <button type="submit" id="bt">Cadastrar</button>
    </form>
    <div class="textWhitSocialMedia">
      <p class="txtInfo">Ou  registre-se com</p>
      <!-- //? bt social media -->
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
      <p class="txtInfo">Ja possui uma conta?<a href="/"> Logar Agora!</a></p>
    </div>

    <img class=""
        id="img-bg"
        src="../../assets/img/inscreva-se-bg.svg"
        alt="background Image"
      />
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
  background-color: #f2f2f2;
}
h1 {
  color: var(--color-text-dark);
}

#user,
#email,
#password,
#confirmPassword {
  display: flex;
  background-color: #f7f8f9;
  color: #8391a1;
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
  background-color: var(--color-background-dark);
  color: var(--color-background);
  font-size: 24px;
  font-family: baskerville;
  padding: 5px;
  width: 330px;
  height: 56px;
  border-radius: 8px;
  text-align: center;
}
#img-bg{
width: 1440px;
height: 710px;
position: absolute;
  right: 0;
  bottom: 0;
  min-width: 50%;
  min-height: 50%;
  z-index: -1;
  filter: brightness(0.3);
  object-fit: cover;
}
</style>
