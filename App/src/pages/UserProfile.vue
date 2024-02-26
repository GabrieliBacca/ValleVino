<template>
    <div>
        <h2>Perfil do Usuário</h2>
        <div class="user-card">
            <img :src="userData.img" alt="Foto do Usuário" />
            <p>Nome: {{ userData.name }}</p>
            <p>Email: {{ userData.email }}</p>
            <p>Senha: {{ userData.password }}</p>
            <p>Endereço: {{ userData.address }}</p>
            <p>Aniversário: {{ formatBirthday(userData.birthday) }}</p>
            <p>Sexo: {{ userData.gender }}</p>
            <p>Telefone: {{ userData.telephone }}</p>
            <p>É administrador: {{ userData.isAdm ? 'Sim' : 'Não' }}</p>
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
                password: "",
                address: "",
                birthday: "",
                gender: "",
                telephone: "",
                isAdm: false,
                img: "",
            }
        };
    },
    mounted() {
        console.log('Route object:', this.$route);
        const userId = this.$route.params.id;
        console.log('User ID:', userId);
        if (userId) {
            axios.get(`http://localhost:8000/api/user/${userId}`)
                .then(response => {
                    this.userData = response.data;
                })
                .catch(error => {
                    console.error('Erro ao buscar dados do usuário:', error);
                    // Trate o erro de forma adequada, como exibindo uma mensagem para o usuário
                });
        } else {
            console.error('ID do usuário não definido');
            // Você pode lidar com o caso de userId indefinido aqui, como exibir uma mensagem de erro ou redirecionar o usuário
            // Por exemplo:
            // this.$router.push('/erro'); // Redirecionar para uma página de erro
        }
    },
    methods: {
        formatBirthday(birthday) {
            const date = new Date(birthday);
            return date.toLocaleDateString();
        }
    }
};
</script>

<style>
.user-card {
    width: 100%;
    max-width: 450px;
    padding: 25px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    overflow: hidden;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: box-shadow 0.2s ease-in;
    cursor: pointer;
    margin: 0 auto 35px;
    margin-top: 50px;
}

.user-card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.user-card img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.user-card p {
    margin-bottom: 5px;
    font-size: 20px;
    color: #777;
    text-align: center;
    transition: color 0.3s ease;
}

.user-card p:last-child {
    margin-bottom: 0;
}

.user-card p:hover {
    color: #000000;
}

@media (max-width: 768px) {
    .user-card {
        max-width: 90%;
    }
}
</style>
