<template>
    <header :class="{ 'header-fixed': isFixedHeader }">
        <nav class="container">
            <!-- Logo -->
            <div class="header-item logo">
                <a href="/"><img id="logo" alt="Logo Valle Vino" src="../assets/img/logoValleVinoBlack.png" /></a>
            </div>
            <!-- Links do menu -->
            <div class="header-item menu">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/loja">Loja</a></li>
                    <li><a href="/Adm">ADM</a></li>
                    <li><a href="/WineCard">WineCard</a></li>
                </ul>
            </div>
            <!-- Botão de login -->
            <div class="header-item">
                <a href="/Login"><img id="bt-usuario" src="../assets/img/ico-usuario.svg"
                        alt="botão de login usuario" /></a>
                <a href="/"><img id="bt-carrinho" src="../assets/img/ico-carrinho.svg" alt="botão de carrinho" /></a>
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
/* Estilos para o header e seus itens */
header {
    background-color: var(--color-background-light);
    width: 100%;
    height: 70px;
}

.header-item {
    display: flex;
    align-items: center;
    margin: 10px 0 0px 0;

}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* Centraliza verticalmente */
}

.logo {
    margin-left: 5px;

    /* Ajuste o espaço à esquerda do logo conforme necessário */
}

#logo {
    width: 130px;
    margin: 10px;

}

ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

ul li {
    margin: 0 15px;
    /* Espaçamento entre os itens do menu */
}

ul li a {
    color: var(--color-text-dark);
}

/* Estilos para o botão de login */
#bt-usuario {
    width: 25px;
    margin-right: 10px;
    /* Ajuste o espaço à direita do botão de login conforme necessário */
}

/* Estilos para a versão desktop */
@media (min-width: 700px) {
    .logo {
        margin-left: 20px;
        /* Ajuste o espaço à esquerda do logo conforme necessário */
    }
}
</style>