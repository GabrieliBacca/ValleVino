<template>
  <main>
    <!-- //? conteudo da home -->
    <section class="container" id="mainContent">
      <div class="content-container">
        <h1 id="mainTitle">
          Sejam muito bem-vindos a Valle Vino!<br />
          <span class="texto-1">Vinhos de todo o MUNDO</span><br />
          <span class="texto-2"></span>
        </h1>
        <p class="maintext">
          Somos uma empresa de Blumenau, apaixonados por proporcionar momentos
          incríveis aos nossos clientes. Nosso objetivo é fazer com que você se
          sinta experimentando uma obra de arte engarrafada.
        </p>
        <div class="call-to-action-container">
          <button><a href="./Loja.vue ">Visite a nossa loja</a></button>
        </div>
      </div>

      <div class="video-container">
        <video autoplay muted loop id="video-bg">
          <source src="../assets/video/home.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  </main>
</template>

<!-- 
---------------------------
|                         |
|         scripts         |
|                         |
--------------------------- 
-->
<script>
export default {
  name: "Home",
};
</script>

<!-- 
---------------------------
|                         |
|           CSS           |
|                         |
--------------------------- 
-->

<style scoped>
main {
  background-color: var(--color-background);
}
</style>
