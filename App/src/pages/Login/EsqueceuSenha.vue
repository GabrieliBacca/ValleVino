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
    <Button />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "EsqueceuSenha",
  components: {
    Button,
  },
};
</script>

<style scoped>
h1 {
  color: var(--color-text-dark);
}
</style>
