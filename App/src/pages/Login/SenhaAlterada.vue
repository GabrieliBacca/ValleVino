<template>
  <div class="container">
    <img
      id="img-ico"
      src="../../assets/img/ico-sucesso.svg"
      alt="Selo sucesso"
    />
    <img
      class="img-bg"
      src="../../assets/img/senha-alterada-bg.svg"
      alt="background Image"
    />
    <h1>Maravilha!</h1>
    <br />
    <h3>Sua senha foi alterada com sucesso.</h3>
    <button type="submit" id="bt-login">Logar</button>
  </div>
</template>

<script>
export default {
  name: "SenhaAlterada",
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

#bt-login {
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

/* responsividade */

@media (max-width: 575px) {
  /* Ajustes para smartphones */
  .container {
    padding: 10px;
  }
  #bt-login {
    width: 70%;
    height: auto;
  }

  #img-ico {
    width: 50px;
    height: auto;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  /* Ajustes para tablets */

  .container {
    width: 95vw;
  }

  #bt-login {
    max-width: 330px;
    height: auto;
  }
}

@media (min-width: 768px) {
  /* Ajustes para desktops */
  .container {
    width: 100%;
  }
}
</style>
