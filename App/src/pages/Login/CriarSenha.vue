<template>
  <div>
    <form>
      <h1>Criar nova senha</h1>
      <h3>Sua nova senha deve ser diferente daquelas usadas anteriormente.</h3>

      <div class="textBox">
        <input id="password" type="password" placeholder="Nova senha" />
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirmar senha"
        />
        <button type="submit" id="bt">Salvar</button>
      </div>
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
  background-color: #f2f2f2;
}
h1 {
  color: var(--color-text-dark);
}

#password,
#confirmPassword {
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

#bt {
  background-color: var(--color-background-dark);
  color: var(--color-background);
  font-size: 24px;
  font-family: baskerville;
  padding: 5px;
  width: 330px;
  height: 56px;
  border-radius: 8px;
  text-align: center;
}
</style>
