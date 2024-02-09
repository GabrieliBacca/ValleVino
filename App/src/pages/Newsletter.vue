<template>
    <div id="app">
      <main>
        <section id="imagem">
          <img class="tamanho-da-imagem" :src="'../src/assets/img/logoValleVinoBlack.png'" alt="logo">
        </section>
      </main>
  
      <footer>
        <p>Copyright &copy; 2023 Valle Vino</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    },
  };
  </script>
  
  <style>
  .tamanho-da-imagem {
    width: 100px; /* Ajuste o valor conforme necessário */
    height: auto; /* Isso manterá a proporção original da imagem */
  }
</style>
  