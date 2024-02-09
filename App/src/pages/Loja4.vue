
<template>
    <TheHeader />
    <router-view />
</template>

<script>
import TheHeader from "../components/TheHeader.vue";

export default {
    components: {
        TheHeader,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    margin: 0;
}

button {
    font: inherit;
    cursor: pointer;
    background-color: rgba(66, 185, 131, 1);
    color: white;
    border: 1px solid rgba(66, 185, 131, 1);
    padding: 0.5rem 1.5rem;
    border-radius: 30px;
    margin-bottom: 20px;
}

button:hover,
button:active {
    background-color: #82dcb1;
    border-color: #82dcb1;
}
</style>
