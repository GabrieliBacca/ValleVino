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
</style>
