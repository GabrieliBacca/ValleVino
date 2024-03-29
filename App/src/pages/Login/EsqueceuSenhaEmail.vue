<template>
    <div class="container">
        <img class="img-bg" src="../../assets/img/esqueceu-senha-bg.svg" alt="background Image" />
        <h1>Esqueceu a senha?</h1>
        <h3>
            Não se preocupe, acontece! <br />
            Insira o endereço de e-mail vinculado à sua conta.
        </h3>

        <form @submit.prevent="onSubmit" v-if="!loading">
            <div class="textBox">
                <input v-model="email" id="email" type="text" placeholder="Digite seu email" />
            </div>
            <button type="submit" id="bt">Receber Código</button>
        </form>

        <p v-else>
            Processando solicitação...
        </p>

        <p class="txtInfo" v-if="!loading">
            Lembrou-se da senha?
            <RouterLink to="/login">Logar Agora!</RouterLink>
        </p>
    </div>
</template>

<script>
import axios from "axios";

const buscarIdDoUsuarioPorEmail = async (email) => {
    try {
        const response = await axios.get(`http://localhost:8000/buscar-id-usuario-por-email?email=${email}`);
        return response.data.userId;
    } catch (error) {
        console.error('Error fetching user ID:', error);
        alert('Erro ao buscar o ID do usuário. Por favor, tente novamente mais tarde.');
        return null;
    }
}

export default {
    name: "EsqueceuSenha",
    data() {
        return {
            email: '',
            showVerificationCode: false,
            loading: false,
        };
    },
    methods: {
        async onSubmit() {
            const emailDigitado = this.email; // Supondo que o email digitado está armazenado em this.email
            const userId = await buscarIdDoUsuarioPorEmail(emailDigitado);
            this.$router.push({ path: '/recebercodigo', query: { id: userId } });
            // this.$router.push({ name: 'ReceberCodigo', params: { id: userId } });
            // this.$router.push({ name: 'ReceberCodigo' });

            try {
                this.loading = true;
                // Validação do email
                if (!this.validateEmail(this.email)) {
                    alert('Por favor, insira um email válido.');
                    this.loading = false;
                    return;
                }

                // Verificar se o email existe no banco de dados
                const response = await axios.get('http://localhost:8000/api/user', {
                    params: {
                        email: this.email,
                    },
                });

                if (response.status === 200) {
                    // Email encontrado no banco de dados
                    // Enviar email com código aleatório
                    const codigoAleatorio = Math.floor(1000 + Math.random() * 9000); // 4 dígitos aleatórios
                    await axios.post('http://localhost:8000/enviar-email', {
                        destinatario: this.email,
                        assunto: 'Código de recuperação de senha',
                        corpo: `Seu código de recuperação de senha é: ${codigoAleatorio}`,
                    });

                    // Redirecionar para a página de recebimento de código
                    // this.$router.push({ name: 'ReceberCodigo', params: { id: userId } });
                    this.$router.push({ name: 'ReceberCodigo' });
                } else {
                    // Email não encontrado no banco de dados
                    alert('Email não encontrado!');
                }
            } catch (error) {
                console.error('Erro ao processar a solicitação:', error);
                alert('Erro ao processar a solicitação');
            } finally {
                this.loading = false;
            }
        },
        validateEmail(email) {
            const emailRegex = /\S+@\S+\.\S+/;
            return emailRegex.test(email);
        },
    },
};
</script>

<style scoped>
body {
    background-color: var(--color-background-light);
}

h1 {
    color: #482817;
    padding-bottom: 20px;
}

/* Estilo geral do container */
.container {
    position: relative;
    width: 100%;
    max-width: var(--max-width);
    margin: 0px 0px 20px 0px;
    padding: 50px;
    background: rgba(250, 247, 242, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #f5ebda;
    opacity: 0.9;
}

.textBox {
    width: 390px;
    height: 110px;
    margin: 0 auto;
    padding: 10px;

    /* Cálculo da altura usando a Sequência Fibonacci */
    /* height: calc(89px + 55px + 89px); */

    background-color: var(--color-background-light);
    color: #482817;
    opacity: 0.65;
    border: #e8ecf4 solid 1px;
    border-radius: 8px;
    z-index: -12;
    align-items: center;
}

#email {
    background-color: #f7f8f9;
    color: #482817;
    font-size: 15px;
    border: #e8ecf4 solid 1px;
    margin: 15px;
    padding: 5px;
    width: 330px;
    height: 56px;
    border-radius: 8px;
    text-align: left;
    font-family: montserrat;
}

/* Estilo do botão de login */
#bt {
    background-color: var(--color-background-light);
    color: var(--color-background);
    font-size: 24px;
    font-family: baskerville;
    padding: 5px;
    width: 330px;
    height: 56px;
    border-radius: 8px;
    justify-content: center;
    margin-top: 45px;
}

.img-bg {
    width: 100vw;
    height: 100%;
    position: absolute;
    object-fit: cover;
    opacity: 0.5;
    right: 0;
    bottom: 0;
    filter: brightness(0.3);
    z-index: -1;
}
</style>
