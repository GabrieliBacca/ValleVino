<template>
  <div class="footer-container">
    <footer class="footer">
      <v-row justify="start">
        <v-col class="pa-1">
          <img
            class="tamanho-da-imagem"
            :src="'../src/assets/img/logoValleVinoBlack.png'"
            alt="logo"
          />
        </v-col>
        <v-col cols="12" sm="1" md="4" class="pa-1">
          <h2>NEWSLETTER</h2>
          <p>Receba as novidades em primeira mão</p>
          <form action="#">
            <input
              type="email"
              id="emailInput"
              v-model="newEmail"
              placeholder="Digite seu email"
            />
            <button type="submit" @click.prevent="handleClick">
              INSCREVA-SE
            </button>
            <button @click="realizarSorteio">Sortear Email</button>
          </form>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="pa-1">
          <h2>Contato</h2>
          <p>Blumenau | SC</p>
          <a class="bi bi-envelope" href="mailto:falecom@vallevino.com.br">
            falecom@vallevino.com.br</a
          >
          <br />
          <a
            class="bi bi-whatsapp"
            href="https://wa.me/5547988035265?text=Oi!%20Estava%20visitando%20o%20site%20e%20tenho%20uma%20pergunta."
            target="_blank"
          >
            +55 (47) 99123-4567
          </a>
          <br />

          <a
            href="https://www.instagram.com/vallevinoblumenau/"
            target="_blank"
            class="bi bi-instagram"
            alt="Instagram"
          >
            Nosso Instagram</a
          >
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
import "bootstrap-icons/font/bootstrap-icons.css";
import { saveAs } from "file-saver";
import axios from "axios";

export default {
  name: "Footer",
  data() {
    return {
      emails: [],
      newEmail: "",
    };
  },
  mounted() {
    // Recupera os emails armazenados no armazenamento local ao iniciar o componente
    const storedEmails = localStorage.getItem("storedEmails");
    if (storedEmails) {
      this.emails = JSON.parse(storedEmails);
    }
  },
  methods: {
    // Enviar email com código aleatório
    sendEmail() {
      const email = this.newEmail;
      axios.post("http://localhost:8000/enviar-email", {
        destinatario: email,
        assunto: "Newsletter ValleVino",
        corpo: `Muito obrigado por se cadastrar em nossa Newsletter!<br>Em breve você receberá as novidades!!!<br>Equipe ValleVino`,
        //             corpo: `<!DOCTYPE html>
        //   <html>
        //   <head>
        //   <style>
        //   body {
        //     display: flex
        //     font-family: Arial, sans-serif;
        //     color: #333;
        //     background-color: #fff;
        //   }

        //   .logo {
        //      display: flex;
        //   align-items: center;
        //   margin-right: 20px;
        //   flex-direction: column;

        //   }

        //   h1 {
        //     font-size: 24px;
        //     margin-top: 0;
        //   }

        //   p {
        //     font-size: 16px;
        //     line-height: 1.5;
        //   }

        //   img {
        //     display: block;
        //     margin: 0 auto;

        //   }

        //   .assinatura {
        //     text-align: right;
        //     font-size: 12px;
        //   }
        //   </style>
        //   </head>
        //   <body>
        //   <img src="https://storage.mlcdn.com/account_image/843489/859NnR5DEJTLpty8HTixIr4Nw0FDSR8giEJ9b9bF.png" class="logo"  width="640" height="480"> 
        //   <br> <br>
        //   <br>

        //  <h1> Bem vindo a newsletter da Valle Vino!</h1>
        //  <h2> Somos um grupo de TCC do programa Entra21 de Vue.js</h2>

        // <h2>Integrantes 👨‍💻</h2>

        // <h2>Bruno @brunobride </h2>

        // <h2>Gabrieli Bacca @gabrieli-bacca </h2>

        // <h2>Rodrigo Luchtenberg @rodrigo-luchtenberg </h2>

        // <h2>Rodrigo Ulir Braz @rodrigo-ulir-braz </h2>

        // <h2>Temos o prazer de informar que: </h3>

        // <h1>Você está participando de um sorteio de um vinho  🥳🍷🤩</h3>

        //   <h3>Obrigado por se cadastrar!</h3>
        //   <h3>Em breve você receberá as novidades da ValleVino.</h3>
        //   <img src="https://storage.mlcdn.com/account_image/843489/WwTvhk0l4kWcnvfKmBOnwr1BjPdNSQICYSwFA6Q2.jpg" width="640" height="480">
        // <h2>Ao assinar nossa newsletter você concorre a esse sorteio, será realizado no dia 29/02 às 17 horas em nosso stand. </h2>
        // <h2>Quer conhecer um pouco mais sobre nosso projeto?</h2>

        // <h2>A Valle Vino, conhecida por vender vinhos selecionados via Instagram, decidiu ampliar seu alcance e proporcionar uma experiência mais completa aos clientes.</h2>

        // <h2>Desafios enfrentados </h2>

        // <h2>🤔 Alcance Limitado </h2>

        // <h2>🌐 Dependência exclusiva do Instagram, limitando a exposição. Falta de Personalização </h2>

        // <h2>🤷‍♂️ Incapacidade de oferecer uma experiência personalizada. Fidelização do cliente </h2>

        // <h2>🤝 Necessidade de fortalecer a fidelização dos clientes.</h2>


        // <h2>Nossa solução: criação de um site 💻 </h2>

        // <h2>O site permitiu à Valle Vino expandir suas vendas além do Instagram, facilitando a interação com o cliente e as vendas online .</h2>

        // <h2>Experiência Personalizada 🍇 Os clientes podem realizar o Quiz para descobrir o tipo de vinho ideal e conhecer a história por trás de cada produto.</h2>

        // <h2>Visibilidade Aprimorada 👁️ O site aumenta a presença online da empresa, atraindo novos clientes.</h2>

        // <h2>Benefícios de ter um site para a Valle Vino 🌈</h2>

        // <h2>Ampla Exposição 🚀 - Expansão significativa do alcance, alcançando novos públicos. </h2>

        // <h2>Decisões Informadas 🧐 - Clientes podem tomar decisões embasadas em informações detalhadas. </h2>

        // <h2>Fidelização dos Clientes 🤝 - Oferta de uma experiência personalizada promove a fidelização.</h2>

        // <h2>Tecnologias aplicadas no projeto 💻</h2>

        // <h2>Typescript</h2>
        // <h2>Node.js</h2>
        // <h2>Vue.js</h2>
        // <h2>Prisma</h2>

        // <h2>Funcionalidades do site 🌐</h2>



        // <h2>Quiz Personalizado 🤔 - Descubra seu tipo de vinho predileto.</h2>

        // <h2>Integração com Redes Sociais 📱 - Instagram e Whatsapp integrados para comunicação direta com os clientes.</h2>

        // <h2>Detalhes dos Vinhos 🍇 - Informações detalhadas sobre origem, características e harmonização. </h2>

        // <h2>Carrinho de Compras 🛒 - Facilita a compra com seleção rápida e fácil dos produtos. </h2>

        // <h2>Gerenciamento Simplificado 🎛️ Front-end e API integrada ao banco de dados para total controle sobre produtos. Atualize, cadastre novos produtos, e gerencie estoques de forma intuitiva.</h2>

        // <h2>🌍 - Planos incluem expansão para novas regiões e captação de novos clientes. Continuidade de Inovações </h2>

        // <h2>🚀 - Comprometidos com a inovação para aprimorar a experiência do cliente.</h2>
        // <h2>Agradecemos sua atenção! 🙌 </h2>

        // <h1>Convidamos todos para visitar nosso stand! 🍇🍷 </h1>




        //   <p class="assinatura">Equipe ValleVino</p>
        //   </body>
        //   </html>`
      });
    },

    getAboutUsLink() {
      if (this.$route.path !== "/home") {
        return "/home#sobre-nos";
      } else {
        return "#sobre-nos";
      }
    },
    handleClick() {
      // Call both functions here
      this.displaySuccessMessage();
      this.sendEmail();
    },
    displaySuccessMessage() {
      // Obtém o email digitado
      const emailInput = document.getElementById("emailInput");
      const newEmail = emailInput.value;

      // Verifica se o email já está na lista
      if (this.emails.includes(newEmail)) {
        alert("Este email já está cadastrado.");
        console.log(this.emails);
        return;
      }

      // Adiciona o novo email à lista
      this.emails.push(newEmail);
      console.log(this.emails);

      // Armazena os emails no armazenamento local para persistência
      localStorage.setItem("storedEmails", JSON.stringify(this.emails));

      // Salvar em arquivo texto
      const emails = new Blob([this.emails], {
        type: "text/plain;charset=utf-8",
      });
      saveAs(emails, "emails.txt");

      // Limpa o campo de entrada de email após o cadastro
      emailInput.value = "";

      alert("Cadastro realizado com sucesso!");
    },

    realizarSorteio() {
      // Verifica se há emails cadastrados
      if (this.emails.length === 0) {
        alert("Não há emails cadastrados para realizar o sorteio.");
        return;
      }

      // Gera um índice aleatório entre 0 e o comprimento da lista de emails
      const indiceSorteado = Math.floor(Math.random() * this.emails.length);

      // Obtém o email sorteado com base no índice gerado
      const emailSorteado = this.emails[indiceSorteado];

      // Exibe o email sorteado
      alert(`O email sorteado é: ${emailSorteado}`);
    },
  },
};
</script>
<style>
/* Reset de estilos */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}

/* Estilos para os títulos */
h2 {
  color: #482817;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 10px;
}

/* Estilos para a logo */
.tamanho-da-imagem {
  width: 200px;
  height: auto;
  margin: 0 auto 20px;
}
/* Estilos gerais para o container do footer */
.footer-container {
  position: relative;
  width: 100%;
  height: auto;
  background-color: #f5ebda;
  text-align: center;
  overflow: hidden;
}

/* Estilos para o conteúdo do footer */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 40px;
}

/* Estilos para a coluna de newsletter, contato, sobre */
.footer-container .pa-1 {
  text-align: left;
  flex: 1px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
}

/* Estilos para os parágrafos, links*/
.footer p,
a {
  color: #9e845c;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 10px;
  font-family: "lora";
}

/* Estilos para o campo de email */
.footer input {
  width: 200px;
  background-color: white;
  border: 1px solid #d1b991;
  padding: 5px 10px;
  border-radius: 5px;
}
.footer input::placeholder {
  color: #d1b991;
}

/* Estilos para o botão de inscrição e sorteio */
.footer button {
  background-color: #d1b991;
  color: white;
  padding: 5px 10px;
  margin-left: 10px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #d1b991;
  }
}

/* Estilos para a mídia social */
.social-media {
  display: flex;
  justify-content: flex-end;
}

.social-media a {
  margin-left: 10px;
  color: #9e845c;

  &:hover {
    color: #482817;
  }
}

/* RESPONSIVIDADE */

@media (max-width: 768px) {
  /* Ajusta o layout do footer para telas menores */
  .footer {
    flex-direction: column;
    align-items: flex-start;
  }

  /* Reduz o tamanho da logo */
  .tamanho-da-imagem {
    width: 150px;
  }

  /* Ajusta o espaçamento da coluna */
  .footer-container .pa-1 {
    margin-bottom: 20px;
    flex: 100px;
  }

  /* Ajusta o tamanho do campo de email */
  .footer input {
    width: 90vw;
  }
  .footer p,
  a {
    font-size: 15px;
  }
}

@media (max-width: 576px) {
  /* Ajusta o layout do footer para telas muito pequenas */
  .footer-container .pa-1 {
    justify-content: center;
    margin: 10px;
  }
  .footer {
    /* padding: 10px 20px; */
    justify-content: right;
  }

  .footer input {
    width: 85%;
    margin-bottom: 15px;
  }
  .footer button {
    margin-bottom: 10px;
    width: 132px;
    height: auto;
  }
}
</style>
