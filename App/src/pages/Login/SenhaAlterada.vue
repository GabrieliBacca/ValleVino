<template>
  <div>
    <img id="seloSucesso" src="../../assets/img/ico-sucesso.svg" />

    <h1>Maravilha!</h1>
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
h1 {
  color: var(--color-text-dark);
}
</style>
