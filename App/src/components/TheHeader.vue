
<template>
    <div id="nav">
        <router-link to="/produtos">Todos Produtos</router-link>
        <router-link to="/vinhoTinto">Vinhos Tintos</router-link>
        <router-link to="/vinhoBranco">Vinhos Brancos</router-link>
        <router-link to="/cart">Carrinho</router-link>
        <span class="counter-cart" v-if="socketCart > 0"> {{ socketCart }} </span>
    </div>
</template>

<script>

export default {
    computed: {
        socketCart() {
            return this.$store.getters["quantity"];
        },
    },
};
</script>

<style>
#nav {
    position: fixed;
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 94%,
            rgba(255, 255, 255, 0) 100%);
    width: 100%;
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    line-height: 30px;
    padding: 0px 30px 0px 30px;
}

#nav a.router-link-exact-active {
    color: #42b983;
    text-decoration: none;
    padding: 0px 30px 0px 30px;
    line-height: 30px;
}

.counter-cart {
    display: inline-block;
    padding: 0.3rem 0.7rem 0.3rem 0.7rem;
    background-color: rgba(162, 205, 2, 1);
    color: white;
    border-radius: 50px;
}
</style>