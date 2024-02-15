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
                    <select class="form-control" v-model="model.wine.typeId" ref="tipoSelect">
                        <option v-for="option in typeOptions" :value="option.id"
                            :selected="option.id === model.wine.typeId">
                            {{ option.type }}
                        </option>
                    </select>

                    <!-- <select class="form-control" v-model="this.model.wine.typeId">
                        <option v-for="option in typeOptions" :value="option.id"
                            :selected="option.id === this.model.wine.typeId">
                            {{ option.type }}
                        </option>
                    </select> -->

                    <!-- versao correta para tentar
                    <select class="form-control" v-model="this.model.wine.typeId.id">
                            <option v-for="option in typeOptions" :value="option.id"
                                :selected="option.id === this.model.wine.typeId.id">
                                {{ option.type }}
                            </option>
                        </select> -->

                </div>

                <div class="mb-3">
                    <label for="">Origem</label>
                    <select class="form-control" v-model="model.wine.countryId" ref="countrySelect">
                        <option v-for=" option in countryOptions " :value="option.id"
                            :selected="option.id === this.model.wine.countryId">
                            {{ option.country }}
                        </option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="">Rótulo</label>
                    <input type="text" v-model="model.wine.label" class="form-control">
                </div>

                <div class="mb-3">
                    <label for="">Uva</label>
                    <select class="form-control" v-model="model.wine.grapeId">
                        <option v-for=" option  in  grapeOptions " :value="option.id">{{ option.grape }}</option>
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
                    <label for="">Imagem URL Loja</label>
                    <input type="text" class="form-control" v-model="model.wine.imgstore">
                </div>

                <div class="mb-3">
                    <label for="">Harmonização</label>
                    <select class="form-control" v-model="model.wine.harmonyId">
                        <option v-for=" option  in  harmonyOptions " :value="option.id">{{ option.harmony }}</option>
                    </select>
                </div>

                <div class="mb-3">
                    <button type="button" @click="updateWine()" class="">Atualizar</button>
                    <button type=" cancel">Cancelar</button>
                    <button class=" return" @click="$router.push('/Adm')">
                        Retornar ADM
                    </button>

                </div>


            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    watch: {
        'model.wine.countryId': {
            handler(val) {
                // Atualizar a seleção da opção após a carga dos dados
                if (this.$refs.countrySelect) {
                    this.$refs.countrySelect.value === val; // Use === para comparação estrita
                }
            }
        }
    },
    data() {
        return {
            model: {
                wine: {

                    label: '',
                    price: null,
                    quantity: null,
                    vinicula: '',
                    year: null,
                    alchoolic: null,
                    description: '',
                    img: '',
                    imgstore: '',
                    typeId: null,
                    countryId: 2,
                    grapeId: null,
                    harmony: null,
                },

                // typeId: {
                //     id: "",
                //     type: "",

                // },
                // countryId: {
                //     id: "",
                //     country: "",
                // },
                // grapeId: {
                //     id: "",
                //     grape: ""
                // },
                // harmony: {
                //     id: "",
                //     harmony: ""
                // },

            },
            countries: [

            ],

            types: [

            ],

            grapes: [

            ],

            harmonies: [

            ]
        }
    },
    mounted() {
        console.log(this.$route.params.id)
        this.getWine()

        // this.model.wine.countryId = this.model.wine.countryId.id
        // this.model.wine.grapeId = this.model.wine.grapeId.id
        // this.model.wine.harmonyId = this.model.wine.harmonyId.id

    },
    created() {
        this.fetchCountries();
        this.fetchTypes();
        this.fetchGrapes();
        this.fetchHarmonies();


    },
    beforeMount() {
        // this.model.wine.typeId = 1
        this.model.wine.countryId = 2
    },
    methods: {
        async fetchCountries() {
            try {
                const response = await fetch('http://localhost:8000/api/country');
                this.countries = await response.json();
                console.log(this.countries)
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        },

        async fetchTypes() {
            try {
                const response = await fetch('http://localhost:8000/api/type');
                this.types = await response.json();
                console.log(this.types)
            } catch (error) {
                console.error('Error fetching types:', error);
            }
        },

        async fetchGrapes() {
            try {
                const response = await fetch('http://localhost:8000/api/grape');
                this.grapes = await response.json();
                console.log(this.grapes)
            } catch (error) {
                console.error('Error fetching grapes:', error);
            }
        },

        async fetchHarmonies() {
            try {
                const response = await fetch('http://localhost:8000/api/harmony');
                this.harmonies = await response.json();
                console.log(this.harmonies)
            } catch (error) {
                console.error('Error fetching harmonies:', error);
            }
        },
        updateWine() {
            let id = this.$route.params.id
            axios.put('http://localhost:8000/api/wines/' + id, this.model.wine)
                .then(res => {
                    console.log(res)
                    alert('Produto atualizado com sucesso!');
                })
                .catch(error => {
                    console.error(error);
                    alert('Erro ao atualizar o produto!');
                });
        },
        getWine() {
            let id = this.$route.params.id
            axios.get('http://localhost:8000/api/wines/' + id).then(res => {
                this.model.wine = res.data
                // this.model.type = res.data.type
                this.model.wine.typeId = res.data.typeId
                // this.model.country = res.data.country
                // this.model.grape = res.data.grape
                // this.model.harmony = res.data.harmony
                //testes
                this.model.wine.type.id = res.data.type.id
                this.model.country.id = res.data.country.id
                this.model.wine.type = res.data.type;
                this.model.wine.country = res.data.country;



            })
        }
    },

    computed: {
        countryOptions() {
            return this.countries;
        },
        typeOptions() {
            return this.types;
        },
        grapeOptions() {
            return this.grapes;
        },
        harmonyOptions() {
            return this.harmonies;
        }
    }
}
</script>

<style lang="scss" scoped></style>