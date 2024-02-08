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
body {
  background-color: #f2f2f2;
}
h1 {
  color: var(--color-text-dark);
}
#validaCodigo1,
#validaCodigo2,
#validaCodigo3,
#validaCodigo4 {
  display: flex;
  flex-direction: row;
  background-color: #f7f8f9;
  color: var(--color-icon-light);
  font-size: 15px;
  border: #e8ecf4 solid 1px;
  margin: 15px;
  padding: 5px;
  width: 70px;
  height: 60px;
  border-radius: 8px;
  text-align: left;
  font-family: montserrat;
}
</style>
