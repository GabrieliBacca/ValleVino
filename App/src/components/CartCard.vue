
<template>
    <li>
        <div class="image-container">
            <img :src="img" :alt="model" />
        </div>
        <div>
            <h3>{{ label }} {{ type }} {{ grape }} {{ alchoolic }}</h3>
            <div class="item-data">
                <div>
                    Preço por unidade:
                    <strong>R$ {{ price.toFixed(2) }}</strong>
                </div>
                <div>
                    Quantidade:
                    <strong>{{ quantity }}</strong>
                </div>
            </div>
            <div class="item-total">Total: R$ {{ itemTotal }}</div>
            <button @click="remove">Remove</button>
        </div>
    </li>
</template>

<script>
export default {
    props: [
        "id",
        "type",
        "label",
        "grape",
        "img",
        "price",
        "quantity",
    ],
    computed: {
        itemTotal() {
            return (this.price * this.quantity).toFixed(2);
        },
    },
    methods: {
        remove() {
            this.$store.dispatch("removeFromCart", { id: this.id });
        },
    },
};
</script>

<style scoped>
.image-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

li {
    margin: 1rem auto;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    text-align: center;
    max-width: 25rem;
    border-radius: 15px;
    border: 1px solid rgba(60, 60, 60, 0.2);
}

img {
    display: flex;
    height: 250px;
    object-fit: cover;
}

.item-data {
    display: flex;
    justify-content: space-between;
}

.item-total {
    font-weight: bold;
    margin: 1rem 0;
    border-top: 1px solid #474747;
    border-bottom: 2px solid #474747;
    padding: 0.25rem 0;
    width: auto;
}
</style>
