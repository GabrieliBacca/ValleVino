<template>
    <Loja5 @wineTypeSelected="filterByType" />
    <div class="container">
        <img class="fundo" id="fundo" src="../assets/img/fotoquizfundo.jfif" alt="" width="420" height="340">
        <div v-if="!showResult">
            <div v-if="currentQuestionIndex < questions.length">
                <div class="card">
                    <span class="question-text">Tem dúvida sobre qual bebida combina com você?</span>
                    <span>Faça o nosso Quiz!</span>
                    <br>
                    <h3>{{ questions[currentQuestionIndex].question }}</h3>
                    <button @click="selectAnswer('a')">A) {{ questions[currentQuestionIndex].options.a }}</button>
                    <button @click="selectAnswer('b')">B) {{ questions[currentQuestionIndex].options.b }}</button>

                </div>
            </div>
            <div v-else>
                {{ submitAnswers() }}
            </div>
        </div>

        <div v-if="showResult">
            <div class="result-card">
                <h3>Resultados do Quiz:</h3>
                <Span class="result-text">{{ result }}</Span>
                <br>
                <button @click="restartQuiz">Refazer o Teste</button>
                <button @click="buyProducts">Comprar Produtos</button>
            </div>
        </div>
    </div>
</template>

<!-- Aqui começa o script do Quiz  -->
<script>
export default {
    data() {
        return {
            questions: [
                {
                    question: "Como você prefere suas bebidas?",
                    options: { a: "Leves e refrescantes", b: "Encorpadas e intensas" },
                },
                {
                    question: "Qual é o seu prato favorito?",
                    options: { a: "Frutos do mar ou saladas", b: "Carnes grelhadas ou pratos ricos em sabores" },
                },
                {


                    question: "Em qual estação do ano você se sente mais à vontade?",
                    options: { a: "Primavera ou verão", b: "Outono ou inverno" },
                },
                {


                    question: "Qual é a sua preferência de sabor?",
                    options: { a: "Frutas frescas e suaves", b: "Frutas integrais e coloridas" },
                },
                {
                    question: "Quando você imagina uma noite ideal, o que vem à mente?",
                    options: { a: "Um encontro casual com amigos", b: "Uma festa de aniversário" },
                },
                // Adicione mais perguntas conforme necessário
            ],
            currentQuestionIndex: 0,
            answers: [],
            showResult: false,
            result: "",
        };
    },
    // mounted() {
    //     this.submitAnswers();
    // },

    methods: {
        // Aqui é a função de resposta para guardar a opção selecionada
        selectAnswer(answer) {
            this.answers.push(answer);
            this.currentQuestionIndex += 1;
        },
        // Lógica para calcular resultados  
        submitAnswers() {
            const totalA = this.answers.filter((answer) => answer === "a").length;
            const totalB = this.answers.filter((answer) => answer === "b").length;

            if (totalA > totalB) {
                this.result = "Você combina com vinhos brancos ou rosés! Seu paladar leve e sua preferência por pratos frescos tornam esses vinhos ideais para você. Experimente um Chardonnay para complementar suas refeições.";
            } else if (totalB > totalA) {
                this.result = "Você é um fã de vinhos tintos! Sua preferência por pratos mais intensos e ricos em sabores combina bem com vinhos encorpados. Experimente um Malbec ou um Cabernet Sauvignon para realçar sua experiência gastronômica.";
            } else {
                this.result = "Você tem preferências equilibradas!";
            }

            this.showResult = true;

        },
        buyProducts() {
            const totalA = this.answers.filter((answer) => answer === "a").length;
            const totalB = this.answers.filter((answer) => answer === "b").length;

            let wineType = '';
            if (totalA > totalB) {
                wineType = 'Branco';
            } else if (totalB > totalA) {
                wineType = 'Tinto';
            } else {
                wineType = 'resetFilter';
            }


            this.$router.push({ path: '/loja', query: { type: wineType } }).then(() => {
                this.FilterbyType(wineType);
            });

        },
        // Função para redefinir o quiz  
        restartQuiz() {
            this.currentQuestionIndex = 0;
            this.answers = [];
            this.showResult = false;
            this.result = "";
        },

        filterByType(type) {
            fetch('http://localhost:8000/api/wines')
                .then(response => response.json())
                .then(data => {
                    // Filter for the specified type
                    const filteredData = data.filter(item => item.type === type);

                    // Assign the filtered data to this.produtosFiltrados
                    this.produtos = filteredData;
                })
                .catch(error => {
                    console.error('Erro ao buscar dados do servidor:', error);
                });

        },
        resetFilter() {
            fetch('http://localhost:8000/api/wines')
                .then(response => response.json())
                .then(data => {
                    // Assign the filtered data to this.produtosFiltrados
                    this.produtos = data;
                })
                .catch(error => {
                    console.error('Erro ao buscar dados do servidor:', error);
                });
        },

    },
};
</script>

<style scoped>
#fundo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 40vh;
    object-fit: cover;
    opacity: 0.8;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: var(--max-width);
    margin: 0;
    padding: 0;
    background: rgba(250, 247, 242, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    /* background-color: #f5ebda; */

}

.card {
    background-color: --color-background-card;
    border-color: transparent;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0px 0px 40px;
    color: --color-background-dark;
    color: #a01616;
    font-family: "Libre Baskerville";
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    line-height: 40px;
    background-color: transparent;
    align-items: center;
}

.question-text {
    font-size: 36px;
    color: darkred;
    font-family: lora;
    font-style: italic;
    font-weight: bold;
}

.result-text {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20 px;
}

.result-card {
    position: relative;
    background-color: --color-background-card;
    border-color: transparent;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0px 0px 40px;
    color: --color-background-dark;
    color: #a01616;
    font-family: "Libre Baskerville";
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    line-height: 40px;
    background-color: transparent;
    align-items: center;
}

.container {
    display: flex;
    /* or grid */
    align-items: center;
}

.image {
    margin-right: 20px;
    /* Adjust margin as needed */
}
</style>








