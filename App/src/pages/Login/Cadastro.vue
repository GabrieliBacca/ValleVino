<template>
  <div>
    <form>
      <h1>
        Olá! <br />
        Registre-se para começar...
      </h1>
      <div class="textBox">
        <input id="user" type="text" placeholder="Nome de usuário" />,
        <input id="email" type="text" placeholder="Seu email" />,
        <input id="password" type="password" placeholder="Senha" />,
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />,
      </div>
      <button type="submit" id="bt">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Cadastro",
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

#user,
#email,
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
