<template>
    <v-app>
        <main>
            <!-- Conteúdo da home -->
            <section class="container" id="mainContent">
                <div class="content-container">
                    <!-- Conteúdo -->
                </div>
                <div class="video-container">
                    <video autoplay muted loop id="video-bg" class="responsive-video">
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
            <Home />
            <Slider />
            <WineQuiz />
            <div id="sobre-nos">
                <AboutUs />
            </div>
        </v-main>
        <!-- <Footer /> -->
    </v-app>
</template>

<script>
import Slider from "./Slider.vue";
import WineQuiz from "./WineQuiz.vue";
import AboutUs from "./AboutUs.vue";

export default {
    name: "App",

    components: {
        Slider,
        WineQuiz,
        AboutUs
    },

    data() {
        return {
            color: "",
            flat: null,
        };
    },

    methods: {
        onScroll() {
            const mainContent = this.$refs.mainContent;
            const scrollPosition = mainContent.scrollTop + mainContent.clientHeight;
            const scrollHeight = mainContent.scrollHeight;
            if (scrollPosition >= scrollHeight) {
                this.$router.replace('/slider'); // Substitua '/loja3' pelo caminho da página para navegar
            }
        },
    },
}
</script>

<style scoped>
.container {
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
}

.video-container {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.video-container video {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: brightness(0.3);
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
    font-size: 4vw;
    font-weight: bold;
    margin-bottom: 5vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.centered-text p {
    font-size: 1.5vw;
    line-height: 1.5;
    margin-bottom: 1vw;
}

.call-to-action-container button {
    padding: 0vw 1vw;
    background: transparent;
    border-radius: 3vw;
    color: #fff;
    text-transform: uppercase;
    border: 0.2vw solid #fff;
    transition: all 0.5s;
    width: auto;
    text-align: center;
}

.call-to-action-container button a {
    display: block;
    padding: 0.5vw 1vw;
    /* Ajuste o padding para telas menores */
    font-size: 1.5vw;
    /* Ajuste o tamanho da fonte para telas menores */
}

.call-to-action-container button:hover {
    background-color: #fff;
    color: #000;
}

@media screen and (max-width: 768px) {
    .centered-text p {
        font-size: 2vw;
    }
}
</style>
