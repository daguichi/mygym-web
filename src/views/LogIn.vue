<template>
  <div>
    <div class="fondo">
      <v-container>
        <v-btn @click="console">CONSOLE</v-btn>
        <v-row>
          <v-col md="4">
            <v-row align="center" justify="center">
              <v-img
                class="border1"
                max-height="250"
                max-width="450"
                src="../assets/MyGymLogo2.png"
              ></v-img>
            </v-row>
          </v-col>
          <v-col />
          <v-col md="4">
            <v-container class="border2">
              <v-row>
                <v-text-field
                  v-model="username"
                  background-color="#e7e7e8"
                  placeholder="Usuario*"
                  elevation="2"
                  color="black"
                  
                  filled
                  rounded
                  placeholderColor="#aaa"
                  textAlign="left"
                  textColor="#333"
                  truncate="{false}"
                  value=""
                  outlined
                  x-large
                  :error-messages="result"
                ></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  placeholder="Contraseña*"
                  @click:append="show1 = !show1"
                  background-color="#e7e7e8"
                  elevation="2"
                  color="black"
                  
                  filled
                  rounded
                  placeholderColor="#aaa"
                  textAlign="left"
                  textColor="#333"
                  truncate="{false}"
                  value=""
                  outlined
                  x-large
                  :error-messages="result"
                ></v-text-field>
              </v-row>
              <v-row class="text-center" justify="center">
                <v-btn
                  @click="logIn"
                  elevation="2"
                  color="#6262f8"
                  dark
                  x-large
                  rounded
                  >Iniciar sesión
                </v-btn>
              </v-row>
              <v-row class="text-center pa-4" justify="center">
                <router-link to="/register" style="text-decoration: none">
                  <v-btn elevation="2" color="#363c94" dark x-large rounded
                    >Registrarme
                  </v-btn>
                </router-link>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters} from "vuex";
import { Credentials } from "../api/user";
import router from "../router/index";
export default {
  name: "LogIn",
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      username: "",
      password: "",
      result: null,
      controller: null,
      rules: {
        required: (value) => !!value || "Requerido.",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  computed: {
    ...mapState("security", {
      $user: (state) => state.user,
    }),
    ...mapState("security", {$token: state => state.token}),
    ...mapGetters("security", {$isLoggedIn: 'isLoggedIn'})
  },
  methods: {
    console() {
      console.log(this.$user);
      console.log(this.$isLoggedIn);
      console.log(this.$token)
    },
    ...mapActions("security", {
      $getCurrentUser: "getCurrentUser",
      $login: "login",
      $logout: "logout",
    }),
    setResult() {
      this.result = "credenciales invalidas, intente de nuevo";
    },
    clearResult() {
      this.result = null;
    },
    async logIn() {
      try {
        const credentials = new Credentials(this.username, this.password);
        await this.$login({ credentials, rememberMe: true });
        await this.$getCurrentUser();
        this.clearResult();
      } catch (e) {
        this.setResult(e);
        console.log(e);
        return;
      }

      console.log(this.$user);
      router.push("Home");
    },
    async logout() {
      await this.$logout();
      this.clearResult();
    },
   

    abort() {
      this.controller.abort();
    },
  },

 
};
</script>

<style scoped>
.fondo {
  width: auto;
  height: 100vh;
  overflow: visible;
  background-image: url("../assets/gitrl.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.315);
  opacity: 1;
}
.border1 {
  margin-top: 50px;
}
.border2 {
  margin-top: 150px;
  margin-right: 30px;
}
</style>
