<template>
  <v-main class="grey lighten-3 fill-height">
    <v-container>
      <v-row v-for="seccion in secciones" :key="seccion.title">
        <v-col>
          <h1 class="pt-5 texto">{{ seccion.title }}</h1>
          <div class="botom-line"></div>

          <v-container>
            <div v-if="seccion.type === 'rutina'">
              <div v-if="seccion.arr.length > 0">
                <v-slide-group
                  v-model="model"
                  class="pl-3 pt-9"
                  active-class="success"
                  mobile-breakpoint="1"
                  show-arrows
                >
                  <v-slide-item
                    class="pl-3"
                    v-for="r in seccion.arr"
                    :key="r.id"
                  >
                    <RoutineCard v-bind:routine="r" />
                  </v-slide-item>
                </v-slide-group>
                <br />
                <br />
                <br />
                <v-divider />
              </div>
              <div v-else>
                <v-row>
                  <v-col align="center">
                    <v-icon class="icon mb-2 mt-2" color="#6262f8" x-large
                      >mdi-weight-lifter</v-icon
                    >
                    <h3 class="mb-2 mt-2">
                      No hay rutinas en esta sección
                    </h3>
                    <h5 class="mb-2 mt-2" v-if="seccion.title == 'Destacados'">
                      Lo sentimos, las rutinas destacadas no están disponibles
                      todavía
                    </h5>
                    <h5 v-else>
                      No tienes rutinas todavía, toca en el boton + para
                      crearlas
                    </h5>
                  </v-col>
                </v-row>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <v-divider />
              </div>
            </div>

            <div v-else-if="seccion.type === 'ejercicio'">
              <div v-if="seccion.descansos.length > 0">
                <h2>Descansos</h2>
                <v-slide-group
                  v-model="model"
                  class="pl-3 pt-9"
                  active-class="success"
                  mobile-breakpoint="1"
                  show-arrows
                >
                  <v-slide-item
                    class="pl-3"
                    v-for="ex in seccion.descansos"
                    :key="ex.id"
                  >
                    <ExerciseCard v-bind:exercise="ex" />
                  </v-slide-item>
                </v-slide-group>
              </div>
              <div v-else>
                <h2>Descansos</h2>
                <v-row>
                  <v-col align="center">
                    <v-icon class="icon mb-2 mt-2" color="#6262f8" x-large
                      >mdi-weight-lifter</v-icon
                    >
                    <h3 class="mb-2 mt-2">No tienes ejercicios de descanso</h3>
                    <h5 class="mb-6 mt-2">
                      Toca en el boton + para crearlos
                    </h5>
                  </v-col>
                </v-row>
              </div>
              <v-divider />
              <div v-if="seccion.activos.length > 0">
                <h2 class="mt-6">Activos</h2>
                <v-slide-group
                  v-model="model"
                  class="pl-3 pt-9"
                  active-class="success"
                  mobile-breakpoint="1"
                  show-arrows
                >
                  <v-slide-item
                    class="pl-3"
                    v-for="ex in seccion.activos"
                    :key="ex.id"
                  >
                    <ExerciseCard v-bind:exercise="ex" />
                  </v-slide-item>
                </v-slide-group>
              </div>
              <div v-else>
                <h2 class="mt-6">Activos</h2>
                <v-row>
                  <v-col align="center">
                    <v-icon class="icon mb-2 mt-2" color="#6262f8" x-large
                      >mdi-weight-lifter</v-icon
                    >
                    <h3 class="mb-2 mt-2">No tienes ejercicios activos</h3>
                    <h5 class="mb-2 mt-2">
                      Toca en el boton + para crear ejercicios
                    </h5>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-container>
          <br /><br />
        </v-col>
      </v-row>
      <create />
    </v-container>
  </v-main>
</template>

<script>
import RoutineCard from "../components/RoutineCard";
import ExerciseCard from "../components/ExerciseCard";
import Create from "../components/Create";
import { mapState, mapActions, mapGetters } from "vuex";
//import CardExercise from "../components/cardExercise.vue";
//import {CategoryApi} from '../api/category'

export default {
  name: "Home",
  data() {
    return {
      secciones: undefined,
      model: undefined,
      destacados: [],
    };
  },
  components: { RoutineCard, Create, ExerciseCard },
  computed: {
    ...mapState("security", {
      user: (state) => state.user,
    }),
    ...mapState("security", { $token: (state) => state.token }),
    ...mapGetters("security", { $isLoggedIn: "isLoggedIn" }),
    ...mapState("exercises", {
      exercises: (state) => state.exercises,
    }),
    ...mapState("routines", {
      routines: (state) => state.routines,
      myRoutines: (state) => state.myRoutines,
    }),
  },
  async created() {
    await this.$getAll();
    await this.$getAllEx();
    await this.$getMines();
    let restArray = this.exercises.filter((ex) => ex.type === "rest");
    let activosArray = this.exercises.filter((ex) => ex.type === "exercise");
    this.secciones = [
      { title: "Destacados", type: "rutina", arr: this.destacados },
      { title: "Mis rutinas", type: "rutina", arr: this.myRoutines },
      {
        title: "Mis ejercicios",
        type: "ejercicio",
        arr: this.exercises,
        descansos: restArray,
        activos: activosArray,
      },
    ];
  },
  methods: {
    ...mapActions("exercises", { $getAllEx: "getAll" }),
    ...mapActions("routines", {
      $createRoutine: "create",
      $getAll: "getAll",
      $getMines: "getMines",
    }),
  },
};
</script>

<style scoped>
.botom-line {
  text-align: left;
  border-bottom: 5px solid #6262f8;

  margin-bottom: 10px;
  padding: 0 40px; /* or how longer you want */
  width: 20em;
  padding-bottom: 10px;
}
.texto {
  text-align: left;
}
.no-margen {
  margin: 0;
}
</style>
