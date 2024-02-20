<template>
    <div class="container">
        <img id="fundo" alt="Logo Valle Vino" src="../assets/img/inscreva-se-bg.svg" />
        <br>
        <div class="subcontainer">
            <div class="header text-left justify-center">
                <h1 class="header-h1">Sobre nós</h1>
            </div>
            <br><br><br>
            <div class="text">
                <span>
                    Acreditamos que o vinho é muito mais que uma bebida. Ele é uma experiência. Uma jornada que nos leva
                    a
                    novos horizontes sensoriais e culturais, na ValleVino, não apenas oferecemos rótulos selecionados,
                    mas
                    também conhecimento, harmonização e sentimentos por trás de cada garrafa.
                </span>
            </div>
            <br><br><br>
            <div class="text">
                <span class="text-left">Torcemos para que cada cliente que viva essa experiência consiga
                    aprender e
                    ensinar
                    e, acima de tudo, criar laços e memórias.</span>
            </div>
            <br><br>
            <div class="brinde d-flex justify-end align-center mr-2">
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

}



#fundo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 47%;
    object-fit: cover;
    opacity: 0.5;
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

.header-h1 {
    color: #482817;
    font-family: lora;
    font-size: 70px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
}

.text {
    width: 786px;
    color: #482817;
    font-family: baskerville;
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



#fundo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 47%;
    object-fit: cover;
    opacity: 0.5;
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

.header-h1 {
    color: #482817;
    font-family: lora;
    font-size: 70px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
}

.text {
    width: 786px;
    color: #482817;
    font-family: baskerville;
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
