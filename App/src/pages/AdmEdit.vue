<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h1>Editar Produto: <br>
                    <img :src="this.model.wine.img" width="100px" alt="wine image"> {{ this.model.wine.label }}
                </h1>
            </div>
            <div class="card-body">

                <div class="mb-3">
                    <label for="">Tipo</label>
                    <select class="form-control" v-model="model.wine.typeId">
                        <option>
                            {{ this.model.wine.typeId }}
                        </option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="">Origem</label>
                    <select class="form-control" v-model="model.wine.countryId">
                        <option>
                            {{ this.model.wine.countryId }}
                        </option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="">Rótulo</label>
                    <input type="text" v-model="model.wine.label" class="form-control">
                </div>

                <div class="mb-3">
                    <label for="">Uva</label>
                    <select class="form-control" v-model="model.wine.grape">
                        <option>
                            {{ this.model.wine.grape }}
                        </option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="">Preço R$</label>
                    <input type="number" class="form-control" v-model="model.wine.price">
                </div>

                <div class="mb-3">
                    <label for="">Quantidade</label>
                    <input type="number" class="form-control" v-model="model.wine.quantity">
                </div>

                <div class="mb-3">
                    <label for="">Vinícula</label>
                    <input type="text" class="form-control" v-model="model.wine.vinicula">
                </div>

                <div class="mb-3">
                    <label for="">Ano</label>
                    <input type="number" class="form-control" v-model="model.wine.year">
                </div>

                <div class="mb-3">
                    <label for="">Teor Alcoólico</label>
                    <input type="number" class="form-control" v-model="model.wine.alchoolic">
                </div>

                <div class="mb-3">
                    <label for="">Descrição</label>
                    <input type="text" class="form-control" v-model="model.wine.description">
                </div>

                <div class="mb-3">
                    <label for="">Imagem URL</label>
                    <input type="text" class="form-control" v-model="model.wine.img">
                </div>

                <div class="mb-3">
                    <label for="">Harmonização</label>
                    <select class="form-control" v-model="model.wine.harmony">
                        <option>
                            {{ this.model.wine.harmony }}
                        </option>
                    </select>
                </div>


                <div class="mb-3">
                    <button type="button" @click="updateWine()" class="btn btn-primary">Atualizar</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            model: {
                wine: {
                    typeId: null,
                    countryId: null,
                    label: '',
                    grapeId: null,
                    price: null,
                    quantity: null,
                    vinicula: '',
                    year: null,
                    alchoolic: null,
                    description: '',
                    img: '',
                    harmony: '',
                },
                type: {
                    type: "",

                },
                country: {
                    country: ""
                },
                grape: {
                    grape: ""
                },
                harmony: {
                    harmony: ""
                }
            }
        }
    },
    mounted() {
        console.log(this.$route.params.id)
        this.getWine()
    },
    methods: {
        updateWine() {
            axios.put()
        },
        getWine() {
            let id = this.$route.params.id
            axios.get('http://localhost:8000/api/wines/' + id).then(res => {
                this.model.wine = res.data
                this.model.type = res.data.type
                this.model.country = res.data.country
                this.model.grape = res.data.grape
                this.model.type = res.data.harmony
            })
        }
    },
}
</script>

<style lang="scss" scoped></style>