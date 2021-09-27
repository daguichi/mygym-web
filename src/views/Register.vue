<template>
  <div class="bg fivepeople " >
    <v-container fluid class="fill-height pa-0 ma-0">
      <v-row align="center" justify="center" >
            <v-img
            max-height="150"
            max-width="250"
            src="../assets/MyGymLogo.png"
            ></v-img>
      </v-row>
      <v-row>
        <v-col>
          <v-row justify="center" align="center">
            <v-card class="rounded-xl" rounded color="#92D9D3" elevation="1">
              <v-container class="account-icon">
                <v-row justify="center" aligh= "center">
                    <v-icon color="#475dff" dense large x-large>mdi-account-circle</v-icon>
                </v-row>
              </v-container>
              <v-card-text>
                <v-container>
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
                      truncate={false}
                      value=""
                      x-large
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <v-text-field
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
                      truncate={false}
                      value=""
                      x-large
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <v-text-field
                      background-color="rgb(244, 249, 252)"
                      placeholder="Contraseña"
                      elevation="2"
                      color="black"
                      dense
                      filled
                      rounded
                      placeholderColor="#aaa"
                      textAlign="left"
                      textColor="#333"
                      truncate={false}
                      value=""
                      x-large
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <v-text-field
                      background-color="rgb(244, 249, 252)"
                      placeholder="Confirmar contraseña"
                      elevation="2"
                      color="black"
                      dense
                      filled
                      rounded
                      placeholderColor="#aaa"
                      textAlign="left"
                      textColor="#333"
                      truncate={false}
                      value=""
                      x-large
                    ></v-text-field>
                  </v-row>
                  <v-row class="text-center" justify="center">
                    <v-btn
                      elevation="2"
                      color="#2679CC"
                      dark
                      x-large
                      rounded
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
    <v-snackbar v-model="snackbar"
      >Se reenvio el código de verificación a su mail
      {{ this.mail }}</v-snackbar
    >
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style scoped>
.account-icon {
    margin-top: 10px;
}
.fivepeople {
  width: auto;
  height: 700px;
  overflow: visible;
  opacity: 1;
  background-image: url('https://media.istockphoto.com/photos/group-of-five-peoples-in-silhouettes-at-sunset-picture-id899192146?k=20&m=899192146&s=612x612&w=0&h=tcCIoXgXjbjFsJnqV26-HGwCfDG0GGyB0X0vseAZNVg=');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>