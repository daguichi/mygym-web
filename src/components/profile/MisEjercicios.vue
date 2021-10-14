<template>
  <v-col>
    <v-sheet max-height="100vh" rounded="lg">
      <h1 class="pt-8 pb-16 font-weight-bold ">Mis ejercicios</h1>
      <v-carousel dark>
        <v-carousel-item
          class="mx-auto"
          v-for="my in this.myExercises"
          :key="my.id"
        >
          <ExerciseCard v-bind:exercise="my" />
        </v-carousel-item>
      </v-carousel>
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

<style scoped></style>
