<!-- PopUp.vue -->
<template>
    <div v-if="showPopup" class="popup">
        <div class="popup-inner">
            <v-alert variant="outlined" type="warning" prominent border="top">
                <img src="../assets/img/logoValleVinoBlack.png" width="200" alt="">
                <span class="maioridade"> Você tem mais de 18 anos?</span>
                <button @click="confirmAge" class="confirm-button">Sim</button>
                <button @click="rejectAge" class="reject-button">Não</button>
                <br>
                <span><strong>Se beber, não dirija.</strong> Não compartilhe esse conteúdo com menores de 18 anos.</span>
            </v-alert>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showPopup: true,
        };
    },
    methods: {
        confirmAge() {
            this.$emit('confirm');
            this.showPopup = false;
        },
        rejectAge() {
            this.$emit('reject');
            this.showPopup = false;
            window.location.href = 'https://www.google.com';
        },
    },
};
</script>

<style scoped>
.maioridade {
    font-family: "Arial", Helvetica, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: .04em;
    color: #000;
    padding: 10px 0;
    display: inline-block;
    text-align: center;
    width: 100%;
}



.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-around;
    gap: 10px;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42857143;
    font-size: 1.4rem;
    color: #585757;

}

.popup-inner {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
    justify-content: space-around;
}

.popup-text {
    font-size: 18px;
    margin-bottom: 20px;
}

.button-container {
    display: flex;
    justify-content: center;
}

.confirm-button,
.reject-button {
    padding: 0.5rem 1.5rem;
    margin: 0 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    color: white;
    font: inherit;
}




.confirm-button {
    background-color: rgba(66, 185, 131, 1);
    border: 1px solid rgba(66, 185, 131, 1);
}

.confirm-button:hover,
.confirm-button:active {
    background-color: #82dcb1;
    border-color: #82dcb1;

}

.reject-button {
    background-color: #f44336;
    border: 1px solid #f44336;

}

.reject-button:hover,
.reject-button:active {
    background-color: #ee675e;
    border-color: #ee675e;

}
</style>