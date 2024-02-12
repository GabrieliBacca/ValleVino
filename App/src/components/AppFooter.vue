<template>
  <div class="footer">
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="4" class="pa-16">
        <v-toolbar color="transparent" flat>
          <v-badge color="#D5F0DB" dot>
            <v-img src="1.png" contain width="30"></v-img>
          </v-badge>

          <v-toolbar-title class="ml-4">
            <span class="green--text"></span><strong>Valle Vino</strong>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pt-0">
          <v-btn v-for="icon in icons" :key="icon" class="mx-1 white--text" icon fab outlined small>
            <v-icon size="20px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="2">
        <v-card-text class="white--text pt-0">
          <h3>About</h3>
        </v-card-text>
        <v-card-text class="grey--text"> Lorem ipsum dolor sit amet.</v-card-text>
        <v-card-text class="grey--text mt-n4"> Lorem ipsum dolor sit amet. </v-card-text>
        <v-card-text class="grey--text mt-n4"> Lorem ipsum dolor sit amet. </v-card-text>
        <v-card-text class="grey--text mt-n4"> Lorem ipsum dolor sit amet. </v-card-text>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="2">
        <v-card-text class="white--text pt-0">
          <h3>Delivery</h3>
        </v-card-text>
        <v-card-text class="grey--text"> Lorem ipsum dolor sit amet. </v-card-text>
        <v-card-text class="grey--text mt-n4"> Lorem ipsum dolor sit amet. </v-card-text>
        <v-card-text class="grey--text mt-n4"> Lorem ipsum dolor sit amet. </v-card-text>
        <v-card-text class="grey--text mt-n4"> Lorem ipsum dolor sit amet. </v-card-text>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-card-text class="white--text pt-0">
          <h3>Contact</h3>
        </v-card-text>
        <v-card-text class="grey--text"> Lorem ipsum dolor sit amet. </v-card-text>
        <v-card-text class="grey--text mt-n4">
          Lorem ipsum dolor sit amet.
        </v-card-text>
        <v-card-text class="grey--text mt-n4"> Lorem ipsum dolor sit amet. </v-card-text>
        <v-card-text class="grey--text mt-n4"> Lorem ipsum dolor sit amet. </v-card-text>
      </v-col>
    </v-row>
    <div class="coluna-esquerda">
      <img class="tamanho-da-imagem" :src="'../src/assets/img/logoValleVinoBlack.png'" alt="logo">    
    </div>

    <div class="coluna-central">
      
    </div>
    <div class="coluna-direita">
      <h2>NEWSLETTER</h2>
      <p>Receba as novidades em primeira mão</p>
      <form action="#">
        <input type="email" placeholder="Digite seu email">
        <button type="submit">INSCREVA-SE</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>


<style>
.tamanho-da-imagem {
  width: 100px; 
  height: auto; /* Isso manterá a proporção original da imagem */
}
.footer {
  background-color: #222222;
  color: #ffffff;
  padding: 20px 40px;
}

.footer form {
  margin-top: 10px;
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