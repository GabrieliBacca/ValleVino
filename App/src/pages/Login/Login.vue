<template>
  <div class="container">
    <img
      class="img-bg"
      src="../../assets/img/login-bg.svg"
      alt="background Image"
    />
    <div v-for="(usuario, i) in usuarios" :key="i">
      <p>{{ usuario.nome }}</p>
    </div>

    <h1>
      Bem-vindo de volta!<br />
      Legal te ver por aqui!
    </h1>

    <form @submit.prevent="login">
      <div class="textBox">
        <input
          v-model="email"
          id="email"
          type="text"
          placeholder="Digite seu email"
        />
        <input
          v-model="password"
          id="password"
          type="password"
          placeholder="Digite sua senha"
        />
        <!-- //! colocar o icone de olho no text para revelar  a senha -->
        <p class="txtInfo-senha">
          <RouterLink to="/esqueceusenha">Esqueceu a senha?</RouterLink>
        </p>
      </div>

      <button type="submit" id="bt-login">Login</button>
    </form>

    <div class="textWhitSocialMedia">
      <p class="txtInfo">Ou faça login com</p>

      <img
        id="loginSocialMedia"
        src="../../assets/img/bt-Facebook.svg"
        alt="botão login com Facebook"
        @click="loginWithFacebook"
      />
      <img
        id="loginSocialMedia"
        src="../../assets/img/bt-Google.svg"
        alt="botão login com Google"
      />
      <img
        id="loginSocialMedia"
        src="../../assets/img/bt-Apple.svg"
        alt="botão login com Apple"
      />

      <p class="txtInfo">
        Não tem uma conta?
        <RouterLink to="/cadastro">Registre-se!</RouterLink>
      </p>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
import { onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  setup() {
    const usuarios = ref([]);
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const fetchUsuarios = () =>
      api
        .get("http://localhost:8000/api/users")
        .then((res) => (usuarios.value = res.data));

    const login = () => {
      // Enviar uma solicitação para o endpoint api/user para verificar as credenciais
      const user = usuarios.value.find(
        (user) => user.email === email.value && user.password === password.value
      );
      console.log("usuarios.value:", usuarios.value);
      console.log("email.value:", email.value);
      console.log("password.value:", password.value);
      if (user) {
        // Credenciais corretas, lógica de login bem-sucedida
        // alert("Login bem-sucedido!");
        console.log("Login bem-sucedido:", user);
        const token = "generateJwtToken(user)";
        localStorage.setItem("jwt_token", token);
        console.log(token);

        router.push({ path: `/userProfile/${user.id}` });
      } else {
        // Credenciais incorretas, lidar com erro de autenticação
        alert("Credenciais inválidas. Por favor, tente novamente.");
        console.error("Credenciais incorretas. Login falhou.");
      }
    };

    onMounted(fetchUsuarios);

    return { usuarios, email, password, login };
  },
  methods: {
    loginWithFacebook() {
      FB.getLoginStatus((response) => {
        this.statusChangeCallback(response);
      });
    },

    statusChangeCallback(response) {
      if (response.status === "connected") {
        this.testAPI();
      } else {
        this.$bvToast.error("Please log into Facebook to proceed.");
      }
    },

    testAPI() {
      FB.api("/me", (response) => {
        console.log("Successful login for:", response.name);
        // Store user information from the response as needed
        const user = {
          id: response.id,
          name: response.name,
          // ... other relevant fields
        };

        // Handle login or register the user here (use axios or other request methods)
        // Handle potential errors appropriately

        // Assuming successful authentication, navigate to user profile:
        this.$router.push("/userProfile");
      });
    },
  },

  beforeMount() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: "{771097171115982}",
        cookie: true,
        xfbml: true,
        version: "v19.0",
        // secure: true,
      });

      FB.getLoginStatus((response) => {
        if (response.status === "connected") {
          // User is already logged in, handle accordingly
          var uid = response.authResponse.userID;
          var accessToken = response.authResponse.accessToken;
          console.log("Already logged in");
        } else if (response.status === "not_authorized") {
          // the user is logged in to Facebook,
          // but has not authenticated your app
        } else {
          // the user isn't logged in to Facebook.
        }
      });
    };

    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    document.body.appendChild(script);
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

/* Estilo da caixa de texto */
.textBox {
  width: 388px;
  height: 265px;
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

/* Estilo do texto informativo */
.txtInfo {
  color: #482817;
  font-size: 24px;
  text-decoration: none;
  margin: 10px 0px 10px 0px;
}

.txtInfo-senha {
  /* text-decoration: none; */
  text-align: right;
  padding: 0px 20px 0px 0px;
}

.txtInfo-senha a {
  color: #482817;
  font-size: 20px;
}

/* Estilo dos campos de email e senha */
#email,
#password {
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
#bt-login {
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

  #email,
  #password {
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

  #email,
  #password {
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
