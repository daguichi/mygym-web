<template>
  <v-col>
    <v-sheet max-height="100vh" rounded="lg">
      <h1 class="pa-6 font-weight-bold">Mis rutinas</h1>
      <v-container v-if="this.myRoutines.length > 0">
        <v-carousel dark height="300">
          <v-carousel-item v-for="my in this.myRoutines" :key="my.id">
            <RoutineCard v-bind:routine="my" />
          </v-carousel-item>
        </v-carousel>
      </v-container>
      <v-container v-else>
        <v-col>
          <v-row>
              <v-icon class="icon" color="#6262f8" x-large>mdi-dumbbell</v-icon>
          </v-row>
          <v-row class= "pad" align="center" justify="center"><h3>No tienes rutinas creadas</h3></v-row>
          <v-row class= "pad" align="center" justify="center"><h5>Ve al inicio y toca en el boton + para crear rutinas</h5></v-row>
          <v-row class= "pad" align="center" justify="center">
            <router-link to="/home" style="text-decoration: none">
              <v-btn color="#6262f8" elevation="2" rounded outlined x-large>
                <v-icon> right mdi-home</v-icon>
                Inicio
              </v-btn>
            </router-link>
          </v-row>
        </v-col>
      </v-container>
    </v-sheet>
  </v-col>
</template>

<script>
import { mapActions, mapState } from "vuex";
import RoutineCard from "@/components/RoutineCard";
export default {
  components: { RoutineCard },
  methods: {
    ...mapActions("routines", { $getMines: "getMines" }),
  },
  computed: {
    ...mapState("routines", {
      myRoutines: (state) => state.myRoutines,
    }),
  },
  async created() {
    this.$getMines();
  },
};
</script>

<style scoped>
.pad{
  padding-top: 20px;
  padding-bottom: 20px;
}
.icon{
  margin: auto;
}
</style>
