<template>
  <v-col>
    <v-sheet max-height="100vh" rounded="lg">
      <h1 class="pa-6 font-weight-bold">Mis ejercicios</h1>
      <v-container v-if="this.myExercises.length > 0">
        <v-carousel dark height="470">
          <v-carousel-item
            class="mx-auto"
            v-for="my in this.myExercises"
            :key="my.id"
          >
            <ExerciseCard v-bind:exercise="my" />
          </v-carousel-item>
        </v-carousel>
      </v-container>
      <v-container v-else>
        <v-col>
          <v-row>
              <v-icon class="icon" color="#6262f8" x-large>mdi-weight-lifter</v-icon>
          </v-row>
          <v-row class= "pad" align="center" justify="center"><h3>No tienes ejercicios creados</h3></v-row>
          <v-row class= "pad" align="center" justify="center"><h5>Ve al inicio y toca en el boton + para crear ejercicios</h5></v-row>
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
import ExerciseCard from "@/components/ExerciseCard";
export default {
  components: { ExerciseCard },
  methods: {
    ...mapActions("exercises", { $getMines: "getMines" }),
  },

  computed: {
    ...mapState("exercises", {
      myExercises: (state) => state.myExercises,
      exs: (state) => state.exercises,
    }),
  },

  async created() {
    await this.$getMines();
    console.log(this.myExercises);
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
