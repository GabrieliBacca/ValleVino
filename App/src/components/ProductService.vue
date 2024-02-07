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
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    setup() {
        const wines = ref([]);

        onMounted(async () => {
            try {
                const winesFromDB = await prisma.product.findMany({
                    where: {
                        category: 'wine'
                    }
                });
                wines.value = winesFromDB;
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