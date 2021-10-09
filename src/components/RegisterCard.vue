<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row justify="center" align="center">
          <v-card class="rounded-xl" rounded color="#92D9D3" elevation="1">
            <v-container class="account-icon">
              <v-row justify="center" align="center">
                <v-icon color="#475dff" dense large x-large
                  >mdi-account-circle</v-icon
                >
              </v-row>
            </v-container>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-text-field
                    v-model="username"
                    background-color="rgb(244, 249, 252)"
                    placeholder="Usuario"
                    elevation="2"
                    color="black"
                    dense
                    filled
                    rounded
                    placeholderColor="#aaa"
                    textAlign="left"
                    textColor="#333"
                    truncate="{false}"
                    value=""
                    x-large
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="email"
                    background-color="rgb(244, 249, 252)"
                    placeholder="Correo electrónico"
                    elevation="2"
                    color="black"
                    dense
                    filled
                    rounded
                    placeholderColor="#aaa"
                    textAlign="left"
                    textColor="#333"
                    truncate="{false}"
                    value=""
                    x-large
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="password1"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    placeholder="Contraseña"
                    @click:append="show1 = !show1"
                    background-color="rgb(244, 249, 252)"
                    elevation="2"
                    color="black"
                    dense
                    filled
                    rounded
                    placeholderColor="#aaa"
                    textAlign="left"
                    textColor="#333"
                    truncate="{false}"
                    value=""
                    x-large
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="password2"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    placeholder="Confirmar contraseña"
                    @click:append="show1 = !show1"
                    background-color="rgb(244, 249, 252)"
                    elevation="2"
                    color="black"
                    dense
                    filled
                    rounded
                    placeholderColor="#aaa"
                    textAlign="left"
                    textColor="#333"
                    truncate="{false}"
                    value=""
                    x-large
                  ></v-text-field>
                </v-row>
                <v-row class="text-center" justify="center">
                  <v-btn @click="register" elevation="2" color="#2679CC" dark x-large rounded
                    >REGISTRARSE
                  </v-btn>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {RegisterCredentials } from "../api/user"

import {mapState, mapGetters, mapActions} from 'vuex';
import router from '../router';


export default {
  name: "RegisterCard",
  data() {
    return {

      show1: false,
      show2: true,
      show3: false,
      show4: false,
      username: "",
      email: "",
      password1: "",
      password2: "",
      rules: {
        required: (value) => !!value || "Requerido.",
        min: (v) => v.length >= 8 || "Minimo 8 caracteres",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  computed: {
    ...mapState('security', {
      $user: state => state.user,
    }),
    ...mapGetters('security', {
      $isLoggedIn: 'isLoggedIn'
    }),
    canCreate() {
      return this.$isLoggedIn && !this.sport
    },
    canOperate() {
      return this.$isLoggedIn && this.sport
    },
    canAbort() {
      return this.$isLoggedIn && this.controller
    }
  },
  methods: {
     ...mapActions('security', {
       $register: 'register'
    }),
    setResult(result){
      this.result = JSON.stringify(result, null, 2)
    },
    clearResult() {
      this.result = null
    },
    
    async getCurrentUser() {
      await this.$getCurrentUser()
      this.setResult(this.$user)
    },

    abort() {
      this.controller.abort()
    },
    
    async register() {
      let credentials = new RegisterCredentials(this.username, this.password1, this.email);
      console.log(credentials);
      await this.$register(credentials);
      router.push("Verification")
    }
  },
};
</script>

<style scoped>
.account-icon {
  margin-top: 10px;
}
</style>