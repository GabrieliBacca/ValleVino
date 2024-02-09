
<template>
    <Wrapper>
        <ProductCard v-for="product in products" :key="product.id" :id="product.id" :type="product.type"
            :label="product.label" :grape="product.grape" :img="product.img" :price="product.price" />
    </Wrapper>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
    components: {
        ProductCard,
    },
    computed: {
        products() {
            const productsSort = this.$store.getters["products"];
            return productsSort.sort((a, b) => {
                if (a.model < b.model) {
                    return -1;
                }
                if (a.model > b.model) {
                    return 1;
                }
                return 0;
            });
        },
    },
};
</script>
