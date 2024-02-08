<!-- PopUp.vue -->
<template>
    <div v-if="showPopup" class="popup">
        <div class="popup-inner">
            <p> Você tem mais de 18 anos?</p>
            <button @click="confirmAge">Sim</button>
            <button @click="rejectAge">Não</button>
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
}

.popup-inner {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 300px;
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
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.confirm-button {
    background-color: #4caf50;
    color: white;
}

.reject-button {
    background-color: #f44336;
    color: white;
}
</style>