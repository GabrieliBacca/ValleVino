<template>
  <header :class="{ 'header-fixed': isFixedHeader }">
    <nav class="container">
      <a href="/"
        ><img
          id="logo"
          alt="Logo Valle Vino"
          src="../assets/img/logoValleVinoBlack.png"
      /></a>
      <!-- //? bt menu -->
      <img
        v-on:click="openMenu"
        id="bt-menu"
        src="../assets/img/ico-menu-hb.svg"
        alt="botão de menu lateral"
      />
      <!-- //? overlay menu lateral -->
      <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>

      <!-- //? menu -->
      <div id="menu-itens" :class="{ active: menuActive }">
        <!-- //? logo menu -->

        <img
          id="menu-logo"
          alt="Logo Valle Vino"
          src="../assets/img/logoValleVinoWhite.png"
        />
        <!-- //? links menu -->
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/loja">Loja</a></li>
          <li><a href="/loja3">Slider</a></li>
          <li><a href="/loja2">Loja2</a></li>
          <li><a href="/loja4">Checkout</a></li>
          <li><a href="/loja5">Vinhos</a></li>
          <li><a href="/loja6">HOMESCROLL</a></li>
          <li><a href="/wineQuiz">Quiz</a></li>
          <li><a href="/Adm">ADM</a></li>
          <li><a href="/PopUp">18+</a></li>
          <li><a href="/WineCard">WineCard</a></li>
          <li><a href="/WineList">WineList</a></li>
        </ul>
        <!-- //? icones menu -->

        <a href="/Login"
          ><img
            id="bt-usuario"
            src="../assets/img/ico-usuario.svg"
            alt="botão de login usuario"
        /></a>

        <a href="/"
          ><img
            id="bt-carrinho"
            src="../assets/img/ico-carrinho.svg"
            alt="botão de carrinho"
        /></a>

        <!-- //! colocar esse botao no rodape do menu via css -->
        <img
          v-on:click="closeMenu"
          id="bt-esconder-menu"
          alt="botao esconder menu lateral"
          src="../assets/img/ico-setas-direita.svg"
        />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuActive: false,
      isFixedHeader: false,
    };
  },
  methods: {
    openMenu: function () {
      this.menuActive = true;
    },
    closeMenu: function () {
      this.menuActive = false;
    },
    handleScroll() {
      this.isFixedHeader = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
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
header {
  background-color: var(--color-background-light);
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 10;
  width: 97.5vw;
  z-index: 10; /* Make sure it's on top of other elements */
}

nav {
  display: flex;
  justify-content: space-between;
}

#logo {
  width: 130px;
  align-content: center;
  justify-content: center;
  margin: 10px;
}

#bt-usuario {
  width: 25px;
  display: flex;
  flex-direction: row;
  margin: 30px;
}

#bt-carrinho {
  width: 25px;
  display: flex;
  flex-direction: row;
  margin: 30px;
}

#bt-menu {
  width: 30px;
  margin: 20px;
}

#bt-esconder-menu {
  width: 25px;
  margin-top: 50px;
}

#menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 65%;
  height: 100vh;
  background-color: var(--color-background-dark);
  opacity: 0.5;
}

#menu-logo {
  width: 110px;
  margin-top: 30px;
  margin-bottom: 10px;
}

#menu-itens {
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background-light);
  width: 35%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
}

#menu-itens.active {
  display: flex;
}

ul {
  list-style: none;
  text-align: center;
}

ul li {
  margin: 60px 0px;
}

ul li a {
  color: var(--color-text-dark);
}

/* deixando responsivo para web */

@media (min-width: 700px) {
  #menu-logo,
  #menu-overlay,
  #bt-esconder-menu,
  #bt-menu {
    display: none;
  }

  #menu-itens {
    display: flex;
    position: static;
    height: 60px;
    width: auto;
    flex-direction: row;
  }

  ul {
    display: flex;
    height: 60px;
    align-items: center;
  }

  ul li {
    margin: 0;
    margin-right: 20px;
  }

  #bt-carrinho {
    height: 60px;
    display: flex;
    align-items: start;
    justify-content: center;
  }
}

#background-video::after {
  content: "";
  width: inherit;
  height: inherit;
  position: fixed;
  inset: 0;
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
</style>
