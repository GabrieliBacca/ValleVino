<!-- <template>
  <div class="card">
    <DataView :value="products" :sortOrder="sortOrder" :sortField="sortField">
      <template #header>
        <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price"
          @change="onSortChange($event)" />
      </template>
      <template #list="slotProps">
        <div class="flex flex-wrap">
          <div v-for="(item, index) in slotProps.items" :key="index" class="w-full p-3">
            <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4"
              :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
              <img class="w-9/12 sm:w-[16rem] xl:w-[10rem] shadow-md block xl:block mx-auto rounded"
                :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
              <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                <div class="flex flex-col items-center sm:items-start gap-3">
                  <div class="text-2xl font-bold text-surface-900 dark:text-surface-0">{{ item.name }}</div>
                  <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                  <div class="flex items-center gap-3">
                    <span class="flex items-center gap-2">
                      <i class="pi pi-tag"></i>
                      <span class="font-semibold">{{ item.category }}</span>
                    </span>
                    <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                  </div>
                </div>
                <div class="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                  <span class="text-2xl font-semibold">${{ item.price }}</span>
                  <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductService from "../components/ProductService.vue";

onMounted(() => {
  ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 5)));
});

const products = ref();
const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const sortOptions = ref([
  { label: 'Price High to Low', value: '!price' },
  { label: 'Price Low to High', value: 'price' },
]);
const onSortChange = (event) => {
  const value = event.value.value;
  const sortValue = event.value;

  if (value.indexOf('!') === 0) {
    sortOrder.value = -1;
    sortField.value = value.substring(1, value.length);
    sortKey.value = sortValue;
  }
  else {
    sortOrder.value = 1;
    sortField.value = value;
    sortKey.value = sortValue;
  }
};
const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case 'INSTOCK':
      return 'success';

    case 'LOWSTOCK':
      return 'warning';

    case 'OUTOFSTOCK':
      return 'danger';

    default:
      return null;
  }
};
</script>
 -->



<template>
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
import ProductService from "../components/ProductService.vue";

const products = ref(null);

onMounted(() => {
  ProductService.getProductsSmall().then((data) => (products.value = data));
});


</script> 


<style scoped></style> 
