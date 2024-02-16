<template>
  <div>
    <form>
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
      <button type="submit" id="bt">Validar Código</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "ValidarCodigo",
  components: {},
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
/* Estilo do botão */
#bt {
  background-color: var(--color-background-light);
  color: var(--color-background);
  font-size: 24px;
  font-family: baskerville;
  padding: 5px;
  width: 330px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  margin-top: 45px;
}

.img-bg {
  width: 100vw;
  height: 100%;
  position: absolute;
  object-fit: cover;
  opacity: 0.5;
  right: 0;
  bottom: 0;
  filter: brightness(0.3);
  z-index: -1;
}
</style>
