<template>
  <v-main class="grey lighten-3 fill-height">
    <v-container>
      <v-row v-for="seccion in secciones" :key="seccion.title">
        <v-col>
          <h1 class="pt-5 texto">{{ seccion.title }}</h1>
          <div class="botom-line"></div>
          <v-container>
            <div v-if="seccion.arr.length > 0">
              <div v-if="seccion.type === 'rutina'">
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
              </div>
              <div v-else-if="seccion.type === 'ejercicio'"> 
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
                  <h2>Activos</h2>
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
            </div>
            <div v-else>
              <v-row>
                <v-col align="center">
                  <v-icon class="icon mb-2 mt-2" color="#6262f8" x-large
                    >mdi-weight-lifter</v-icon
                  >
                  <h3 class="mb-2 mt-2">No tienes rutinas todavia</h3>
                  <h5 class="mb-2 mt-2">
                    Toca en el boton + para crear ejercicios
                  </h5>
                </v-col>
              </v-row>
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
    }),
  },
  async created() {
    await this.$getAll();
    await this.$getAllEx();
    let restArray = this.exercises.filter(ex => ex.type === 'rest')
    let activosArray = this.exercises.filter(ex => ex.type === 'exercise')
    console.log(restArray, activosArray)
    this.secciones = [
      { title: "Destacados", type: "rutina", arr: this.routines },
      { title: "Mis rutinas", type: "rutina", arr: this.routines },
      { title: "Mis ejercicios", type: "ejercicio", arr: this.exercises, descansos: restArray , activos: activosArray},
    ];
    console.log(this.routines);
  },
  methods: {
    ...mapActions("exercises", { $getAllEx: "getAll" }),
    ...mapActions("routines", { $createRoutine: "create", $getAll: "getAll" }),
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
</style>
