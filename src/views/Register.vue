<template>
  <div class="bg">
    <v-container fluid class="fill-height pa-0 ma-0">
      <v-row align="center" justify="center" style="height: 250px">
            <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="150"
            max-width="250"
            src="https://picsum.photos/id/11/500/300"
            ></v-img>
      </v-row>
      <v-row>
        <v-col>
          <v-row justify="center" align="center" style="height: 250px">
            <v-card rounded color="#92D9D3" elevation="0">
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
                      label="asdasd"
                      elevation="2"
                      color="grey"
                      dense
                      required
                      filled
                      dark
                      x-large
                      rounded
                      class="mr-3"
                      v-model="verificationCode"
                      @keyup.enter="verificarCodigo"
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
</style>