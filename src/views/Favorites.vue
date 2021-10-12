<template>
  <div>
    <v-main class="grey lighten-3">
      <v-row align="stretch"
        ><v-icon color="purple" x-large @click="goBack" class="left-arrow"
          >mdi-arrow-left-thick
        </v-icon>
      </v-row>
      <h1>Mis rutinas favoritas</h1>
      <div v-if="favs.length > 0">
        <v-card elevation="24" max-width="444" class="mx-auto">
          <v-system-bar lights-out></v-system-bar>
          <v-carousel
            :continuous="false"
            :cycle="cycle"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="220"
          >
            <v-carousel-item :v-for="fav in favs">
              :key="fav.id">
              <ExcercisesCard
                v-bind:titulo="fav.name"
                v-bind:autor="fav.user.username"
                v-bind:stars="fav.score"
                v-bind:imgUrl="fav.metadata"
              />
              <!-- <v-sheet :color="colors[i]" height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <div class="text-h2">{{ slide }} Slide</div>
                </v-row>
              </v-sheet> -->
              <v-list two-line>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/john.png"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                    <v-list-item-subtitle>Author</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </div>
      <div v-else>
        <v-row justify="space-around" align="center"
          ><v-icon x-large color="purple">mdi-heart</v-icon></v-row
        >
        <h3>No tienes rutinas favoritas :(</h3>
        <h5>Toca en el ícono de Favoritos para añadir</h5>
        <router-link to="/routines" style="text-decoration: none">
          <v-btn color="purple" elevation="2" rounded outlined x-large>
            <v-icon> right mdi-weight-lifter</v-icon>
            Buscar rutinas
          </v-btn>
        </router-link>
      </div>
    </v-main>
  </div>
</template>

<script>
import ExcercisesCard from "../components/ExcercisesCard.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Favorites",
  components: { ExcercisesCard },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
    ...mapActions("routines", { $getFavs: "getFavs" }),
  },
  computed: {
    ...mapState("routines", {
      favs: (state) => state.favs,
    }),
  },
  async created() {
    await this.$getFavs();

  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 100px;
}
h3 {
  margin-top: 80px;
  margin-bottom: 20px;
}
.v-btn {
  margin-top: 20px;
  margin-bottom: 40px;
}
.left-arrow {
  margin-left: 70px;
}
.v-card {
  margin-top: -50px;
  margin-bottom: 50px;
}
</style>
