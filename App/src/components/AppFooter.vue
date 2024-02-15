<template>
  <div class="footer-container">
<<<<<<< HEAD
    <!-- <img id="fundo" alt="Logo Valle Vino" src="../assets/img/inscreva-se-bg.svg" /> -->
=======
    <img id="fundo" alt="Logo Valle Vino" src="../assets/img/footer-bg.svg" />
>>>>>>> 4de0de663718bd0bfc2eda7c53236e5b80e8ed4f

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
          <p><a href="#sobre-nos">História sobre nós</a></p>

          <P>
            <RouterLink to="/Loja">
              Adquira nossos produtos
            </RouterLink>
          </P>
          <p>Mantenha contato</p>
        </v-col>



      </v-row>
    </footer>
  </div>
</template>


<script>


export default {
  methods: {
    name: 'Footer',

  },
};
</script>
<style>
.footer-container {
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #F5EBDA;
  text-align: center;

}


.footer-container {
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #F5EBDA;
  text-align: center;
  overflow: hidden;
  background-image: url('../assets/img/inscreva-se-bg.svg');
  background-size: 140% 200%;
  background-repeat: no-repeat;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  /* Garante que o preenchimento seja contabilizado dentro da largura total do contêiner */
}

.tamanho-da-imagem {
  width: 300px;
  height: auto;
  margin-top: 0px;
}

.footer h2 {
  color: #482817;
  line-height: 1.5;
  /* Altura da linha do parágrafo */
  margin-bottom: 10px;
}


.footer p,
a {
  color: #9E845C;
  font-size: 18px;
  line-height: 1.5;
  /* Altura da linha do parágrafo */
  margin-bottom: 10px;
  /* Espaçamento abaixo do parágrafo */
}

.footer input {
  width: 200px;
  padding: 5px;
  background-color: white;
  color: #000000;
  border: 1px solid #D1B991;
  padding: 5px 10px;
}

.footer input::placeholder {
  color: #D1B991;
}

.footer input,
.footer button {
  position: relative;
  z-index: 1;
  /* Defina um z-index maior */
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
