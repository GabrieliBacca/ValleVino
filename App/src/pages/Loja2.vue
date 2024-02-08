
<template>
    <div class="card">
        <DataView :value="products">
            <template #list="slotProps">
                <div class="flex flex-wrap">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full p-3">
                        <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4"
                            :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <img class="w-9/12 sm:w-[16rem] xl:w-[10rem] shadow-md block xl:block mx-auto rounded"
                                :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`"
                                :alt="item.name" />
                            <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                                <div class="flex flex-col items-center sm:items-start gap-3">
                                    <div class="text-2xl font-bold text-surface-900 dark:text-surface-0">{{ item.name }}
                                    </div>
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
                                    <Button icon="pi pi-shopping-cart" rounded
                                        :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
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
import { ProductService } from '../components/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 5)));
});

const products = ref();
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
