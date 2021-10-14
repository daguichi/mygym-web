<template>
  <div>
    <v-main class="grey lighten-3">
      <v-row align="stretch"
        ><v-icon color="#6262f8" x-large @click="goBack" class="left-arrow"
          >mdi-arrow-left-thick
        </v-icon>
      </v-row>
      <h1>Mis rutinas favoritas</h1>
      <div v-if="this.favs.length > 0">
        <v-carousel dark height="300">
          <v-carousel-item v-for="fav in this.favs"
            :key="fav.id">
          
            <RoutineCard
              v-bind:routine="fav"
            />
            
          </v-carousel-item>
        </v-carousel>
      </div>
      <div v-else>
        <v-row justify="space-around" align="center"
          ><v-icon x-large color="#6262f8">mdi-heart</v-icon></v-row
        >
        <h3>No tienes rutinas favoritas :(</h3>
        <h5>Toca en el ícono de Favoritos para añadir</h5>
        <router-link to="/routines" style="text-decoration: none">
          <v-btn color="#6262f8" elevation="2" rounded outlined x-large>
            <v-icon> right mdi-weight-lifter</v-icon>
            Buscar rutinas
          </v-btn>
        </router-link>
      </div>
    </v-main>
  </div>
</template>

<script>
import RoutineCard from "../components/RoutineCard.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Favorites",
  components: { RoutineCard },
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
    console.log(this.favs)
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
