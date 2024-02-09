<template>
    <div>
        <div v-for="wine in wines" :key="wine.id">
            <p>{{ wine.label }}</p>
            <p>{{ wine.price }}</p>
            <img :src="wine.img" width="150px" height="150px">
        </div>
    </div>
</template>

<script>
// const mutations = {
//     setWines(state, wines) {
//         state.wines = wines;
//     }
// }

import { reactive, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useHead } from '@vueuse/head'

export default {
    setup() {
        const store = useStore()

        // Inicializar o estado da loja
        onMounted(async () => {
            await store.dispatch('initialiseStore')
        })

        // Obter os vinhos da loja
        const wines = computed(() => store.state.wines)

        // Carregar os vinhos ao montar o componente
        onMounted(async () => {
            try {
                const response = await fetch('http://localhost:8000/api/wines')
                const data = await response.json()
                store.commit('setWines', data) // commit para atualizar o estado com os vinhos
            } catch (error) {
                store.commit('setError', error) // commit para lidar com erros
            }
        })

        // Configurar o título e a descrição da página
        const siteData = reactive({
            title: `My website`,
            description: `My beautiful website`,
        })
        useHead({
            // Pode ser estático ou computado
            title: computed(() => siteData.title),
            meta: [
                {
                    name: `description`,
                    content: computed(() => siteData.description),
                },
            ],
        })

        return {
            wines
        }
    }
}
</script>

<style scoped>
.min-h-content {
    min-height: calc(100vh - 82px - 148px);
}
</style>