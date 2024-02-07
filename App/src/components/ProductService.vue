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

export default {
    setup() {
        const wines = ref([]);

        onMounted(async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/wines"); // Substitua "http://localhost:3000" pela URL do seu backend
                wines.value = response.data;
            } catch (error) {
                console.error('Error fetching wines:', error);
            }
        });

        return {
            wines
        };
    }
};
</script>