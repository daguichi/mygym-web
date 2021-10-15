<template>
  <v-container>
    <v-alert
      type="error"
      v-if="this.error"
      width="100%"
      dismissible
      @click="this.error = false"
      >{{ this.errorDetail }}</v-alert
    >

    <v-row>
      <v-col>
        <v-row justify="center" align="center">
          <v-card class="rounded-xl" rounded color="#92D9D3" elevation="1">
            <v-container class="account-icon">
              <v-row justify="center" align="center">
                <v-icon color="#6262f8" dense large x-large
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
                    placeholder="Usuario*"
                    elevation="2"
                    color="black"
                    dense
                    :rules="rules.name"
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
                    placeholder="Correo electrónico*"
                    elevation="2"
                    color="black"
                    :rules="rules.mail"
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
                    placeholder="Contraseña*"
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
                    :rules="[rules.required, rules.min, rules.passMatch]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    placeholder="Confirmar contraseña*"
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
                  <v-btn
                    @click="register"
                    elevation="2"
                    color="#6262f8"
                    dark
                    x-large
                    rounded
                    :disabled="validFields"
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
import { mapState, mapActions } from "vuex";
import router from "../router";
import { RegisterCredentials } from "../api/user";
export default {
  name: "RegisterCard",
  data() {
    return {
      error: false,
      errorDetail: "Error inesperado.",
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      username: "",
      email: "",
      password1: "",
      password2: "",
      controller: null,
      rules: {
        required: (value) => !!value || "Requerido.",
        name: [(val) => (val || "").length > 0 || "Campo obligatorio"],
        mail: [(val) => (val || "").length > 0 || "Campo obligatorio"],

        min: (v) => v.length >= 8 || "Minimo 8 caracteres",
        emailMatch: () => `The email and password you entered don't match`,
        passMatch: () =>
          this.password1 === this.password2 ||
          "las contraseñas deben coincidir",
      },
    };
  },
  computed: {
    validFields() {
      if (
        this.username === "" ||
        this.email === "" ||
        this.password1 != this.password2 ||
        this.password1 === "" ||
        this.password1.length < 8
      ) {
        return true;
      }
      return false;
    },
    ...mapState("security", {
      $user: (state) => state.user,
    }),
  },
  methods: {
    ...mapActions("security", {
      $register: "register",
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

    async register() {
      const credentials = new RegisterCredentials(
        this.username,
        this.password1,
        this.email
      );

      this.$register({ credentials, rememberMe: true })
        .then(() => {
          router.push("Verification");
        })
        .catch((error) => {
          this.error = true;
          if (error.code === 2) {
            if (
              error.details[0].includes("email") ||
              error.details[0].includes("username")
            ) {
              this.errorDetail = "No puede usar este usuario o email";
              this.email = null;
              this.username = null;
            }
          }
          if (error.code === 2) {
            if (
              error.details[0].includes("email") ||
              error.details[0].includes("username")
            ) {
              this.errorDetail = "No puede usar este usuario o email";
              this.email = null;
              this.username = null;
            }
          }
          console.log("al final del catch");
          return;
        });
    },
  },
};
</script>

<style scoped>
.account-icon {
  margin-top: 10px;
}
</style>
