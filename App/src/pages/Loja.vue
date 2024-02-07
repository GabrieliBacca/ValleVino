<template>
  <div class="card flex items-center justify-center custom-card">
    <Card style="width: 10em">
      <template #header>
        <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" width="220em" />
      </template>
      <template #title> Advanced Card </template>
      <template #subtitle> Card subtitle </template>
      <template #content>
        <p class="m-0">
          Texto
        </p>
      </template>
      <template #footer class="p-d-flex">
        <Button icon="pi pi-check" label="Save" />
        <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
        <h1>fim</h1>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
</script>

<style scoped>
.custom-card {
  border: 2px solid black;
  /* Adiciona uma borda preta de 2px ao redor do card */
}
</style>

<!-- <template>
  <div class="card xl:flex xl:justify-center">
    <OrderList v-model="products" listStyle="height:auto" dataKey="id">
      <template #header> List of Products </template>
      <template #item="slotProps">
        <div class="flex flex-wrap p-2 items-center gap-4">
          <img class="w-[4rem] shadow-md shrink-0 rounded-md" :src="'https://primefaces.org/cdn/primevue/images/product/' +
            slotProps.item.image
            " :alt="slotProps.item.name" />
          <div class="flex-1 flex flex-col gap-2">
            <span class="font-bold">{{ slotProps.item.name }}</span>
            <div class="flex items-center gap-2">
              <i class="pi pi-tag text-sm"></i>
              <span>{{ slotProps.item.category }}</span>
            </div>
          </div>
          <span class="font-bold text-surface-900 dark:text-surface-0">$ {{ slotProps.item.price }}</span>
        </div>
      </template>
    </OrderList>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import { ProductService } from '@/service/ProductService'

const products = ref(null);

onMounted(() => {
  ProductService.getProductsSmall().then((data) => (products.value = data));
});


</script> -->
