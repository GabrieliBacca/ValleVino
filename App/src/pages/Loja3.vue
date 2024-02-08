<template>
    <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
        <v-carousel-item v-for="(wine, i) in wines" :key="i">
            <v-sheet :color="colors[i]" height="100%">
                <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2 d-flex justify-space-between align-center">
                        <div>
                            <img :src="wine.img" height="300px" alt="wine image">
                        </div>
                        <div>
                            <div>
                                {{ wine.label }}<br>
                                Preço: {{ wine.price }},00<br>
                                {{ wine.type }}<br>
                                Uva: {{ wine.grape }} <br>
                            </div>
                        </div>
                    </div>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>



<script>
export default {
    name: "Loja3",
    data() {
        return {
            colors: [
                'blue darken-2',
                'blue darken-2',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [],
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
                this.slides = this.wines.map(wine => wine.label); // Use wine names as slides

                this.$nextTick(() => {
                    $('.carousel').carousel();
                });
            } catch (error) {
                console.error("Error fetching wines:", error);
            }
        },
    },
};
</script>
<style scoped></style>