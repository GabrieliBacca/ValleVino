
<template>
    <Wrapper>
        <ProductCard v-for="product in products" :key="product.id" :id="product.id" :type="product.type"
            :label="product.label" :grape="product.grape" :img="product.img" :price="product.price" />
    </Wrapper>
</template>

<script>
import ProductCard from "@/components/ProductCard";

export default {
    components: {
        ProductCard,
    },
    computed: {
        products() {
            const productsFilter = this.$store.getters["products"];
            return productsFilter.filter((product) => {
                if (product.type.includes("Tinto")) {
                    return true;
                } else {
                    return false;
                }
            });
        },
    },
};
</script>