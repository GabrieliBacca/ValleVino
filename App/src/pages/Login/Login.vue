<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
h1 {
  color: var(--color-text-dark);
}
</style>
