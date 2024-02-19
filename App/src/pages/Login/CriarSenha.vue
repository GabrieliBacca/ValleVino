<template>
  <div class="container">
    <img
      class="img-bg"
      src="../../assets/img/nova-senha-bg.svg"
      alt="background Image"
    />

    <h1>Criar nova senha</h1>
    <br />
    <h3>Sua nova senha deve ser diferente daquelas usadas anteriormente.</h3>

    <form @submit.prevent="login">
      <div class="textBox">
        <input
          v-model="password"
          id="password"
          type="password"
          placeholder="Digite sua senha"
        /><input
          v-model="password"
          id="confirmPassword"
          type="password"
          placeholder="Confirmar senha"
        />
      </div>

      <button type="submit" id="bt">Salvar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CriarSenha",
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
  width: 388px;
  height: 265px;
  margin: 0 auto;
  padding: 10px;

  /* Cálculo da altura usando a Sequência Fibonacci */
  height: calc(89px + 55px + 89px);

  background-color: var(--color-background-light);
  color: #482817;
  opacity: 0.65;
  border: #e8ecf4 solid 1px;
  border-radius: 8px;
  z-index: -12;
  align-items: center;
}

/* Estilo dos campos de email e senha */
#password,
#confirmPassword {
  background-color: #f7f8f9;
  color: #482817;
  font-size: 15px;
  border: #e8ecf4 solid 1px;
  margin: 15px;
  padding: 5px;
  width: 330px;
  height: 56px;
  border-radius: 8px;
  text-align: left;
  font-family: montserrat;
}

/* Estilo do botão de login */
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
