<template>
  <div>
    <div class="fondo">
      <v-container>
        <v-row>
          <v-col md="4">
            <v-row align="center" justify="center">
              <v-img
                class="border1"
                max-height="250"
                max-width="450"
                src="../assets/output-onlinepngtools.png"
              ></v-img>
            </v-row>
            <router-link to="/register">
              <v-btn elevation="2" color="#2679CC" dark x-large rounded
                >Registrarme
              </v-btn>
            </router-link>
          </v-col>
          <v-col />
          <v-col md="4">
            <v-container class="border2">
              <v-row>
                <v-text-field
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
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required]"
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
              <v-row class="text-center" justify="center">
                <router-link to="/home">
                  <v-btn elevation="2" color="#2679CC" dark x-large rounded
                    >Iniciar sesión
                  </v-btn></router-link
                >
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "",
      rules: {
        required: (value) => !!value || "Requerido.",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
};
</script>

<style scoped>
.fondo {
  width: auto;
  height: 100vh;
  overflow: visible;
  background-image: url("../assets/fondo.png");
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