<template>
    <div>
        <div>
            <br>
            <button @click="filterByType('Tinto')">Tinto</button>
            <button @click="filterByType('Branco')">Branco</button>
            <button @click="filterByType('Champagne')">Champagne</button>
            <button @click="filterByType('Espumante')">Espumante</button>
            <button @click="resetFilter">Mostrar Todos</button>
        </div>
        <div>
            <header id="header">
                <img src="@/assets/img/logoValleVinoBlack.png" height="50px" alt="Valle Vino" class="logo">
                <div id="carrinho_menu" @click="carrinhoAtivo = true">R$ {{ carrinhoTotal() | formataPreco }},00 | {{
                    carrinho &&
                    carrinho.length }}</div>
            </header>

            <section class="produtos">
                <div v-for="item in produtos" @click="abrirModal(item.id)" :key="item.id" class="produto">
                    <img :src="item.img" width="150px" height="150px" :alt="item.label" class="produto_img" />
                    <div class="produto_info">
                        <span class="produto_preco">R$ {{ item.price | formataPreco }},00</span>
                        <h2 class="produto_titulo">{{ item.label }}</h2><br>
                        <span>Uva: {{ item.grape }}</span> <br>
                        <span>Origem: {{ item.country }}</span> <br>
                        <span>Teor Alcólico: {{ item.alchoolic }}%</span> <br>
                        <span class="produto_harmonizacao">Harmonização: {{ item.harmony.harmony }}</span>
                        <br>

                    </div>
                </div>
            </section>
            <!-- Modal Produto -->
            <section id="modal" v-if="produto" @click="fecharModal">
                <div class="modal_container">
                    <div class="modal_img">
                        <img :src="produto.img" :alt="produto.label">
                    </div>
                    <div class="modal_dados">
                        <button @click="produto = false" class="btn_modal_fechar">X</button>
                        <h2 class="modal_titulo">{{ produto.label }}</h2>
                        <p class="modal_descricao">{{ produto.description }}</p>
                        <span class="modal_dados">Teor Alcólico: {{ produto.alchoolic }}%</span> <br>
                        <span>Teor Alcólico: {{ produto.alcohol_content }}</span><br>
                        <span>Uva: {{ grapeFormatted }}</span><br>
                        <span>Origem: {{ countryFormatted }}</span><br>
                        <span>Harmonização: {{ harmonyFormatted }}</span><br>
                        <span class="modal_preco">R$ {{ produto.price | formataPreco }},00</span><br>
                        <button v-if="produto.quantity > 0" class="btn_modal_add" @click="adicionarItem">Adicionar
                            Item</button>
                        <button v-else class="btn_modal_add esgotado" disabled>Produto esgotado</button>
                    </div>
                    <div class="reviews">
                        <h2 class="reviews_title">Avaliações</h2>
                        <ul>
                            <li v-for="review in produto.review" class="review">
                                <p class="review_descricao">{{ review.review }}</p>
                                <p class="review_nome">{{ review.user }} | <span class="review_estrelas">{{ review.estrelas
                                }} estrelas</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Modal Carrinho -->
            <section id="modal_carrinho" :class="{ active: carrinhoAtivo }" @click="fecharCarrinho">
                <div class="carrinho_container">
                    <button class="btn_carrinho_fechar" @click="carrinhoAtivo = false">X</button>
                    <h2 class="carrinho_title">Compras</h2>
                    <div v-if="carrinho.length > 0">
                        <ul class="carrinho_lista">
                            <li v-for="(item, index) in carrinho" class="carrinho_item">
                                <p>{{ item.label }}</p>
                                <p class="carrinho_preco">R$ {{ item.price | formataPreco }},00</p>
                                <button class="carrinho_remover" @click="removerItem(index)">X</button>
                            </li>
                        </ul>
                        <p class="carrinho_total">Subtotal <b class="carrinho_subtotal">({{ carrinho.length }} {{
                            carrinho.length > 1 ? "items" : "item" }})</b>R$ {{ carrinhoTotal() | formataPreco }},00</p>
                        <div class="carrinho_buttons">
                            <button @click="carrinhoAtivo = false" class="btn_carrinho_continuar">Continuar
                                Comprando</button>
                            <button class="btn_carrinho_finalizar">Finalizar Compra</button>
                        </div>
                    </div>
                    <p v-else>O carrinho está vazio!</p>
                </div>
            </section>

            <div class="alert" :class="{ active: activeAlert }">
                <p class="msg_alert">{{ msgAlert }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap'
            },
            {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: './assets/img/carrinho.svg'
            }
        ],
        script: [
            {
                src: './vue.min.js'
            }
        ]
    },
    data() {
        return {
            produtos: [],
            produtosFiltrados: [], // Adicione esta propriedade para armazenar os produtos filtrados
            carrinho: [],
            carrinhoAtivo: false,
            produto: null,
            activeAlert: false,
            msgAlert: ''
        }
    },
    computed: {

        grapeFormatted() {
            const grape = this.produto.grape;
            return grape ? grape.grape : "Grape não encontrado";
        },
        countryFormatted() {
            const country = this.produto.country;
            return country ? country.country : "País não encontrado";
        },
        harmonyFormatted() {
            const harmony = this.produto.harmony;
            return harmony ? harmony.harmony : "Harmonização não encontrada";
        },
    },
    mounted() {
        const script = document.createElement('script');
        script.src = './src/app.js';
        document.body.appendChild(script);

        axios.get('http://localhost:8000/api/wines')
            .then(response => {
                this.produtos = response.data;
            })
            .catch(error => {
                console.error('Error fetching wines:', error);
            });

        axios.get('http://localhost:8000/api/wines')
            .then(response => {
                this.produtos = response.data;
                this.produtosFiltrados = response.data; // Inicialmente, os produtos filtrados são iguais a todos os produtos
            });

        if (!this.$route.query.type) {
            // Se não houver um tipo de vinho específico na query, mostrar todos os vinhos
            this.showAllWines();
        } else {
            // Caso contrário, aplicar a lógica de filtragem com base no tipo de vinho
            this.filterByType(this.$route.query.type);
        }


    },
    methods: {
        abrirModal(productId) {
            this.produto = this.produtos.find(product => product.id === productId);
        },
        formataPreco(preco) {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco);
        },

        getProdutos() {
            fetch("http://localhost:8000/api/wines")
                .then(res => res.json())
                .then(res => {
                    this.produtos = res
                })
        },
        getProduto(id) {
            fetch(`http://localhost:8000/api/wines/${id}`)
                .then(res => res.json())
                .then(res => {
                    console.log(res); // Add this line to log the response object
                    this.produto = res
                })
        },
        abrirModal(id) {
            this.getProduto(id)
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        fecharModal({ target, currentTarget }) {
            if (target == currentTarget) this.produto = false
            history.pushState(null, null, '/')
        },
        fecharCarrinho({ target, currentTarget }) {
            if (target == currentTarget) this.carrinhoAtivo = false
        },
        adicionarItem() {
            this.produto.quantity--
            const { id, label, price } = this.produto
            this.carrinho.push({ id, label, price })
            this.alert(`${label} adicionado ao carrinho!`)
        },
        removerItem(index) {
            this.carrinho.splice(index, 1)
        },
        checkLocalStorage() {
            if (window.localStorage.carrinho) {
                this.carrinho = JSON.parse(window.localStorage.carrinho)
            }
        },
        checkEstoque() {
            const items = this.carrinho.filter(({ id }) => id === this.produto.id)
            this.produto.quantity -= items.length
        },
        alert(mensagem) {
            this.msgAlert = mensagem
            this.activeAlert = true
            setTimeout(() => {
                this.activeAlert = false
            }, 500)
        },
        carrinhoTotal() {
            const total = this.carrinho.reduce((acc, produto) => {
                const price = parseFloat(produto.price);
                return acc + price;
            }, 0);
            const totalFormatado = total.toFixed(2);
            return totalFormatado;
        },

        router() {
            const hash = document.location.hash
            if (hash) {
                this.getProduto(hash.replace("#", ""))
            }
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
        methods: {
            filterByType(wineType) {
                // Chame a função filterByType aqui com o tipo de vinho recebido
            }
        },

        showAllWines() {
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
        methods: {
            filterByType(wineType) {
                // Chame a função filterByType aqui com o tipo de vinho recebido
            }
        }

    }

}

</script>

<style scoped>
body,
h1,
h2,
ul,
li,
p {
    padding: 0;
    margin: 0;
}

ul {
    list-style: none;
}

* {
    box-sizing: border-box;
}

body {
    background: linear-gradient(to right, #1a1a1a 30%, #fff 30%);
    font-family: 'Spinnaker', 'Noto Serif', sans-serif;
}

#app {
    padding: 0 80px;
    width: 96%;
    margin: 0 auto;
}

/*HEADER*/
#header {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    margin: 0 auto;
    width: 90%;
}

.logo {
    width: 120px;
}

#carrinho_menu {
    display: flex;
    align-items: center;
    cursor: pointer;
}

#carrinho_menu::after {
    content: "";
    display: inline-block;
    background: url("../assets/img/ico-carrinho.svg") no-repeat center center;
    width: 25px;
    height: 25px;
    margin-left: 10px;
}

/* Lista Produtos */
.produtos {
    max-width: 90%;
    margin: 100px auto 0 auto;
}

.produto {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    background: #fff;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.produto_img {
    max-width: 300px;
    margin-right: 40px;
}

.produto_titulo {
    font-size: 3rem;
    line-height: 1;
}

.produto_preco {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
}

/*MODAL*/
#modal::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
}

#modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 80px;
}

.modal_container {
    position: relative;
    z-index: 1;
    background: linear-gradient(to right, transparent 250px, white 250px);
    display: grid;
    align-items: end;
    grid-gap: 50px;
    padding: 30px 50px 50px 0;
    animation: fadeIn .3s forwards;
}

@keyframes fadeIn {
    from {
        transform: translateY(-95px);
    }

    to {
        transform: translateY(0, 0, 0);
    }
}

.btn_modal_fechar,
.btn_carrinho_fechar {
    border-radius: 50%;
    border: 2px solid #000;
    width: 40px;
    height: 40px;
    position: absolute;
    top: -20px;
    right: -20px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bolder;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.2);
    outline: none;
    background: #000;
    color: #fff;
}

.btn_modal_fechar:active,
.btn_carrinho_fechar:active {
    background: rgba(0, 0, 0, 0.8);
    font-size: 1.4rem;
}

.modal_preco {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.5);
}

.modal_img {
    grid-column: 1;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.2);
}

.modal_img img {
    max-width: 300px;
    display: block;
}

.modal_dados {
    grid-column: 2;
    max-width: 600px;
}

.modal_titulo {
    font-size: 3rem;
}

.btn_modal_add {
    margin-top: 80px;
    background: #000;
    cursor: pointer;
    color: #fff;
    border: none;
    font-size: 1rem;
    padding: 10px 25px;
    outline: none;
}

.btn_modal_add.esgotado {
    background: rgba(0, 0, 0, 0.8);
}

.btn_modal_add:active {
    background: rgba(0, 0, 0, 0.8);
}

.reviews {
    grid-column: 2;
}

.review {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
}

.reviews_title {
    padding-bottom: 10px;
    font-size: 2rem;
}

.review_descricao {
    color: rgba(0, 0, 0, 0.7);
    padding-top: 20px;
}

.review_nome {
    font-weight: bold;
}

.alert {
    position: fixed;
    top: 20px;
    left: 0;
    z-index: 2;
    width: 100%;
    text-align: center;
    display: none;
}

.alert.active {
    display: block;
    animation: fadeInDown .3s forwards;
}

@keyframes fadeInDown {
    from {
        transform: translate3d(0, -30px, 0);
        opacity: 0;
    }

    to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

.msg_alert {
    background: #fff;
    display: inline-block;
    padding: 20px 40px;
    border: 2px solid #000;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.2);
}

/*CARRINHO*/
#modal_carrinho::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
}

#modal_carrinho {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    display: none;
}

#modal_carrinho.active {
    display: block;
}

.carrinho_container {
    position: relative;
    margin: 80px auto;
    background: #fff;
    padding: 40px;
    max-width: 80%;
    min-width: 400px;
    animation: fadeInDown .3s forwards;
}

.carrinho_item {
    display: grid;
    grid-template-columns: 1fr 1fr 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 0;
}

.carrinho_title {
    padding-bottom: 20px;
    border-bottom: 1px solid #000;
}

.carrinho_remover {
    border: none;
    font-size: 1.2rem;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: red;
}

.carrinho_buttons {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
}

.carrinho_total {
    text-align: end;
    padding: 30px 15px 20px 0;
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
    border-bottom: 1px solid #000;
}

.carrinho_subtotal {
    font-size: 1rem;
}

.btn_carrinho_continuar,
.btn_carrinho_finalizar {
    background: #000;
    cursor: pointer;
    color: #fff;
    border: none;
    font-size: 1rem;
    padding: 10px 25px;
    outline: none;
}

.btn_carrinho_continuar:active,
.btn_carrinho_finalizar:active {
    background: rgba(0, 0, 0, 0.8);
}

/*MEDIA*/

@media screen and (max-width: 940px) {
    #app {
        padding: 0 10px;
    }

    .produtos {
        margin-top: 40px;
    }

    .produto_titulo {
        font-size: 1.8rem;
    }

    .produto_preco {
        font-size: 1rem;
    }

    .modal_container {
        grid-gap: 20px;
        padding: 10px 20px;
        background: #fff;
    }

    .modal_titulo {
        font-size: 1.8rem;
    }

    .reviews_title {
        font-size: 1.4rem;
    }
}

@media screen and (max-width: 724px) {
    .modal_container {
        padding: 20px 0;
    }

    .modal_img {
        grid-row: 2;
    }

    .modal_dados,
    .reviews {
        grid-column: 1;
        padding: 0 10px;
    }

    .btn_modal_add {
        margin-top: 20px;
    }

    .modal_img img {
        width: 100%;
        max-width: initial;
    }

    .carrinho_container {
        padding: 20px;
    }

    .carrinho_total {
        font-size: 1.2rem;
        padding: 15px 15px 10px 0;
    }

    .btn_carrinho_continuar,
    .btn_carrinho_finalizar {
        padding: 10px 15px;
        font-size: .8rem;
    }
}

@media screen and (max-width: 670px) {
    .produto {
        flex-direction: column;
        align-items: flex-start;
        max-width: 300px;
        margin: 30px auto;
    }

    .produto_info {
        margin: 0 auto;
        padding: 10px 0;
        text-align: center;
    }

    .produto_titulo {
        margin-top: 10px;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    body {
        margin: 0;
    }

    button {
        font: inherit;
        cursor: pointer;
        background-color: rgba(66, 185, 131, 1);
        color: white;
        border: 1px solid rgba(66, 185, 131, 1);
        padding: 0.5rem 1.5rem;
        border-radius: 30px;
        margin-bottom: 20px;
    }

    button:hover,
    button:active {
        background-color: #82dcb1;
        border-color: #82dcb1;
    }
}
</style>