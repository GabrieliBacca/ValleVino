<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-end">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full p-3">
                        <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4"
                            :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <img class="w-9/12 sm:w-[16rem] xl:w-[10rem] shadow-md block xl:block mx-auto rounded"
                                :src="item.img" height="200px" alt="wine image">
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
                                    <span class="text-2xl font-semibold">R${{ item.price }},00</span>
                                    <Button icon="pi pi-shopping-cart" rounded
                                        :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full p-3 sm:w-6/12 xl:w-4/12">
                        <div
                            class="p-4 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 rounded">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <div class="flex items-center gap-2">
                                    <i class="pi pi-tag"></i>
                                    <span class="font-semibold">{{ item.category }}</span>
                                </div>
                                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                            </div>
                            <div class="flex flex-col items-center gap-3 py-5">
                                <img class="w-9/12 shadow-md rounded" :src="item.img" height="200px" alt="wine image" />
                                <div class="text-2xl font-bold">{{ item.name }}</div>
                                <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-2xl font-semibold">R${{ item.price }},00</span>
                                <Button icon="pi pi-shopping-cart" rounded
                                    :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
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
    ProductService.getProducts().then((data) => (products.value = data.slice(0, 12)));
});

const products = ref();
const layout = ref('grid');

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
}

</script>