<template>
  <v-col>
    <v-sheet max-height="100vh" rounded="lg">
      <h1 class="pa-6 font-weight-bold">Mis rutinas</h1>
        <v-carousel dark height="300">
          <v-carousel-item v-for="my in this.myRoutines"
            :key="my.id">
          
            <RoutineCard
              v-bind:routine="my"
            />
            
          </v-carousel-item>
        </v-carousel>
    </v-sheet>
  </v-col>
</template>

<script>
import { mapActions, mapState } from "vuex";
import RoutineCard from "@/components/RoutineCard"
export default {
  components: {RoutineCard},
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

</style>
