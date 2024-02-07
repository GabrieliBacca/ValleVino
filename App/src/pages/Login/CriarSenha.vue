<template>
  <div>
    <h1>Criar nova senha</h1>
    <h3>Sua nova senha deve ser diferente daquelas usadas anteriormente.</h3>

    <div class="textBox">
      <input id="password" type="password" placeholder="Nova senha" />
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirmar senha"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CriarSenha",
};
</script>

<style scoped>
h1 {
  color: var(--color-text-dark);
}
</style>
