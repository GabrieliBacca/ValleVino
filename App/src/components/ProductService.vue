<template>
    <div>
        <h2>Lista de Vinhos</h2>
        <ul>
            <li v-for="wine in wines" :key="wine.id">
                {{ wine.name }} - {{ wine.year }}
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

async function getProductsSmall() {
    try {
        const response = await axios.get("http://localhost:8000/api/wines");
        const data = response.data;

        // Apply the transformation to remove "id" and "type" properties
        const transformedData = data.map((product) => {
            const { id, type, ...rest } = product;
            return rest;
        });

        return transformedData;
    } catch (error) {
        console.error('Error fetching wines:', error);
        return [];
    }
}

export default {
    setup() {
        const wines = ref([]);

        onMounted(async () => {
            wines.value = await getProductsSmall();
        });

        return {
            wines
        };
    }
};
</script>