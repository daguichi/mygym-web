<template>
  <v-app-bar app color="primary">
    <!-- aca arriba podemos agregarle la siguiente cosa pero queda muy grueso al principio:  shrink-on-scroll-->
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <v-row>
      <v-col>
        <router-link to="/home">
        
          <v-btn v-if="actualPage === 'home'" elevation="2" outlined rounded x-large  class="darkBackground">
            home
            <v-icon> right mdi-home</v-icon>
          </v-btn>
          <v-btn v-else elevation="2" rounded x-large outlined>home
            <v-icon> right mdi-home</v-icon>
          </v-btn>
        </router-link>
      </v-col>
      <v-col>
        <router-link to="/home">
          <v-btn elevation="2" rounded outlined x-large>
            rutinas
            <v-icon> right mdi-weight-lifter</v-icon>
          </v-btn>
        </router-link>
      </v-col>
      <v-col>
        <router-link to="/home">
          <v-btn elevation="2" rounded outlined x-large>
            favoritos
            <v-icon> right mdi-heart </v-icon>
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-btn x-large>
      <v-icon> left mdi-account-circle </v-icon>
      username
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "navBar",
  props: {
    actualPage: String
  },
};
</script>

<style scoped>
.darkBackground{
  background-color: #518A83,

}
</style>