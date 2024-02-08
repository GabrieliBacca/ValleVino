<template>
  <div id="msg">
    <img id="seloSucesso" src="../../assets/img/ico-sucesso.svg" />

    <h1>Maravilha!</h1>
    <br />
    <h3>Sua senha foi alterada com sucesso.</h3>
  </div>

  <Button />
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "SenhaAlterada",
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
#msg {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 45px;
  gap: 15px;
}
</style>
