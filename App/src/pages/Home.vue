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
          <button><a href="./loja " noeffect>Visite a nossa loja</a></button>
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

#mainContent {
  z-index: 1;
  position: relative;
  color: white;
}

.content-container {
  z-index: 2;
  position: relative;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.maintext {
  font-size: 1.5rem;
  max-width: 400px;
}

a {
  text-decoration: none;
  color: inherit;
}

a:visited {
  color: white;
}
</style>