<template>
    <v-app>
        <main>
            <!-- Conteúdo da home -->
            <section class="container" id="mainContent">
                <div class="content-container">

                </div>
                <div class="video-container">
                    <video autoplay muted loop id="video-bg">
                        <source src="../assets/video/home.mp4" type="video/mp4" />
                    </video>
                    <div class="centered-text">
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
                        <br>
                        <div class="call-to-action-container">
                            <button><a href="./loja " noeffect>Visite a nossa loja</a></button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <v-main class="pt-0" ref="mainContent" @scroll="onScroll"> <!-- Adicione o evento de rolagem -->
            <home />
            <Loja3 />
            <Loja5 />
        </v-main>
        <Footer />
        <!-- <foote />  ADICIONAR DEPOIS....-->
    </v-app>
</template>

<script>

import Loja3 from "./Loja3.vue";
import Loja5 from "./Loja5.vue";
import Footer from "../components/AppFooter.vue";

// import Footer from "./components/Footer.vue";

export default {
    name: "App",

    components: {

        Loja3,
        Loja5,
        Footer,
    },

    data: () => ({
        color: "",
        flat: null,
    }),

    methods: {
        methods: {
            onScroll() {
                const mainContent = this.$refs.mainContent;
                const scrollPosition = mainContent.scrollTop + mainContent.clientHeight;
                const scrollHeight = mainContent.scrollHeight;
                if (scrollPosition >= scrollHeight) {
                    this.$router.replace('/loja3'); // Replace '/loja3' with the path of the page you want to navigate to
                }
            },
        },                // Navegar dinamicamente para as páginas loja3.vue e loja5.vue
        // Exemplo: this.$router.push('/loja3') 
        // ou use o método programático de navegação do Vue Router

    },
}
</script>


<style scoped>
.container {
    position: relative;
    width: 100%;
    max-width: var(--max-width);
    margin: 0;
    padding: 0;
}

.content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0px;
    margin-top: 0;
    padding-top: 0;
    position: relative;
    align-items: center;
}

#video-bg {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    filter: brightness(0.3);
}

.video-container {
    position: relative;
    width: 100%;
}

.centered-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
}

.centered-text h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 100px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.centered-text p {
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 20px;
}

.call-to-action-container button {
    padding: 10px 20px;
    background: transparent;
    border-radius: 30px;
    color: #fff;
    text-transform: uppercase;
    border: 2px solid #fff;
    transition: all 0.5s;
}

.call-to-action-container button:hover {
    background-color: #fff;
    color: #000;
}
</style>