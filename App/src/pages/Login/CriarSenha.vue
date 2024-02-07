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
    <Button />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "CriarSenha",
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
