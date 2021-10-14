<template>
  <div>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row v-for="seccion in secciones" :key="seccion.title">
          <v-col>
            <h1 class="pt-5 botom-line">{{ seccion.title }}</h1>

            <v-slide-group
              v-model="model"
              class="pl-3 pt-9"
              active-class="success"
              mobile-breakpoint="1"
              show-arrows
            >
              <v-slide-item class="pl-3" v-for="r in routines" :key="r.id">
                <RoutineCard v-bind:routine="r" />
              </v-slide-item>
            </v-slide-group>
            <br /><br />
          </v-col>
        </v-row>
        <create />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import RoutineCard from "../components/RoutineCard";
import Create from "../components/Create";
import store from "@/store/modules/routines.js";
import { mapState, mapActions, mapGetters } from "vuex";
//import CardExercise from "../components/cardExercise.vue";
//import {CategoryApi} from '../api/category'

export default {
  name: "Home",
  data() {
    return {
      secciones: undefined,
      model: undefined,
    };
  },
  components: { RoutineCard, Create },
  computed: {
    ...mapState("security", {
      user: (state) => state.user,
    }),
    ...mapState("security", { $token: (state) => state.token }),
    ...mapGetters("security", { $isLoggedIn: "isLoggedIn" }),
    ...mapState("category", {
      categories: (state) => state.categories,
    }),
    ...mapState("routines", {
      routines: (state) => state.routines,
    }),
  },
  async created() {
    await this.$getAll();
    this.secciones = [
      { title: "Destacados", arr: this.routines },
      { title: "Mis rutinas", arr: store.misrutinas },
      { title: "Historial", arr: store.historial },
    ];
  },
  methods: {
    ...mapActions("category", { $createCategory: "create" }),
    ...mapActions("routines", { $createRoutine: "create", $getAll: "getAll" }),
  },
};
</script>

<style scoped>
.botom-line {
  text-align: left;
  border-bottom: 5px solid #6262f8;

  margin-bottom: 10px;
  padding: 0 80px; /* or how longer you want */
  padding-bottom: 10px;
}
</style>
