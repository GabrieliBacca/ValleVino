<template>
    <div>
        <div class="card">

            <div class="card-header">
                <h4>
                    PÁGINA DE ADMINISTRACÃO
                </h4>
                <RouterLink to="/WineForm" class="btn btn-primary float-end">
                    Registrar Produto
                </RouterLink>
            </div>

            <div class="card-body">
                <table class="table table-bordered">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Produto</th>
                            <th>Imagem</th>
                            <th>Quantidade</th>
                            <th>Preço R$</th>
                        </tr>
                    </thead>

                    <tbody v-if="this.wines.length > 0">
                        <tr v-for="(wine, index) in this.wines " :key="index">
                            <td>{{ wine.id }}</td>
                            <td>{{ wine.label }}</td>
                            <td><img :src="wine.img" width="100px" alt="wine image"></td>
                            <td>{{ wine.quantity }}</td>
                            <td>{{ wine.price }},00</td>
                            <td>
                                <RouterLink :to="{ path: `AdmEdit/${wine.id}/` }" class="btn btn-success float-none">
                                    Editar
                                </RouterLink>

                                <button type=" button" class="btn btn-danger float-end" @click="deleteBook(wine.id)">
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="7">Carregando...</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "wines",
    data() {
        return {
            wines: []
        }
    },
    mounted() {

        this.getWines()

    },
    methods: {
        getWines() {
            axios.get('http://localhost:8000/api/wines').then(res => {
                this.wines = res.data
            })

        },
        deleteBook(id) {
            axios.delete(`http://localhost:8000/api/wines/${id}`).then(res => {
                console.log(res)
            })
        }
    }
}
</script>