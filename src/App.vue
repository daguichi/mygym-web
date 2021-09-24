<template>
  <v-app id="inspire">

    <v-app-bar
        app
        color="blue lighten-3"

    >
<!-- aca arriba podemos agregarle la siguiente cosa pero queda muy grueso al principio:  shrink-on-scroll-->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>


      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-row>
        <v-col>
      <v-btn

          elevation="2"
          rounded
          x-large
          outlined
      >
        home
        <v-icon>
          right
          mdi-home</v-icon>
      </v-btn>
        </v-col>
        <v-col>
      <v-btn
          elevation="2"
          rounded
          outlined
          x-large

      >
        rutinas
        <v-icon>
          right
          mdi-weight-lifter</v-icon>
      </v-btn>
        </v-col>
        <v-col>
      <v-btn
          elevation="2"
          rounded
          outlined
          x-large
      >
        favoritos
        <v-icon>
          right
          mdi-heart
        </v-icon>
      </v-btn>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn
      x-large>
        <v-icon>
          left
          mdi-account-circle
        </v-icon>
        username
      </v-btn>
    </v-app-bar>

    <v-main>
    <home-page></home-page>
    </v-main>
  </v-app>
</template>


<script>
import HomePage from "./components/homePage";
export default {
  name: 'App',
  components: {HomePage},
  theme: {
    themes: {
      light: {
        primary: '#a1d7d3'
      },
    },
  },
  data: () => ({
    //
  }),
};
</script>
