<!-- WineForm.vue -->
<!-- src/App.vue -->
<template>
    <div id="app">
        <form @submit.prevent="submitForm">
            <label for="type">Tipo:</label>
            <input v-model="wine.type" type="text" required />

            <label for="country">País Origem:</label>
            <input v-model="wine.country" type="text" required />

            <label for="label">Rótulo:</label>
            <input v-model="wine.label" type="text" required />

            <label for="grape">Uva:</label>
            <input v-model="wine.grape" type="text" required />

            <label for="price">Valor R$:</label>
            <input v-model="wine.price" type="number" required />

            <label for="quantity">Quantidade disponível:</label>
            <input v-model="wine.quantity" type="number" required />

            <button type="submit">Cadastrar Vinho</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            wine: {
                type: '',
                country: '',
                label: '',
                grape: '',
                price: 0,
                quantity: 0,
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await fetch('http://localhost:3000/api/wines', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.wine), // Corrigido de this.form para this.wine
                });

                const data = await response.json();
                console.log('Wine created:', data);
                alert('Vinho criado com sucesso!');
                // Pode adicionar um feedback visual ou redirecionar o usuário após o cadastro.
            } catch (error) {
                console.error('Error creating wine:', error);
            }
        },
    },
};
</script>

<style>
/* Adicione estilos conforme necessário */
</style>
