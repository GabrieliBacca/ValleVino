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
    <Button />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Cadastro",
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
