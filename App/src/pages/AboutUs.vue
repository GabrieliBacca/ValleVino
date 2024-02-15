<template>
    <div class="container">
        <br>
        <div class="subcontainer">
            <div class="header flex justify-start">
                <h1 class="text-left">Sobre nós</h1>
            </div>
            <br><br><br>
            <div class="text">
                <span>
                    Acreditamos que o vinho é muito mais que uma bebida. Ele é uma experiência. Uma jornada que nos leva a
                    novos horizontes sensoriais e culturais, na ValleVino, não apenas oferecemos rótulos selecionados, mas
                    também conhecimento, harmonização e sentimentos por trás de cada garrafa.
                </span>
            </div>
            <br><br><br>
            <div class="text">
                <span class="text-left">Torcemos para que cada cliente que viva essa experiência consiga aprender e ensinar
                    e, acima de tudo, criar laços e memórias.</span>
            </div>
            <br><br>
            <div class="brinde d-flex justify-end align-center">
                <span>Vamos brindar?</span>
            </div>
            <br>
        </div>
        <div id="imagens-about-us">
            <img src="../assets/img/foto1-sobre-nos.jpg" alt="">
            <img src="../assets/img/foto2-sobre-nos.jpg" alt="">
            <img src="../assets/img/foto3-sobre-nos.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {};
    }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    font-family: montserrat;
}

.container {
    position: relative;
    width: 100%;
    max-width: var(--max-width);
    margin: 0;
    padding: 0;
    background: rgba(250, 247, 242, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #f5ebda;
}

#imagens-about-us {
    display: flex;
    justify-content: space-around;
}

#imagens-about-us img {
    width: calc(100% / 3 - 20px);
    /* Definindo a largura de cada imagem com uma margem de 10px em cada lado */
    margin: 0 10px;
    /* Espaçamento entre as imagens */
    box-shadow: 20px 1px 25px rgba(0, 0, 0, 0.5);
}

.header {
    color: #482817;
    font-family: lora;
    font-size: 100px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
}

.text {
    width: 786px;
    color: #482817;
    font-family: montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    /* 166.667% */
}

.brinde {
    color: #482817;
    text-align: center;
    font-family: baskerville;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: 60px;
    flex-shrink: 0;
}
</style>
