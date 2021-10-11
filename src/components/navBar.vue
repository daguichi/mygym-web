<template>
  <nav>
    <v-app-bar app color="primary">
      <!-- aca arriba podemos agregarle la siguiente cosa pero queda muy grueso al principio:  shrink-on-scroll-->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-row>
        <v-col>
          <router-link to='/home'>
            <v-btn v-if="actualPage === 'home'" elevation="2" flat rounded x-large class="darkBackground" >
              Home
              <v-icon> right mdi-home</v-icon>
            </v-btn>
            <v-btn v-else elevation="2" rounded x-large outlined>Home
              <v-icon> right mdi-home</v-icon>
            </v-btn>
          </router-link>
        </v-col>
        <v-col>
          <router-link to='/routines'>
            <v-btn v-if="actualPage === 'rutinas'" elevation="2" rounded outlined x-large class="darkBackground">
              Rutinas
              <v-icon> right mdi-weight-lifter</v-icon>
            </v-btn>
            <v-btn v-else elevation="2" rounded outlined x-large>
              Rutinas
              <v-icon> right mdi-weight-lifter</v-icon>
            </v-btn>
          </router-link>
        </v-col>
        <v-col>
          <router-link to='/favorites'>
            <v-btn v-if="actualPage === 'favoritos'" elevation="2" rounded outlined x-large class="darkBackground">
              Favoritos
              <v-icon> right mdi-heart </v-icon>
            </v-btn>
            <v-btn v-else elevation="2" rounded outlined x-large>
              Favoritos
              <v-icon> right mdi-heart </v-icon>
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <router-link to='/profile'>
        <v-btn x-large>
          <v-icon> left mdi-account-circle </v-icon>
          username
        </v-btn>
      </router-link>
    </v-app-bar>
  </nav>
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
  background-color: #518A83;
}
</style>