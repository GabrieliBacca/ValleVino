<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Espaço reservado: primeiro slide"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First
                        slide</text>
                </svg>
            </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Anterior</font>
                </font>
            </span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Próximo</font>
                </font>
            </span>
        </button>
    </div>



    <br><br>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div v-for="(wine, index) in wines" :key="index" :class="{ 'carousel-item': true, 'active': index === 0 }">
                <img :src="wine.image" class="d-block w-100" :alt="wine.name">
                <div class="carousel-caption">
                    <h5>{{ wine.name }}</h5>
                    <p>{{ wine.description }}</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "Loja3",
    data() {
        return {
            wines: [],
        };
    },
    created() {
        this.fetchWines();
    },

    mounted() {
        this.$nextTick(() => {
            $('.carousel').carousel();
        });
    },
    methods: {
        async fetchWines() {
            try {
                const response = await fetch("http://localhost:8000/api/wines");
                const data = await response.json();
                this.wines = data;

                // Inicialize o carrossel após os dados serem carregados
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

<style scoped>
* {
    color: black;
    background-color: aqua;
}
</style>