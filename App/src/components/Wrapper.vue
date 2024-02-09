
<template>
    <div class="wrapper">
        <div class="product-container">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "Wrapper",
}
</script>

<style>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.product-container {
    padding-top: 170px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
}
</style>