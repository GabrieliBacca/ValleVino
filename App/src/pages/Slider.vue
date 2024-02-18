<template>
    <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover" v-if="wines.length">
        <v-carousel-item v-for="(wine, i) in wines" :key="i">
            <v-sheet :color="colors[i]" height="100%" class="carousel-item">
                <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2 d-flex justify-space-between align-center">
                        <div>
                            <img :src="wine.img" height="300px" alt="wine image">
                        </div>
                        <div>
                            <div class="text-card">
                                {{ wine.label }}<br>
                                <!-- Preço: R$ {{ wine.price }},00<br> -->
                                {{ wine.type }}<br>
                                <!-- Uva: {{ wine.grape }} <br> -->
                            </div>
                        </div>
                    </div>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
    <v-progress-circular v-else indeterminate color="primary"></v-progress-circular>
</template>

<script>
export default {
    name: "Loja3",
    data() {
        return {
            colors: [
                // 'blue darken-2',
                // 'cornflowerblue soft',
                // 'aqua darken-1',
                // 'red solid',




            ],
            wines: [],
        }
    },
    created() {
        this.fetchWines();
    },
    methods: {
        async fetchWines() {
            try {
                const response = await fetch("http://localhost:8000/api/wines");
                const data = await response.json();
                this.wines = data;
            } catch (error) {
                console.error("Error fetching wines:", error);
            }
        },
    },
};
</script>

<style scoped>
.text-card {
    font-family: montserrat;
    color: black;
}

.carousel-item {
    border: 3px solid black;

    /* Define a cor da borda */




    border-radius: 10px;
    /* Adiciona bordas arredondadas */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    /* Adiciona uma sombra sutil */
    transition: transform 0.3s ease;
    /* Adiciona uma transição suave */
}

.carousel-item:hover {
    transform: scale(1.05);
    /* Aumenta ligeiramente o tamanho no hover */
}
</style>
