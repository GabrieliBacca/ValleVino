<template>
  <div>
    <div v-for="(usuario, i) in usuarios" :key="i">
      <p>{{ usuario.nome }}</p>
    </div>
    <form @submit.prevent="login">
      <h1>
        Bem-vindo de volta!<br />
        Legal te ver por aqui!
      </h1>

      <div class="textBox">
        <input v-model="email" id="email" type="text" placeholder="Digite seu email" />
        <input
          v-model="password" id="password"
          type="password"
          placeholder="Digite sua senha"
        />
        <p class="txtInfo"><a href="/esqueceusenha">Esqueceu a senha?</a></p>
      </div>
      <!-- //! colocar o icone de olho no text para revelar  a senha -->

      <button type="submit" id="bt-login">Login</button>
    </form>
    <div class="textWhitSocialMedia">
      <p class="txtInfo">Ou faça login com</p>
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
      <p class="txtInfo">Não tem uma conta?<a href="/"> Registre-se!</a></p>
    </div>

    <img class=""
        id="img-bg"
        src="../../assets/img/login-bg.svg"
        alt="background Image"
      />
  </div>
</template>

<script>
import api from "@/services/api";
import { onMounted } from "vue";
import { ref } from "vue";

export default {
  name: "Login",
  setup() {
    const usuarios = ref([]);
    const email = ref("");
    const password = ref("");

    const fetchUsuarios = () =>
      api
        .get("http://localhost:8000/api/user")
        .then((res) => (usuarios.value = res.data));

    const login = () => {
      // Enviar uma solicitação para o endpoint api/user para verificar as credenciais
      const user = usuarios.value.find(
        (user) => user.email === email.value && user.password === password.value
      );
      console.log("usuarios.value:", usuarios.value);
      console.log("email.value:", email.value);
      console.log("password.value:", password.value);
      if (user) {
        // Credenciais corretas, lógica de login bem-sucedida
        alert("Login bem-sucedido!");
        console.log("Login bem-sucedido:", user);
      } else {
        // Credenciais incorretas, lidar com erro de autenticação
        alert("Credenciais inválidas. Por favor, tente novamente.");
        console.error("Credenciais incorretas. Login falhou.");
      }
    };

    onMounted(fetchUsuarios);

    return { usuarios, email, password, login };
  },
};
</script>

<style scoped>
body {
  background-color: var(--color-background-light);
}

h1 {
  color: var(--color-background-dark);
}

.textBox{
  width: 388px;
  height: 265px;
  background-color:var(--color-background-light);
  opacity: 0.5;
  border: #e8ecf4 solid 1px;
  border-radius: 8px;
  z-index: -1;

 
}

#email,
#password {
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

#bt-login {
  background-color: var(--color-background-light);
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
