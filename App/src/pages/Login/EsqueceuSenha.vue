<template>
  <div>
    <h1>Esqueceu a senha?</h1>
    <h3>
      Não se preocupe! <br />
      Acontece. Insira o endereço de e-mail vinculado à sua conta.
    </h3>

    <div class="textBox">
      <input id="email" type="text" placeholder="Seu email" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EsqueceuSenha",
};
</script>

<style scoped>
h1 {
  color: var(--color-text-dark);
}
</style>
