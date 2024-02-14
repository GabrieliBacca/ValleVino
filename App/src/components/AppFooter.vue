<template>
  <div class="footer-container">
    <footer class="footer">
      <v-row>

        <img class="tamanho-da-imagem" :src="'../src/assets/img/logoValleVinoBlack.png'" alt="logo">
        <v-col cols="12" xs="12" sm="6" md="4" class="pa-16">

          <h2>NEWSLETTER</h2>
          <p>Receba as novidades em primeira mão</p>
          <form action="#">
            <input type="email" placeholder="Digite seu email">
            <button type="submit">INSCREVA-SE</button>
          </form>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="pa-16">
          <h2>Contato</h2>
          <p>Blumenau | SC</p>
          <p>falecom@vallevino.com.br</p>
          <p>+55 (47) 99123-4567</p>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="pa-16">
          <h2>Sobre nós</h2>
          <p>História sobre nós</p>
          <p>Adquira nossos produtos</p>
          <p>Mantenha contato</p>
        </v-col>
      </v-row>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style>
.tamanho-da-imagem {

  height: auto;
  margin: 0;
  padding: 0;
  /* Remover margens para alinhar no canto superior esquerdo */
}

.footer-container {
  width: 100%;
  background-color: var(--color-background-light);

}


.footer {
  width: 100%;
}

.footer input {
  width: 200px;
  padding: 5px;
  border: 1px solid #dddddd;
}

.footer button {
  background-color: #dddddd;
  color: #222222;
  border: 1px solid #dddddd;
  padding: 5px 10px;
  margin-left: 10px;
}
</style>