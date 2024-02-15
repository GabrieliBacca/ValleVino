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
        <input v-model="email" type="text" placeholder="Digite seu email" />
        <input v-model="password" type="password" placeholder="Digite sua senha" />
        <p><a href="/esqueceusenha">Esqueceu a senha?</a></p>
      </div>
      <!-- //! colocar o icone de olho no text para revelar  a senha -->

      <button type="submit" id="bt-login">Login</button>
    </form>
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
      api.get("http://localhost:8000/api/user").then((res) => (usuarios.value = res.data));

    const login = () => {
      // Enviar uma solicitação para o endpoint api/user para verificar as credenciais
      const user = usuarios.value.find((user) => user.email === email.value && user.password === password.value);
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
/* Estilos permanecem inalterados */
</style>

<style scoped>
body {
  background-color: #f2f2f2;
}

h1 {
  color: var(--color-background-dark);
}

#email,
#password {
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

#bt-login {
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
</style>