<template>
  <div class="container">
    <img
      class="img-bg"
      src="../../assets/img/validar-codigo-bg.svg"
      alt="background Image"
    />
    <h1>Verificação de código</h1>
    <h3>
      Digite o código de verificação que acabamos de enviar em seu endereço de
      e-mail.
    </h3>
    <form @submit.prevent="login">
      <div class="textBox">
        <input v-model="cod1" id="validaCodigo1" type="text" placeholder="9" />
        <input v-model="cod2" id="validaCodigo2" type="text" placeholder="9" />
        <input v-model="cod3" id="validaCodigo3" type="text" placeholder="9" />
        <input v-model="cod4" id="validaCodigo4" type="text" placeholder="9" />
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
  background-color: var(--color-background-light);
}

h1 {
  color: #482817;
  padding-bottom: 20px;
}

/* Estilo geral do container */
.container {
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 0px 0px 20px 0px;
  padding: 50px;
  background: rgba(250, 247, 242, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #f5ebda;
  opacity: 0.9;
}

/* Estilo da caixa de texto */
.textBox {
  width: 430px;
  height: 110px;
  margin: 0 auto;
  padding: 10px;

  /* Cálculo da altura usando a Sequência Fibonacci */
  /* height: calc(89px + 55px + 89px); */

  background-color: var(--color-background-light);
  color: #482817;
  opacity: 0.65;
  border: #e8ecf4 solid 1px;
  border-radius: 8px;
  z-index: -12;
  display: flex;
  justify-content: space-between;
}
#validaCodigo1,
#validaCodigo2,
#validaCodigo3,
#validaCodigo4 {
  display: flex;
  background-color: #f7f8f9;
  color: #482817;
  font-size: 15px;
  border: #e8ecf4 solid 1px;
  margin: 15px;
  padding: 5px;
  width: 70px;
  height: 60px;
  border-radius: 8px;
  text-align: center;
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
