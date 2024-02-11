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
        <!-- <foote />  ADICIONAR DEPOIS....-->
    </v-app>
</template>

<script>

import Loja3 from "./Loja3.vue";
import Loja5 from "./Loja5.vue";
// import foote from "./components/Footer";

export default {
    name: "App",

    components: {

        Loja3,
        Loja5,
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
    max-width: var(--max-width);
    margin: auto;
    padding: 1rem;
    min-height: calc(100vh - 100px);
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    color: white;
}

.content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 70px;
}

.content-container h1 {
    font-size: 3rem;
    font-weight: 400;
    line-height: 3.5rem;
    margin-bottom: 1rem;
}

#video-bg {
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    filter: brightness(0.3);
    object-fit: cover;
}

.call-to-action-container button:hover {
    background-color: #fff;
    color: #000;
}

.call-to-action-container button {
    padding: 10px 10px;
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
    bottom: -3em;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
}



.video-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* Adjust the height as needed */
}

.video-container video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Cover the entire container while maintaining aspect ratio */
}

.centered-text {
    position: absolute;
    top: 30%;
    left: 40%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    /* Add text color as needed */
}
</style>