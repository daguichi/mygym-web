<template>
  <nav>
    <v-app-bar app color="primary">
      <!-- aca arriba podemos agregarle la siguiente cosa pero queda muy grueso al principio:  shrink-on-scroll-->
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-row align="center" justify="space-around">
        <v-img
          :src="require('../assets/MyGymLogo2.png')"
          @click="toHome"
          max-height="100"
          max-width="140"
        ></v-img>

        <router-link to="/home" style="text-decoration: none">
          <v-btn
            color="#6262f8"
            v-if="actualPage === 'Home'"
            elevation="2"
            flat
            rounded
            x-large
            class="darkBackground "
          >
            Inicio
            <v-icon> right mdi-home</v-icon>
          </v-btn>
          <v-btn color="#6262f8" v-else elevation="2" rounded x-large outlined
            >Inicio
            <v-icon> right mdi-home</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/routines" style="text-decoration: none">
          <v-btn
            color="#6262f8"
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
          <v-btn color="#6262f8" v-else elevation="2" rounded outlined x-large>
            Rutinas
            <v-icon> right mdi-weight-lifter</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/favorites" style="text-decoration: none">
          <v-btn
            color="#6262f8"
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
          <v-btn color="#6262f8" v-else elevation="2" rounded outlined x-large>
            Favoritos
            <v-icon> right mdi-heart </v-icon>
          </v-btn>
        </router-link>

        <router-link :to="{ name: 'Mi perfil' }" style="text-decoration: none">
          <v-btn class="white--text" x-large rounded color="#6262f8">
            <v-avatar size="44">
              <img :src="user.avatarUrl" />
            </v-avatar>

            {{ user.username }}
          </v-btn>
        </router-link>
      </v-row>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapState } from "vuex";
// import store from "@/store/modules/security.js"
export default {
  name: "navBar",
  props: {
    actualPage: String,
  },
  methods: {
    toHome() {
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    ...mapState("security", {
      user: (state) => state.user,
    }),
  },
};
</script>

<style scoped>
.darkBackground {
  background-color: #6262f8;
}
.v-avatar {
  margin-right: 15px;
}
.router-link-active {
  background-color: #84c5c0;
  border-radius: 30px;
}
</style>
