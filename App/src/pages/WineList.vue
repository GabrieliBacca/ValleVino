<!-- WineList.vue -->
<template>
    <div>
        <h2>Lista de Vinhos</h2>
        <div id="wine-list"></div>
        <div v-for="wine in wines" :key="wine.id">
            <!-- Aqui você pode personalizar o layout do card conforme necessário -->
            <div class="wine-card">

                <h2>{{ wine.label }}</h2>
                <p>Tipo: {{ wine.type }}</p>
                <p>País: {{ wine.country }}</p>
                <p>Uva: {{ wine.grape }}</p>
                <p>Preço: R$ {{ wine.price }},00</p>
                <div class="wine-img">
                    <img :src="wine.img" alt="">
                </div>
                <!-- Adicione mais detalhes conforme necessário -->
                <div @click="showDetails(wine)">
                    <!-- Exibir detalhes básicos do vinho, como nome, safra, etc. -->
                    <!-- {{ wine.label }} -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            wines: [],
        };
    },
    mounted() {
        // Quando o componente é montado, buscar a lista de vinhos
        this.getWines();
    },
    methods: {
        async getWines() {
            try {
                const response = await fetch('http://localhost:8000/api/wines');
                const data = await response.json();
                this.wines = data;
            } catch (error) {
                console.error('Error fetching wines:', error);
            }
        },
        showDetails(wine) {
            // Lógica para exibir detalhes do vinho, pode navegar para outra rota ou exibir um modal, etc.
            console.log('Detalhes do vinho:', wine);
        },
    },
};
</script>


<style scoped>
/* Estilos para os cards de vinho */
#wine-list {
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start; */
    display: grid;
    /* define o modelo de layout do elemento como uma grade */
    gap: 16px;
    grid-gap: 32px;
    /* não é usado mais */
    margin: 0 auto;
}

.wine-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    width: 30%;
    /* 3 cards por linha */
    box-sizing: border-box;
    /*Garante que a largura inclui a borda e o preenchimento */

}

.wine-img img {
    width: 120px;
    height: 160px;
    display: flex;
    margin-left: 1px;
}

@media (max-width: 768px) {
    .wine-card {
        width: 100%;
        /* Em telas menores, um card por linha */
    }
}
</style>
