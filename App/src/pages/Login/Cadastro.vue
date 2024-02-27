<template>
  <div class="container">
    <img class="img-bg" src="../../assets/img/inscreva-se-bg.svg" alt="background Image" />

    <h1>
      Olá! <br />
      Registre-se para começar...
    </h1>

    <form @submit.prevent="submit">
      <div class="textBox">
        <input v-model="name" id="user" type="text" placeholder="Nome de usuário" />
        <input v-model="email" id="email" type="text" placeholder="Seu email" />
        <input v-model="password" id="password" type="password" placeholder="Senha" />
        <input v-model="confirmPassword" id="confirmPassword" type="password" placeholder="Confirme sua senha" />

        <input v-model="address" type="text" id="address" placeholder="Endereço" />
        <input v-model="birthday" type="date" id="birthday" />
        <div class="group-gender">
          <label for="masculino">Masculino</label>
          <input v-model="gender" type="radio" id="masculino" name="gender" value="masculino" />

          <label for="feminino">Feminino</label>
          <input v-model="gender" type="radio" id="feminino" name="gender" value="feminino" />
        </div>

        <input v-model="phone" id="phone" type="text" placeholder="Telefone com ddd" />
        <input type="text" id="img" v-model="img" placeholder="Url da Imagem" />
      </div>
      <button type="submit" id="bt-sigin">Registrar</button>
    </form>

    <div class="textWhitSocialMedia">
      <p class="txtInfo">Ou faça login com</p>

      <img id="loginSocialMedia" src="../../assets/img/bt-Facebook.svg" alt="botão login com Facebook" />
      <img id="loginSocialMedia" src="../../assets/img/bt-Google.svg" alt="botão login com Google" />
      <img id="loginSocialMedia" src="../../assets/img/bt-Apple.svg" alt="botão login com Apple" />

      <p class="txtInfo">
        Ja possui uma conta?<RouterLink to="/login"> Logar Agora!</RouterLink>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from 'moment';


export default {
  name: "Cadastro",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      birthday: "",
      gender: "",
      phone: "",
      img: "",
      isAdm: false,
    };
  },
  methods: {
    async submit() {
      try {
        // const birthdayDate = moment(this.birthday, "DD/MM/YYYY");
        const response = await axios.post("http://localhost:8000/api/user/", {
          name: this.name,
          email: this.email,
          password: this.password,
          address: this.address,
          birthday: this.birthday,
          gender: this.gender,
          telephone: this.phone,
          img: this.img,
          isAdm: false,
        });
        console.log(response.data);
        alert("Usuário criado com sucesso!!!");
        // Faça algo com a resposta, se necessário
      } catch (error) {
        console.error(error);
        alert("Erro ao registrar o usuário. Por favor, tente novamente mais tarde.");
        // Trate o erro, se necessário
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--color-background-light);
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

h1 {
  color: #482817;
  padding-bottom: 20px;
  font-size: 20px;
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

/* Estilo da caixa de texto */
.textBox {
  width: 350px;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  background-color: var(--color-background-light);
  color: #482817;
  opacity: 0.65;
  border: #e8ecf4 solid 1px;
  border-radius: 8px;
  z-index: -12;
  align-items: center;
  justify-content: center;
}

/* Estilo do texto informativo */
.txtInfo {
  color: #482817;
  font-size: 24px;
  text-decoration: none;
  margin: 10px 0px 10px 0px;
}

#user,
#email,
#password,
#confirmPassword,
#address,
#birthday,
#gender,
#img,
#phone {
  display: flex;
  background-color: #f7f8f9;
  color: #482817;
  font-size: 15px;
  border: #e8ecf4 solid 1px;
  margin: 15px;
  padding: 5px;
  width: 90%;
  height: 56px;
  border-radius: 8px;
  text-align: left;
  font-family: montserrat;
}

/* Estilo do botão de registro */
#bt-sigin {
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
  height: auto;
  position: absolute;
  object-fit: cover;
  opacity: 0.5;
  right: 0;
  bottom: 0;
  filter: brightness(0.3);
  z-index: -1;
}

.group-gender {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 15px;
}

.group-gender label {
  margin-right: 5px;
  align-items: flex-end;
  padding-left: 35px;
}

input[type="checkbox"],
input[type="radio"] {
  width: 18px;
  height: 18px;
}

select {
  width: 150px;
  height: 30px;
}

/* responsividade */

@media (max-width: 575px) {

  /* Ajustes para smartphones */
  .container {
    padding: 10px;
  }

  #user,
  #email,
  #password,
  #confirmPassword,
  #address,
  #birthday,
  #gender,
  #img,
  #phone {
    width: 90%;
    margin: 15px;
  }

  .textBox {
    width: 80vw;
  }

  #bt-login {
    width: 70%;
    height: auto;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  /* Ajustes para tablets */

  .container {
    width: 95vw;
  }

  #user,
  #email,
  #password,
  #confirmPassword,
  #address,
  #birthday,
  #gender,
  #img,
  #phone {
    max-width: 330px;
    margin: 15px;
  }

  .textBox {
    max-width: 388px;
    height: auto;
  }

  #bt-login {
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
