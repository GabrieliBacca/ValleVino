<template>
  <div>
    <form>
      <h1>Esqueceu a senha?</h1>
      <h3>
        Não se preocupe! <br />
        Acontece. Insira o endereço de e-mail vinculado à sua conta.
      </h3>

      <div class="textBox">
        <input id="email" type="text" placeholder="Seu email" />
      </div>
      <button type="submit" id="bt">Receber Codigo</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EsqueceuSenha",
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

#email {
  display: flex;
  background-color: #f7f8f9;
  color: #8391a1;
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
</style>
