<template>
  <div>
    <v-spacer></v-spacer>
    <h1>Verification</h1>
    <v-row align="center" justify="center">
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
        <v-text-field
            v-model="code"
            background-color="rgb(244, 249, 252)"
            placeholder="Código de confirmación"
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
        <v-btn @click="check" elevation="2" color="#2679CC" dark x-large rounded
            >VERIFICAR
        </v-btn>
    </v-row>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import router from '../router';
import {Verification} from '../api/user'
export default {
  name: "Verification",
  data() {
    return {
      email: "",
      code: "",
    };
  },
  methods: {
     ...mapActions('security', {
       $verify: 'verifyEmail'
    }),

    setResult(result){
      this.result = JSON.stringify(result, null, 2)
    },
    clearResult() {
      this.result = null
    },
    
    abort() {
      this.controller.abort()
    },
    
    async check() {
      const credentials = new Verification(this.email, this.code);
      await this.$verify({credentials, rememberMe: true })
      router.push("LogIn")
    }
  },
};
</script>