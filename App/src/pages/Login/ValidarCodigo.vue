<template>
  <div>
    <h1>Verificação de código</h1>
    <h3>
      Digite o código de verificação que acabamos de enviar em seu endereço de
      e-mail.
    </h3>

    <div class="textBox">
      <input id="validaCodigo1" type="text" placeholder="9" />
      <input id="validaCodigo2" type="text" placeholder="9" />
      <input id="validaCodigo3" type="text" placeholder="9" />
      <input id="validaCodigo4" type="text" placeholder="9" />
    </div>
    <Button />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "ValidarCodigo",
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
