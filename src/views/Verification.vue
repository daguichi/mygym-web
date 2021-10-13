<template>
  <div>
    <v-card max-width="600" rounded="xl" class="mx-auto mt-16" color="primary">
      <v-row justify="center" align="center">
        <v-img
          :src="require('../assets/MyGymLogo2.png')"
          max-height="100"
          max-width="140"
        ></v-img>
      </v-row>
      <v-row justify="center" align="center">
        <h2>Verificación</h2>
      </v-row>
      <v-row class="pt-3">
        <v-col>
          <v-text-area
            >Te enviamos un correo electrónico con un código para verificar tu
            cuenta</v-text-area
          >
          <v-text-field
            label="Correo electronico"
            outlined
            v-model="email"
            background-color="rgb(244, 249, 252)"
            placeholder="Correo electrónico"
            elevation="2"
            color="black"
            filled
            class="pa-2 pt-7"
            rounded
            placeholderColor="#aaa"
            textAlign="left"
            textColor="#333"
            truncate="{false}"
            value=""
          ></v-text-field
        ></v-col>
      </v-row>

      <v-row align="center" justify="center" class="pt-3">
        <v-col>
          <v-text-field
            v-model="code"
            outlined
            label="Codigo de confirmación"
            background-color="rgb(244, 249, 252)"
            placeholder="Código de confirmación"
            elevation="2"
            color="black"
            filled
            rounded
            class="pl-2 pr-2"
            placeholderColor="#aaa"
            textAlign="left"
            textColor="#333"
            truncate="{false}"
            value=""
            x-large
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-divider class="mx-4"></v-divider
      ></v-row>
      <v-row class="text-center pa-3" justify="center">
        <v-btn @click="check" elevation="2" color="#2679CC" dark x-large rounded
          >VERIFICAR
        </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import router from "../router";
import { Verification } from "../api/user";
export default {
  name: "Verification",
  data() {
    return {
      email: "",
      code: "",
    };
  },
  methods: {
    ...mapActions("security", {
      $verify: "verifyEmail",
    }),

    setResult(result) {
      this.result = JSON.stringify(result, null, 2);
    },
    clearResult() {
      this.result = null;
    },

    abort() {
      this.controller.abort();
    },

    async check() {
      const credentials = new Verification(this.email, this.code);
      this.$verify({ credentials, rememberMe: true });
      router.push("/");
    },
  },
};
</script>
<style scoped>
.test {
  height: 20% !important;
  padding-left: 2px !important;
}
</style>
