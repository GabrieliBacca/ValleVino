<template>
    <div>

        <div>
            <header id="header">
                <img src="@/assets/img/logoValleVinoBlack.png" height="50px" alt="Valle Vino" class="logo">
                <div id="carrinho_menu" @click="carrinhoAtivo = true">{{ carrinhoTotal | formataPreco }} | {{ carrinho &&
                    carrinho.length }}</div>
            </header>

            <section class="produtos">
                <div v-for="item in produtos" @click="abrirModal(item.id)" :key="item.id" class="produto">
                    <img :src="item.img" width="150px" height="150px" :alt="item.label" class="produto_img" />
                    <div class="produto_info">
                        <span class="produto_preco">{{ item.price | formataPreco }},00</span>
                        <h2 class="produto_titulo">{{ item.label }}</h2>
                    </div>
                </div>
            </section>
            <!-- Modal Produto -->
            <section id="modal" v-if="produto" @click="fecharModal">
                <div class="modal_container">
                    <div class="modal_img">
                        <img :src="produto.img" :alt="produto.nome">
                    </div>
                    <div class="modal_dados">
                        <button @click="produto = false" class="btn_modal_fechar">X</button>
                        <span class="modal_preco">{{ produto.preco | formataPreco }}</span>
                        <h2 class="modal_titulo">{{ produto.nome }}</h2>
                        <p class="modal_descricao">{{ produto.descricao }}</p>
                        <button v-if="produto.estoque > 0" class="btn_modal_add" @click="adicionarItem">Adicionar
                            Item</button>
                        <button v-else class="btn_modal_add esgotado" disabled>Produto esgotado</button>
                    </div>
                    <div class="reviews">
                        <h2 class="reviews_title">Avaliações</h2>
                        <ul>
                            <li v-for="review in produto.reviews" class="review">
                                <p class="review_descricao">{{ review.descricao }}</p>
                                <p class="review_nome">{{ review.nome }} | <span class="review_estrelas">{{ review.estrelas
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
                    <h2 class="carrinho_title">Carrinho</h2>
                    <div v-if="carrinho.length > 0">
                        <ul class="carrinho_lista">
                            <li v-for="(item, index) in carrinho" class="carrinho_item">
                                <p>{{ item.nome }}</p>
                                <p class="carrinho_preco">{{ item.preco | formataPreco }}</p>
                                <button class="carrinho_remover" @click="removerItem(index)">X</button>
                            </li>
                        </ul>
                        <p class="carrinho_total">Subtotal <b class="carrinho_subtotal">({{ carrinho.length }} {{
                            carrinho.length > 1 ? "items" : "item" }})</b> {{ carrinhoTotal | formataPreco }}</p>
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
    data() {
        return {
            produtos: [],
            carrinho: [],
            carrinhoAtivo: false,
            produto: null,
            carrinhoTotal: 0,
            activeAlert: false,
            msgAlert: '',
        }
    },
    mounted() {
        axios.get('http://localhost:8000/api/wines')
            .then(response => {
                this.produtos = response.data;
            })
            .catch(error => {
                console.error('Error fetching wines:', error);
            });
    }
}
</script>

<style scoped>* {
    color: blue;
}</style>