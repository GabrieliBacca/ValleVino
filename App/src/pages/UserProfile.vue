<template>
    <div>
        <h2>Perfil do Usuário</h2>
        <div>
            <img :src="userData.img" alt="Foto do Usuário" />
            <p>Nome: {{ userData.name }}</p>
            <p>Email: {{ userData.email }}</p>
            <p>Endereço: {{ userData.address }}</p>
            <p>Aniversário: {{ formatBirthday(userData.birthday) }}</p>
            <p>Sexo: {{ userData.gender }}</p>
            <p>Telefone: {{ userData.telephone }}</p>
            <p>É administrador: {{ userData.isAdm ? 'Yes' : 'No' }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            userData: {
                id: "",
                name: "",
                email: "",
                address: "",
                birthday: "",
                gender: "",
                telephone: "",
                isAdm: false,
                img: "",

                // ... other properties
            }
        };
    },
    mounted() {
        console.log('Route object:', this.$route);
        const userId = this.$route.params.id; // Access the route parameter using this.$route.params.id
        console.log('User ID:', userId);
        if (userId) {
            axios.get(`http://localhost:8000/api/user/${userId}`)
                .then(response => {
                    this.userData = response.data;
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        } else {
            console.error('User ID is undefined');
            // You can handle the undefined userId case here, such as displaying an error message or redirecting the user
            // For example:
            // this.$router.push('/error'); // Redirect to an error page

        }
    },
    methods: {
        formatBirthday(birthday) {
            // Format the birthday using JavaScript Date methods
            const date = new Date(birthday);
            return date.toLocaleDateString();
        }
    }
};
</script>

<style>
/* Add your styles here */
</style>