<template>
  <v-main class="grey lighten-3 fill-height">
    <v-container>
      <v-row align="center" justify="center">
        <h1 class="mb-6">Todas las rutinas</h1>
      </v-row>
      <v-row :v-if="!loading">
        <v-col md="3" v-for="r in this.routines" :key="r.id">
          <RoutineCard v-bind:routine="r" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapState, mapActions } from "vuex";
import RoutineCard from "../components/RoutineCard.vue";

export default {
  name: "Routines",
  data() {
    return {
      loading: false,
    };
  },
  components: { RoutineCard },
  methods: {
    ...mapActions("routines", { $getAll: "getAll" }),
  },
  computed: {
    ...mapState("routines", {
      routines: (state) => state.routines,
    }),
  },

  async created() {
    this.loading = true;
    await this.$getAll();
    this.loading = false;
  },
};
</script>

<style scoped>
.options {
  padding: 50px 30px 30px;
}
.primary {
  background-color: #92d9d3;
}

.card {
  margin: 30px;
}

.text {
  font-weight: bold;
  font-size: 18px;
  text-transform: none;
}
</style>
