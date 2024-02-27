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
            <input type="email" id="emailInput" v-model="newEmail" placeholder="Digite seu email">
            <button type="submit" @click.prevent="handleClick">INSCREVA-SE</button>
            <button @click="realizarSorteio">Sortear Email</button>

          </form>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="pa-1">
          <h2>Contato</h2>
          <p> Blumenau | SC</p>
          <a class="bi bi-envelope" href="mailto:falecom@vallevino.com.br"> falecom@vallevino.com.br</a> <br>
          <a class="bi bi-whatsapp"
            href="https://wa.me/5547988035265?text=Oi!%20Estava%20visitando%20o%20site%20e%20tenho%20uma%20pergunta."
            target="_blank">
            +55 (47) 99123-4567
          </a> <br>

          <a href="https://www.instagram.com/vallevinoblumenau/" target="_blank" class="bi bi-instagram" alt="Instagram">
            Nosso Instagram</a>


        </v-col>
        <v-col cols="12" sm="6" md="4" class="pa-1">
          <h2>Sobre nós</h2>
          <p><a :href="getAboutUsLink()">História sobre nós</a></p>
          <p>
            <router-link to="/Loja">Adquira nossos produtos</router-link>
          </p>
        </v-col>
      </v-row>
    </footer>
  </div>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
import { saveAs } from 'file-saver';
import axios from "axios";



export default {
  name: 'Footer',
  data() {
    return {
      emails: [],
      newEmail: ''
    }
  },
  mounted() {
    // Recupera os emails armazenados no armazenamento local ao iniciar o componente
    const storedEmails = localStorage.getItem('storedEmails');
    if (storedEmails) {
      this.emails = JSON.parse(storedEmails);
    }
  },
  methods: {

    // Enviar email com código aleatório
    sendEmail() {
      const email = this.newEmail
      axios.post("http://localhost:8000/enviar-email", {
        destinatario: email,
        assunto: "Newsletter ValleVino",
        corpo: `Muito obrigado por se cadastrar em nossa Newsletter!<br>Em breve você receberá as novidades!!!<br>Equipe ValleVino`,
      });
    },

    getAboutUsLink() {
      if (this.$route.path !== '/home') {
        return '/home#sobre-nos';
      } else {
        return '#sobre-nos';
      }
    },
    handleClick() {
      // Call both functions here
      this.displaySuccessMessage();
      this.sendEmail();
    },
    displaySuccessMessage() {
      // Obtém o email digitado
      const emailInput = document.getElementById('emailInput');
      const newEmail = emailInput.value;

      // Verifica se o email já está na lista
      if (this.emails.includes(newEmail)) {
        alert('Este email já está cadastrado.');
        console.log(this.emails)
        return;
      }

      // Adiciona o novo email à lista
      this.emails.push(newEmail);
      console.log(this.emails)

      // Armazena os emails no armazenamento local para persistência
      localStorage.setItem('storedEmails', JSON.stringify(this.emails));

      // Salvar em arquivo texto
      const emails = new Blob([this.emails], { type: 'text/plain;charset=utf-8' });
      saveAs(emails, 'emails.txt');

      // Limpa o campo de entrada de email após o cadastro
      emailInput.value = '';

      alert('Cadastro realizado com sucesso!');
    },

    realizarSorteio() {
      // Verifica se há emails cadastrados
      if (this.emails.length === 0) {
        alert('Não há emails cadastrados para realizar o sorteio.');
        return;
      }

      // Gera um índice aleatório entre 0 e o comprimento da lista de emails
      const indiceSorteado = Math.floor(Math.random() * this.emails.length);

      // Obtém o email sorteado com base no índice gerado
      const emailSorteado = this.emails[indiceSorteado];

      // Exibe o email sorteado
      alert(`O email sorteado é: ${emailSorteado}`);
    }
  }
}

</script>
<style>
@media only screen and (max-width: 600px) {
  .footer-container {
    height: auto;
  }

  .tamanho-da-imagem {
    width: 200px;
  }

  .footer-container .pa-1 {
    margin-left: 0;
  }
}

@media (max-width: 600px) {

  .footer input,
  .footer button {
    width: 100%;
    margin-left: 0;
  }
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
  flex-wrap: wrap;

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
  font-size: 20px;
  line-height: 1.5;
  /* Altura da linha do parágrafo */
  margin-bottom: 10px;
  /* Espaçamento abaixo do parágrafo */
  font-family: 'lora';
  font-size: 16px;

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
