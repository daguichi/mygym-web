<template>
  <nav>
    <v-app-bar app color="primary">
      <!-- aca arriba podemos agregarle la siguiente cosa pero queda muy grueso al principio:  shrink-on-scroll-->
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-row align="center" justify="space-around">
        <router-link to="/inicio" style="text-decoration: none">
          <v-img
            :src="require('../assets/MyGymLogo2.png')"
            max-height="100"
            max-width="140"
          ></v-img>
        </router-link>
        <router-link to="/home">
          <v-btn
            v-if="actualPage === 'Home'"
            elevation="2"
            flat
            rounded
            x-large
            class="darkBackground"
          >
            Inicio
            <v-icon> right mdi-home</v-icon>
          </v-btn>
          <v-btn v-else elevation="2" rounded x-large outlined
            >Inicio
            <v-icon> right mdi-home</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/routines" style="text-decoration: none">
          <v-btn
            v-if="actualPage === 'rutinas'"
            elevation="2"
            rounded
            outlined
            x-large
            class="darkBackground"
          >
            Rutinas
            <v-icon> right mdi-weight-lifter</v-icon>
          </v-btn>
          <v-btn v-else elevation="2" rounded outlined x-large>
            Rutinas
            <v-icon> right mdi-weight-lifter</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/favorites" style="text-decoration: none">
          <v-btn
            v-if="actualPage === 'favoritos'"
            elevation="2"
            rounded
            outlined
            x-large
            class="darkBackground"
          >
            Favoritos
            <v-icon> right mdi-heart </v-icon>
          </v-btn>
          <v-btn v-else elevation="2" rounded outlined x-large>
            Favoritos
            <v-icon> right mdi-heart </v-icon>
          </v-btn>
        </router-link>

        <router-link
          :to="{ name: 'Ficha tecnica' }"
          style="text-decoration: none"
        >
          <v-btn x-large>
            <v-icon> left mdi-account-circle </v-icon>
            username
          </v-btn>
        </router-link>
      </v-row>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "navBar",
  props: {
    actualPage: String,
  },
};
</script>

<style scoped>
.darkBackground {
  background-color: #518a83;
}
</style>
