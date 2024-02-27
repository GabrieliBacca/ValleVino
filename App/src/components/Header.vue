<template>
  <header :class="{ 'header-fixed': isFixedHeader }">
    <nav class="container">
      <a href="/"><img id="logo" class="logo" alt="Logo Valle Vino" src="../assets/img/logoValleVinoBlack.png" /></a>
      <img v-on:click="openMenu" id="bt-menu" class="menu-icon" src="../assets/img/ico-menu-hb.svg"
        alt="botão de menu lateral" />
      <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive" class="menu-overlay"></div>
      <div id="menu-itens" :class="{ active: menuActive }" class="menu-items">
        <img id="menu-logo" class="logo" alt="Logo Valle Vino" src="../assets/img/logoValleVinoWhite.png" />
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/loja">Loja</a></li>
          <li><a href="/Adm">ADM</a></li>
          <li><a href="/WineCard">WineCard</a></li>
        </ul>
        <a href="/Login"><img id="bt-usuario" class="menu-icon" src="../assets/img/ico-usuario.svg"
            alt="botão de login usuario" /></a>
        <a href="/"><img id="bt-carrinho" class="menu-icon" src="../assets/img/ico-carrinho.svg"
            alt="botão de carrinho" /></a>
        <img v-on:click="closeMenu" id="bt-esconder-menu" class="menu-icon" alt="botao esconder menu lateral"
          src="../assets/img/ico-setas-direita.svg" />
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

<style scoped>
header {
  background-color: var(--color-background-light);
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-fixed {
  position: fixed;
  top: 0;
  left: 10;
  width: 97.5vw;
  z-index: 10;
}

.container {
  display: flex;
  align-items: center;
}

.logo {
  width: 20%;
  max-width: 130px;
  margin: 10px;
}

.menu-icon {
  width: 25px;
  margin: 30px;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 65%;
  height: 100vh;
  background-color: var(--color-background-dark);
  opacity: 0.5;
}

.menu-items {
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background-light);
  width: 80%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
}

.menu-items.active {
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

/* Responsive */
@media (min-width: 700px) {
  header {
    height: 60px;
  }

  .logo {
    width: 15%;
  }

  .menu-items {
    width: 60%;
  }

  .menu-icon {
    display: none;
  }
}
</style>
