<template>
  <nav>
    <v-app-bar app color="primary">
      <!-- aca arriba podemos agregarle la siguiente cosa pero queda muy grueso al principio:  shrink-on-scroll-->
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-row align="center" justify="space-around">
        <v-img
          :src="require('../assets/MyGymLogo2.png')"
          max-height="100"
          max-width="140"
        ></v-img>

        <router-link to="/home">
          <v-btn
            v-if="actualPage === 'home'"
            elevation="2"
            flat
            rounded
            x-large
            class="darkBackground"
          >
            Home
            <v-icon> right mdi-home</v-icon>
          </v-btn>
          <v-btn v-else elevation="2" rounded x-large outlined
            >Home
            <v-icon> right mdi-home</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/routines">
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

        <router-link to="/favorites">
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

        <router-link :to="{ name: 'Ficha tecnica' }">
          <v-btn color="purple" class="white--text" x-large>
            <v-row align="center" justify="space-around"
              ><v-avatar left color="purple"
                ><v-img
                  contain
                  src="https://cdn0.iconfinder.com/data/icons/handsome-man-avatars/283/stock_man_avatar-17-1024.png"
                ></v-img>
              </v-avatar>

              {{ $user.username }}</v-row
            >
          </v-btn>
        </router-link>
      </v-row>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapState, mapGetters } from "vuex";
// import store from "@/store/modules/security.js"
export default {
  name: "navBar",
  props: {
    actualPage: String
  },
  computed: {
    ...mapState("security", {
      $user: (state) => state.user,
    }),
    ...mapGetters("security", {
      $fullUser: "fullUser",
    }),
  },
};
</script>

<style scoped>
.darkBackground {
  background-color: #518a83;
}
</style>