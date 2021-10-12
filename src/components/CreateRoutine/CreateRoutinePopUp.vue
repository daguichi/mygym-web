<template>
  <div>
    <first-dialog
      @nextDialog="onNextDialog"
      @cancelRoutine="onCancelRoutine"
    ></first-dialog>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import firstDialog from "./firstDialog.vue";
export default {
  components: { firstDialog },
  name: "CreateRoutinePopUp",
  data: () => ({
    props: ["createRoutineDialog"],
    nameRoutine: "",
    detailRoutine: "",
    diff: "rookie",
    dificultad: [
      { show: "Novato", value: "rookie" },
      { show: "Principiante", value: "beginner" },
      { show: "Intermedio", value: "intermediate" },
      { show: "Avanzado", value: "advanced" },
      { show: "Experto", value: "expert" },
    ],
    steps: 1,
    reps: "-",
    col: "Azul",
    colores: [
      { show: "Amarillo", value: "#fff00" },
      { show: "Rojo", value: "FF0000" },
      { show: "Azul", value: "#0000ff" },
    ],
    /*
    cycle: [],
    repeticiones: [
      5,
      10,
      15,
      20,
      25,
      30,
      35,
      40,
      45,
      50,
      55,
      60,
      65,
      70,
      75,
      80,
      85,
      90,
      95,
      100,
    ],
    segs: "-",
    segundos: [
      5,
      10,
      15,
      20,
      25,
      30,
      35,
      40,
      45,
      50,
      55,
      60,
      65,
      70,
      75,
      80,
      85,
      90,
      95,
      100,
    ],

    e1: 0,
    selected: {},
    excersises: [
      { nombre: "pecho plano", id: "pecho plano" },
      { nombre: "flexiones de brazo", id: "flexiones de brazo" },
      { nombre: "sentadilla", id: "sentadilla" },
    ],
    selectedExercises: [],
    createRoutineDialog: false,
    createRoutineDialogStep2: false,
    muscleGroups: ["Gemelos", "Biceps", "triceps", "cuadriceps"],
    */
  }),
  computed: {
    ...mapState("routines", {
      routines: (state) => state.routines,
    }),
  },
  methods: {
    onNextDialog(nameRoutine, detailRoutine, diff, steps, reps, col) {
      this.nameRoutine = nameRoutine;
      this.detailRoutine = detailRoutine;
      this.diff = diff;
      this.steps = steps;
      this.reps = reps;
      this.col = col;
    },
    onCancelRoutine() {
      this.nameRoutine = "";
      this.detailRoutine = "";
      this.diff = "rookie";
      this.steps = 1;
      this.reps = "-";
      this.col = "Azul";
    },
    ...mapActions("routines", { $createRoutine: "create", $getAll: "getAll" }),
    ...mapActions("cycle", { $createCycle: "create", $getAll: "getAll" }),

    async createRoutine() {
      let routine = await this.$createRoutine({
        name: this.nameRoutine,
        detail: this.detailRoutine,
        isPublic: true,
        difficulty: this.diff,
      });
      const routineId = routine.id;
      await this.$createCycle(routineId, {
        name: "Fast Warmup",
        detail: "Fast Warmup",
        type: "warmup",
        order: 1,
        repetitions: 1,
        metadata: null,
      });
      // sendExercise(excersise) {
      //  this.selectedExercises.push(excersise)
      // }
      //console.log(routineId);
    },
  },
};
</script>

<style scoped>
#sub {
  background-color: #f0f0f0;
}
</style>
