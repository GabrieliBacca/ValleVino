<template>
  <div>
    <div v-for="(usuario, i) in usuarios" :key="i">
      <p>{{ usuario.name }}</p>
    </div>
    <form>
      <h1>
        Bem-vindo de volta!<br />
        Legal te ver por aqui!
      </h1>

      <div class="textBox">
        <input id="email" type="text" placeholder="Digite seu email" />
        <input id="password" type="password" placeholder="Digite sua senha" />
        <p><a href="#">Esqueceu a senha?</a></p>
      </div>
      <!-- //! colocar o icone de olho no text para revelar  a senha -->

      <button type="submit" id="bt-login">Login</button>
    </form>
  </div>
</template>

<script>
//importações
import api from "@/services/api";
import { onMounted } from "vue";
import { ref } from "vue"
//exportações
export default {
  name: "Login",
  setup() {
    const usuarios = ref([]);

    const fetchUsuarios = () =>
      api.get("http://localhost:8000/api/user").then((res) => (usuarios.value = res.data.results));

    onMounted(fetchUsuarios);

    return { usuarios };
  },
};
</script>

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