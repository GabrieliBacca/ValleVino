<template>
  <div class="footer-container">
    <footer class="footer">

      <v-row justify="start">

        <v-col class="pa-1">
          <img class="tamanho-da-imagem" :src="'../src/assets/img/logoValleVinoBlack.png'" alt="logo" />
        </v-col>

        <v-col cols="12" sm="1" md="4" class="pa-1">
          <h2>NEWSLETTER</h2>
          <p>Receba as novidades em primeira mão</p>
          <form action="#">
            <input type="email" placeholder="Digite seu email">
            <button type="submit">INSCREVA-SE</button>
          </form>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="pa-1">
          <h2>Contato</h2>
          <p>Blumenau | SC</p>
          <p>falecom@vallevino.com.br</p>
          <p>+55 (47) 99123-4567</p>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="pa-1">
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
  width: 300px;
  height: auto;
  margin-top: 20px;
  margin-left: 0;
  margin-right: 20px;
  /* Ajuste o valor conforme necessário */
}

.footer h2 {
  color: #482817;

  line-height: 1.5;
  /* Altura da linha do parágrafo */
  margin-bottom: 10px;
  /* Espaçamento abaixo do parágrafo */
}


.footer p {
  color: #9E845C;

  font-size: 18px;
  /* Tamanho da fonte do parágrafo */
  line-height: 1.5;
  /* Altura da linha do parágrafo */
  margin-bottom: 10px;
  /* Espaçamento abaixo do parágrafo */
}


.footer-container {
  display: flex;
  justify-content: space-between;
  /* Distribui os elementos ao longo do espaço disponível */
  align-items: center;
  /* Alinha os itens verticalmente no centro */
  margin-top: 20px;
  width: 100%;
  height: 300px;
  background-color: #F5EBDA;
  text-align: center;
}

.footer {
  width: 100%;
}

.footer input {
  width: 200px;
  padding: 5px;
  background-color: white;
  color: #D1B991;
  border: 1px solid #D1B991;
  padding: 5px 10px;
}

.footer input::placeholder {
  color: #D1B991;
}

.footer button {
  background-color: #D1B991;
  color: white;
  border: 1px solid #dddddd;
  padding: 5px 10px;
  margin-left: 10px;
}

.footer button:hover {
  background-color: white;
  color: #D1B991;
}


.footer-container .pa-1 {
  text-align: left;
  flex: 1px;
  margin-left: 20px;
}
</style>
