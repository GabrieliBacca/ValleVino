<!-- É a estrutura do quiz -->
<template>
    <div>
        <div v-if="!showResult">
            <div v-if="currentQuestionIndex < questions.length">
                <div class="card">
                    <h3>{{ questions[currentQuestionIndex].question }}</h3>
                    <button @click="selectAnswer('a')">A) {{ questions[currentQuestionIndex].options.a }}</button>
                    <button @click="selectAnswer('b')">B) {{ questions[currentQuestionIndex].options.b }}</button>
                </div>
            </div>
            <div v-else>
                <button @click="submitAnswers">Ver Resultado</button>
            </div>
        </div>

        <div v-if="showResult">
            <div class="result-card">
                <h3>Resultados do Quiz:</h3>
                <p>{{ result }}</p>
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
                this.result = "Você combina com vinhos brancos ou rosés! Seu paladar leve e sua preferência por pratos frescos tornam esses vinhos ideais para você. Experimente um Chardonnay ou um Pinot Grigio para complementar suas refeições.";
            } else if (totalB > totalA) {
                this.result = "Você é um fã de vinhos tintos! Sua preferência por pratos mais intensos e ricos em sabores combina bem com vinhos encorpados. Experimente um Malbec ou um Cabernet Sauvignon para realçar sua experiência gastronômica.";
            } else {
                this.result = "Você tem preferências equilibradas!";
            }

            this.showResult = true;

        },

        // Função para redefinir o quiz  
        restartQuiz() {
            this.currentQuestionIndex = 0;
            this.answers = [];
            this.showResult = false;
            this.result = "";
        },
        buyProducts() {
            // Lógica para redirecionar para a página de compra ou outra ação
            console.log("Redirecionar para a página de compra...");
        },
    },
};
</script>

<style scoped>
.card {
    background-color: black;
    padding: 20px;
    border-radius: 8px;
    margin: 20px;
    color: #f5f5f5;
}

.result-card {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    margin: 20px;
    color: black;
}
</style>








