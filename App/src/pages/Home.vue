<template>
  <main>
    <!-- Conteúdo da home -->
    <section class="container" id="mainContent">
      <div class="content-container">
        <h1 id="mainTitle">
          Bem-vindos a Valle Vino!<br />
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

      <!--  //! /////////////////////////////// -->
      <!--  //! /////////////////////////////// -->

      <div><h1>olá</h1></div>

      <!--  //! /////////////////////////////// -->
      <!--  //! /////////////////////////////// -->

      <div class="video-container">
        <video autoplay muted loop id="video-bg">
          <source src="../assets/video/home.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
* {
  font-family: montserrat;
}

.container {
  max-width: var(--max-width);
  margin: auto;
  padding: 1rem;
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  color: white;
}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-container h1 {
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.5rem;
  margin-bottom: 1rem;
}

#video-bg {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  filter: brightness(0.3);
  object-fit: cover;
}

.call-to-action-container button:hover {
  background-color: #fff;
  color: #000;
}

.call-to-action-container button {
  padding: 10px 150px;
  background: transparent;
  border-radius: 50px;
  color: #fff;
  text-transform: uppercase;
  border: 4px solid #fff;
  transition: all 0.5s;
}

.call-to-action-container {
  text-align: center;
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 768px) {
  .call-to-action-container button {
    padding: 10px 10vw;
  }

  .container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem;
  }

  .content-container h1 {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  .content-container p {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }

  .call-to-action-container {
    bottom: 40px;
  }
}

@media (max-width: 480px) {
  .content-container h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .content-container p {
    font-size: 0.7rem;
    line-height: 1rem;
  }

  .call-to-action-container {
    bottom: 20px;
  }
}
</style>
