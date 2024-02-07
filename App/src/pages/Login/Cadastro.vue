<template>
  <div>
    <h1>
      Olá! <br />
      Registre-se para começar...
    </h1>

    <div class="textBox">
      <input id="user" type="text" placeholder="Nome de usuário" />
      <input id="email" type="text" placeholder="Seu email" />
      <input id="password" type="password" placeholder="Senha" />
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirme sua senha"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Cadastro",
};
</script>

<style scoped>
h1 {
  color: var(--color-text-dark);
}
</style>
