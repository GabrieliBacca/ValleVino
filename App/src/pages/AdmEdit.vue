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
                    <select class="form-control" v-model="this.model.wine.typeId">
                        <option v-for="option in typeOptions" :value="option.id"
                            :selected="option.id === this.model.wine.typeId">
                            {{ option.type }}
                        </option>
                    </select>

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
                    <select class="form-control" v-model="model.wine.countryId">
                        <option v-for=" option  in  countryOptions " :value="option.id">{{ option.country }}</option>

                        <!-- <option :value="this.model.wine.countryId.id">
                            {{ this.model.wine.countryId.country }}  </option>-->

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
                        <!-- <option :value="this.model.grapeId.id">
                            {{ this.model.wine.grapeId.grape }}
                        </option> -->
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
                    <select class="form-control" v-model="model.wine.harmonyId">
                        <option v-for=" option  in  harmonyOptions " :value="option.id">{{ option.harmony }}</option>
                        <!-- <option :value="this.model.wine.harmonyId.id">
                            {{ this.model.wine.harmonyId.harmony }}
                        </option> -->
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
    data() {
        return {
            model: {
                wine: {
                    // typeId: null,
                    // countryId: null,
                    // grapeId: null,
                    // harmony: '',

                    // typeId: {
                    //     id: "",
                    //     type: ""
                    // },
                    // countryId: {
                    //     id: "",
                    //     country: ""
                    // },
                    // grapeId: {
                    //     id: "",
                    //     grape: ""
                    // },
                    // harmonyId: {
                    //     id: "",
                    //     harmony: ""
                    // },
                    label: '',
                    price: null,
                    quantity: null,
                    vinicula: '',
                    year: null,
                    alchoolic: null,
                    description: '',
                    img: '',
                },
                typeId: {
                    id: 1,
                    type: "",

                },
                countryId: {
                    id: "",
                    country: "",
                },
                grapeId: {
                    id: "",
                    grape: ""
                },
                harmony: {
                    id: "",
                    harmony: ""
                },

            },
            countries: [
                // { id: 1, country: 'Espanha' },
                // { id: 2, country: 'França' },
                // { id: 3, country: 'Argentina' },
                // { id: 4, country: 'Italia' },
                // { id: 5, country: 'Portugal' },
                // { id: 6, country: 'Uruguai' },
            ],

            types: [
                // { id: 1, type: 'Espumante' },
                // { id: 2, type: 'Champagne' },
                // { id: 3, type: 'Vinho Tinto' },
                // { id: 4, type: 'Vinho Branco' },
            ],

            grapes: [
                // { "id": 1, "grape": "Trepat e Grenache" },
                // { "id": 2, "grape": "Macabeo" },
                // { "id": 3, "grape": "Pinot Noir" },
                // { "id": 4, "grape": "Cabernet Franc" },
                // { "id": 5, "grape": "Cabernet Malbec" },
                // { "id": 6, "grape": "Sangiovese" },
                // { "id": 7, "grape": "Corvina, Rondinella, Croatina, Corvinone" },
                // { "id": 8, "grape": "Alicante Bouschet, Touriga Nacional, Aragonez, Syrah, Trincadeira, Cabernet Sauvignon e Touriga" },
                // { "id": 9, "grape": "Alicante Bouschet (65%), Aragonez (20%) e Touriga Nacional (15%)" },
                // { "id": 10, "grape": "Tannat" },
                // { "id": 11, "grape": "Marselan" },
                // { "id": 12, "grape": "Syrah, Shiraz" },
                // { "id": 13, "grape": "Malbec" },
                // { "id": 14, "grape": "Cabernet Sauvignon, Malbec, Merlot, Petit Verdot" },
                // { "id": 15, "grape": "Chardonnay" },
                // { "id": 16, "grape": "Chardonnay e Garganega" }
            ],

            harmonies: [
                // { "id": 1, "harmony": "Carpaccio de salmão defumado, escalopinho de migno…erinjela gratinada com ricota defumada, Grenachi." },
                // { "id": 2, "harmony": "Canapés variados, risoto de presunto cru, carpacci…de batatas, bolinho de bacalhau, comida japonesa." },
                // { "id": 3, "harmony": "Canapés à base de peixe, frutos do mar, ceviche de…lgadinhos de festa, sanduíches e tortas salgadas." },
                // { "id": 4, "harmony": "Talharim com frutos do mar, camarão empanado, sash…s, risoto de pera com nozes, queijos e embutidos." },
                // { "id": 5, "harmony": "Carnes Vermelhas, Carne Suína, Queijos." },
                // { "id": 6, "harmony": "Carne vermelha e cordeiro." },
                // { "id": 7, "harmony": "Carne vermelha, cordeiro, carne de caça (cervo, veado), aves." },
                // { "id": 8, "harmony": "Carne vermelha, cordeiro, massa, aves." },
                // { "id": 9, "harmony": "Carne vermelha, cordeiro, porco, aves, cogumelos, quejo azul." },
                // { "id": 10, "harmony": "Porco, peixe gordo (salmão, atum, etc), vegetariano, aves." },
                // { "id": 11, "harmony": "Carne vermelha, cordeiro,porco." },
                // { "id": 12, "harmony": "Peixes, frutos do mar e crustáceos em preparações …yosa com carne de porco. Queijos de massa cozida." },
                // { "id": 13, "harmony": "Carne vermelha, queijo e massa." }
            ]
        }
    },
    mounted() {
        console.log(this.$route.params.id)
        this.getWine()
    },
    created() {
        this.fetchCountries();
        this.fetchTypes();
        this.fetchGrapes();
        this.fetchHarmonies();

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
                    console.log(res);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getWine() {
            let id = this.$route.params.id
            axios.get('http://localhost:8000/api/wines/' + id).then(res => {
                this.model.wine = res.data
                this.model.type = res.data.type
                this.model.wine.typeId = res.data.typeId
                this.model.country = res.data.country
                this.model.grape = res.data.grape
                this.model.harmony = res.data.harmony
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