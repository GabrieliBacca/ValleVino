<template>
  <div class="container">
    <img class="img-bg" src="../../assets/img/esqueceu-senha-bg.svg" alt="background Image" />
    <h1>Esqueceu a senha?</h1>
    <h3>
      Não se preocupe, acontece! <br />
      Insira o endereço de e-mail vinculado à sua conta.
    </h3>

    <form @submit.prevent="onSubmit" v-if="!loading">
      <div class="textBox">
        <input v-model="email" id="email" type="text" placeholder="Digite seu email" />
      </div>
      <button type="submit" id="bt">Receber Codigo</button>
    </form>

    <p v-else>Processando solicitação...</p>

    <p class="txtInfo" v-if="!loading">
      Lembrou-se da senha?
      <RouterLink to="/login">Logar Agora!</RouterLink>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { saveAs } from "file-saver";
import store from "../../store";

const buscarIdDoUsuarioPorEmail = async (email) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/buscar-id-usuario-por-email?email=${email}`
    );
    return response.data.userId;
  } catch (error) {
    console.error("Error fetching user ID:", error);
    alert(
      "Erro ao buscar o ID do usuário. Por favor, tente novamente mais tarde."
    );
    return null;
  }
};

export default {
  name: "EsqueceuSenha",
  data() {
    return {
      email: "",
      showVerificationCode: false,
      loading: false,
    };
  },
  methods: {
    async onSubmit() {
      const emailDigitado = this.email; // Supondo que o email digitado está armazenado em this.email
      // Validação do email
      if (!this.validateEmail(this.email)) {
        alert("Por favor, insira um email válido.");
        return;
      }
      this.loading = true;

      const userId = await buscarIdDoUsuarioPorEmail(emailDigitado);
      if (userId) {
        this.$router.push({ path: "/validarcodigo", query: { id: userId } });
      } else {
        alert("Email não encontrado!");
      }
      this.loading = false;

      try {
        this.loading = true;
        // Validação do email
        if (!this.validateEmail(this.email)) {
          alert("Por favor, insira um email válido.");
          this.loading = false;
          return;
        }

        // Verificar se o email existe no banco de dados
        const response = await axios.get("http://localhost:8000/api/user", {
          params: {
            email: this.email,
          },
        });

        if (response.status === 200) {
          // Email encontrado no banco de dados
          // Enviar email com código aleatório
          // const codigoAleatorio = Math.floor(1000 + Math.random() * 9000); // 4 dígitos aleatórios
          // await axios.post('http://localhost:8000/enviar-email', {
          //   destinatario: this.email,
          //   assunto: 'Código de recuperação de senha',
          //   corpo: `Seu código de recuperação de senha é: ${codigoAleatorio}`,
          // });

          // Gerar 4 números aleatórios
          const numerosAleatorios = Array.from({ length: 4 }, () =>
            Math.floor(Math.random() * 10)
          );
          const codigoAleatorio = numerosAleatorios.join(""); // Transforma o array em uma string de 4 dígitos

          // Salvar o código aleatório na localStorage
          localStorage.setItem("codigoGerado", codigoAleatorio);
          console.log(
            "Codigo aleatório salvo na localStorage:",
            codigoAleatorio
          );

          // Enviar email com código aleatório
          await axios.post("http://localhost:8000/enviar-email", {
            destinatario: this.email,
            assunto: "Código de recuperação de senha",
            // corpo: `Seu código de recuperação de senha é: ${codigoAleatorio}`,
            corpo: `<!DOCTYPE html>
  <html>
  <head>
  <style>
  body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #fff;
            padding: 20px;
        }

        .logo {
            text-align: center;
            margin-bottom: 20px;
        }

        .logo img {
            width: 100%;
            max-width: 640px;
            height: auto;
        }

        h1 {
            font-size: 24px;
            margin: 20px 0;
        }

        h2 {
            font-size: 20px;
            margin: 10px 0;
        }

        p {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 10px;
        }

        .assinatura {
            text-align: right;
            font-size: 12px;
        }
  </style>
  </head>
  <body>
  <br>
  <img src="https://storage.mlcdn.com/account_image/843489/859NnR5DEJTLpty8HTixIr4Nw0FDSR8giEJ9b9bF.png" class="logo"  width="640" height="480"> 
<br>
 <h1> Bem vindo a newsletter da Valle Vino!</h1>
 <h2> Somos um grupo de TCC do programa Entra21 de Vue.js</h2>

<h2>Integrantes 👨‍💻</h2>

<h2>Bruno @brunobride </h2>

<h2>Gabrieli Bacca @gabrieli-bacca </h2>

<h2>Rodrigo Luchtenberg @rodrigo-luchtenberg </h2>

<h2>Rodrigo Ulir Braz @rodrigo-ulir-braz </h2>

<h2>Temos o prazer de informar que: </h3>

<h1>Você está participando de um sorteio de um vinho  🥳🍷🤩</h3>
   
  <h3>Obrigado por se cadastrar!</h3>
  <h3>Em breve você receberá as novidades da ValleVino.</h3>
  <img src="https://storage.mlcdn.com/account_image/843489/WwTvhk0l4kWcnvfKmBOnwr1BjPdNSQICYSwFA6Q2.jpg" width="640" height="480">
<h2>Ao assinar nossa newsletter você concorre a esse sorteio, será realizado no dia 29/02 às 17 horas em nosso stand. </h2>
<h2>Quer conhecer um pouco mais sobre nosso projeto?</h2>

<h2>A Valle Vino, conhecida por vender vinhos selecionados via Instagram, decidiu ampliar seu alcance e proporcionar uma experiência mais completa aos clientes.</h2>

<h2>Desafios enfrentados </h2>

<h2>🤔 Alcance Limitado </h2>

<h2>🌐 Dependência exclusiva do Instagram, limitando a exposição. Falta de Personalização </h2>

<h2>🤷‍♂️ Incapacidade de oferecer uma experiência personalizada. Fidelização do cliente </h2>

<h2>🤝 Necessidade de fortalecer a fidelização dos clientes.</h2>


<h2>Nossa solução: criação de um site 💻 </h2>

<h2>O site permitiu à Valle Vino expandir suas vendas além do Instagram, facilitando a interação com o cliente e as vendas online .</h2>

<h2>Experiência Personalizada 🍇 Os clientes podem realizar o Quiz para descobrir o tipo de vinho ideal e conhecer a história por trás de cada produto.</h2>

<h2>Visibilidade Aprimorada 👁️ O site aumenta a presença online da empresa, atraindo novos clientes.</h2>

<h2>Benefícios de ter um site para a Valle Vino 🌈</h2>

<h2>Ampla Exposição 🚀 - Expansão significativa do alcance, alcançando novos públicos. </h2>

<h2>Decisões Informadas 🧐 - Clientes podem tomar decisões embasadas em informações detalhadas. </h2>

<h2>Fidelização dos Clientes 🤝 - Oferta de uma experiência personalizada promove a fidelização.</h2>

<h2>Tecnologias aplicadas no projeto 💻</h2>

<h2>Typescript</h2>
<h2>Node.js</h2>
<h2>Vue.js</h2>
<h2>Prisma</h2>

<h2>Funcionalidades do site 🌐</h2>



<h2>Quiz Personalizado 🤔 - Descubra seu tipo de vinho predileto.</h2>

<h2>Integração com Redes Sociais 📱 - Instagram e Whatsapp integrados para comunicação direta com os clientes.</h2>

<h2>Detalhes dos Vinhos 🍇 - Informações detalhadas sobre origem, características e harmonização. </h2>

<h2>Carrinho de Compras 🛒 - Facilita a compra com seleção rápida e fácil dos produtos. </h2>

<h2>Gerenciamento Simplificado 🎛️ Front-end e API integrada ao banco de dados para total controle sobre produtos. Atualize, cadastre novos produtos, e gerencie estoques de forma intuitiva.</h2>

<h2>🌍 - Planos incluem expansão para novas regiões e captação de novos clientes. Continuidade de Inovações </h2>

<h2>🚀 - Comprometidos com a inovação para aprimorar a experiência do cliente.</h2>
<h2>Agradecemos sua atenção! 🙌 </h2>

<h1>Convidamos todos para visitar nosso stand! 🍇🍷 </h1>




  <p class="assinatura">Equipe ValleVino</p>
  </body>
  </html>`
          });

          // Salvar os números aleatórios no estado compartilhado usando Vuex
          store.dispatch("salvarCodigoAleatorio", codigoAleatorio);
          this.$store.commit("setCodigoAleatorio", codigoAleatorio);
          console.log("numero aleatório salvo:", numerosAleatorios);
          console.log("Codigo aleatório salvo:", codigoAleatorio);
          this.$store.dispatch("setNumeroCriado", this.numeroCriado);

          // Salvar os números em um arquivo local
          const blob = new Blob([codigoAleatorio], {
            type: "text/plain;charset=utf-8",
          });
          saveAs(blob, "codigo.txt");

          // Enviar email com código aleatório
          await axios.post("http://localhost:8000/enviar-email", {
            destinatario: this.email,
            assunto: "Código de recuperação de senha",
            corpo: `Seu código de recuperação de senha é: ${codigoAleatorio}`,
          });

          // Redirecionar para a página de recebimento de código
          // this.$router.push({ name: 'ReceberCodigo', params: { id: userId } });
          this.$router.push({ path: "/validarcodigo", query: { id: userId } });
        } else {
          // Email não encontrado no banco de dados
          alert("Email não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao processar a solicitação:", error);
        alert("Erro ao processar a solicitação");
      } finally {
        this.loading = false;
      }
    },
    validateEmail(email) {
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    },
  },
};
</script>

<style scoped>
body {
  background-color: var(--color-background-light);
}

h1 {
  color: #482817;
  padding-bottom: 20px;
}

/* Estilo geral do container */
.container {
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 0px 0px 20px 0px;
  padding: 50px;
  background: rgba(250, 247, 242, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #f5ebda;
  opacity: 0.9;
}

.textBox {
  width: 390px;
  height: 110px;
  margin: 0 auto;
  padding: 10px;
  background-color: var(--color-background-light);
  color: #482817;
  opacity: 0.65;
  border: #e8ecf4 solid 1px;
  border-radius: 8px;
  z-index: -12;
  align-items: center;
}

#email {
  background-color: #f7f8f9;
  color: #482817;
  font-size: 15px;
  border: #e8ecf4 solid 1px;
  margin: 15px;
  padding: 5px;
  width: 330px;
  height: 56px;
  border-radius: 8px;
  text-align: left;
  font-family: montserrat;
}

/* Estilo do botão de login */
#bt {
  background-color: var(--color-background-light);
  color: var(--color-background);
  font-size: 24px;
  font-family: baskerville;
  padding: 5px;
  width: 330px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  margin-top: 45px;
}

.img-bg {
  width: 100vw;
  height: 100%;
  position: absolute;
  object-fit: cover;
  opacity: 0.5;
  right: 0;
  bottom: 0;
  filter: brightness(0.3);
  z-index: -1;
}

/* responsividade */

@media (max-width: 575px) {

  /* Ajustes para smartphones */
  .container {
    padding: 10px;
  }

  #email {
    width: 90%;
    margin: 15px;
  }

  .textBox {
    width: 80vw;
  }

  #bt {
    width: 70%;
    height: auto;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  /* Ajustes para tablets */

  .container {
    width: 95vw;
  }

  #email {
    max-width: 330px;
    margin: 15px;
  }

  .textBox {
    max-width: 388px;
    height: auto;
  }

  #bt {
    max-width: 330px;
    height: auto;
  }
}

@media (min-width: 768px) {

  /* Ajustes para desktops */
  .container {
    width: 100%;
  }
}
</style>
