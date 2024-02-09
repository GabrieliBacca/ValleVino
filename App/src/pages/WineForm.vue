<template>
    <div id="app">
        <form @submit.prevent="submitForm">
            <label for="type">Tipo:</label>
            <select v-model="wine.typeId" placeholder="Selecione" required class="form-select">
                <option v-for=" option  in  typeOptions " :value="option.id">{{ option.type }}</option>
            </select>


            <label for="country">País Origem:</label>
            <select v-model="wine.countryId" required class="form-select">
                <option v-for=" option  in  countryOptions " :value="option.id">{{ option.country }}</option>
            </select>
            <br>
            <label for="label">Rótulo:</label>
            <input v-model="wine.label" type="text" class="form" required /><br>
            <br>
            <label for="grape">Uva:</label>
            <select v-model="wine.grapeId" required class="form-select">
                <option v-for=" option  in  grapeOptions " :value="option.id">{{ option.grape }}</option>
            </select>
            <br>br

            <label for="price">Valor R$:</label>
            <input v-model="wine.price" type="number" class="form" required />

            <label for="quantity">Quantidade disponível:</label>
            <input v-model="wine.quantity" type="number" class="form" required />

            <label for="vinicula">Vinícola:</label>
            <input v-model="wine.vinicula" type="text" class="form" required />

            <label for="year">Ano:</label>
            <input v-model="wine.year" type="number" class="form" required />
            <br><br>
            <label for="alcoholic">Teor Alcoólico:</label>
            <input v-model="wine.alcoholic" type="number" step="0.01" class="form" required />

            <label for="description">Descrição:</label>
            <input v-model="wine.description" type="text" class="form" required />

            <label for="img">Imagem URL:</label>
            <input v-model="wine.img" type="text" class="form" required />
            <br>
            <br>
            <button type="submit">Cadastrar Vinho</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            wine: {
                typeId: null,
                countryId: null,
                label: '',
                grapeId: null,
                price: 0,
                quantity: 0,
                vinicula: '',
                year: 0,
                alcoholic: 0,
                description: '',
                img: '',
            },
            countries: [
                { id: 1, country: 'Espanha' },
                { id: 2, country: 'França' },
                { id: 3, country: 'Argentina' },
                { id: 4, country: 'Italia' },
                { id: 5, country: 'Portugal' },
                { id: 6, country: 'Uruguai' },
            ],

            types: [
                { id: 1, type: 'Espumante' },
                { id: 2, type: 'Champagne' },
                { id: 3, type: 'Vinho Tinto' },
                { id: 4, type: 'Vinho Branco' },
            ],

            grapes: [
                { "id": 1, "grape": "Trepat e Grenache" },
                { "id": 2, "grape": "Macabeo" },
                { "id": 3, "grape": "Pinot Noir" },
                { "id": 4, "grape": "Cabernet Franc" },
                { "id": 5, "grape": "Cabernet Malbec" },
                { "id": 6, "grape": "Sangiovese" },
                { "id": 7, "grape": "Corvina, Rondinella, Croatina, Corvinone" },
                { "id": 8, "grape": "Alicante Bouschet, Touriga Nacional, Aragonez, Syrah, Trincadeira, Cabernet Sauvignon e Touriga" },
                { "id": 9, "grape": "Alicante Bouschet (65%), Aragonez (20%) e Touriga Nacional (15%)" },
                { "id": 10, "grape": "Tannat" },
                { "id": 11, "grape": "Marselan" },
                { "id": 12, "grape": "Syrah, Shiraz" },
                { "id": 13, "grape": "Malbec" },
                { "id": 14, "grape": "Cabernet Sauvignon, Malbec, Merlot, Petit Verdot" },
                { "id": 15, "grape": "Chardonnay" },
                { "id": 16, "grape": "Chardonnay e Garganega" }
            ],
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await fetch('http://localhost:8000/api/wines', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.wine),
                });

                const data = await response.json();
                console.log('Wine created:', data);
                alert('Vinho criado com sucesso!');
                // Pode adicionar um feedback visual ou redirecionar o usuário após o cadastro.
            } catch (error) {
                console.error('Error creating wine:', error);
            }
        },

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
    },
    created() {
        this.fetchCountries();// Call fetchCountries when the component is created
        this.fetchTypes();
        this.fetchGrapes();
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
        }
    }

};

</script>

<style>
.form {
    color: black;
    font-family: montserrat;
    margin: 0;
    padding: 0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
</style>