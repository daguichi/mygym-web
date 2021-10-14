<template>
  <v-dialog v-model="createRoutineDialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Rutina
      </v-btn>
    </template>
    <v-form>
      <v-card class="rounded-xl">
        <v-card-title>Tu nueva rutina</v-card-title>
        <v-card-text>
          <v-row class="pa-2">
            <v-text-field
              v-model="nameRoutine"
              label="Nombre*"
              :rules="rules.name"
              required
            ></v-text-field>
          </v-row>
          <v-row
            ><v-textarea
              v-model="detailRoutine"
              class="mr-3 ml-3"
              dense
              outlined
              auto-grow
              :rules="rules.desc"
              label="Descripcion*"
            ></v-textarea>
          </v-row>
          <v-row class="pa-2">
            <v-col>
              <v-select
                v-model="col"
                :items="colores"
                label="Color"
                outlined
                rounded
                dense
                item-text="show"
                item-value="value"
                :menu-props="{ maxHeight: '400' }"
              >
              </v-select>
            </v-col>
            <v-col>
              <v-select
                v-model="diff"
                :items="dificultad"
                label="Dificultad"
                outlined
                rounded
                dense
                item-text="show"
                item-value="value"
                :menu-props="{ maxHeight: '400' }"
              ></v-select
            ></v-col>
          </v-row>
          <v-row>
            <!-- me va a servir para el stepper -->
            <v-card-text>
              <v-select
                v-model="steps"
                :items="[1, 2, 3, 4]"
                label="Numero de ciclos"
                rounded
                outlined
              ></v-select>
            </v-card-text>
          </v-row>
          <v-row class="pa-2">
            <v-col>
              <v-btn color="#6262f8" outlined @click="cancelRoutine">
                <!-- LLAMAR METODOS PARA CANCELAR RUTINA -->
                Cancelar
              </v-btn>
            </v-col>
            <v-col>
              <calentamiento-step
                :steps="steps"
                @save="onSave"
                :validForm="formIsValid"
              ></calentamiento-step>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script>
import calentamientoStep from "./calentamientoStep.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { calentamientoStep },
  name: "firstDialog",
  props: {
    title: String,
    imgUrl: URL,
  },

  data() {
    return {
      emptyName: false,
      createRoutineDialog: false,
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
      cycles: [],
      selectedExercises: [[], [], [], [], [], []],
      rules: {
        name: [(val) => (val || "").length > 0 || "Campo obligatorio"],
        desc: [(val) => (val || "").length > 0 || "Campo obligatorio"],
      },
    };
  },
  computed: {
    ...mapState("exercises", {
      exercises: (state) => state.exercises,
    }),
    formIsValid() {
      return this.nameRoutine === "" || this.detailRoutine === "";
    },
  },
  methods: {
    ...mapActions("routines", { $createRoutine: "create" }),
    ...mapActions("exercises", { $getExercises: "getAll" }),
    ...mapActions("cycle", { $createCycle: "create" }),
    ...mapActions("cycleExercise", { $createCycleExercise: "create" }),

    async onSave(cycles, selectedExercises) {
      this.cycles = cycles;
      this.selectedExercises = selectedExercises;
      const routine = await this.$createRoutine({
        name: this.nameRoutine,
        detail: this.detailRoutine,
        difficulty: this.diff,
        isPublic: true,
        metadata: null,
      });
      const routineId = routine.id;
      let cycleRes = [];
      let cycleId = [];
      for (let i = 0; i <= this.steps + 1; i++) {
        var cycle = {
          name: cycles[i].name,
          detail: cycles[i].detail,
          type: cycles[i].type,
          order: cycles[i].order + 1,
          repetitions: parseInt(cycles[i].repetitions),
        };
        cycleRes[i] = await this.$createCycle({ cycle, routineId });
        cycleId[i] = cycleRes[i].id;
      }
      for (let i = 0; i < cycleId.length; i++) {
        for (let j = 0; j < this.selectedExercises[i].length; j++) {
          let cId = parseInt(cycleId[i]);
          let ex = {
            duration: parseInt(selectedExercises[i][j].duration),
            order: selectedExercises[i][j].order + 1,
            repetitions: parseInt(selectedExercises[i][j].repetitions),
          };
          let exId = parseInt(this.checkExId(selectedExercises[i][j]));

          await this.$createCycleExercise({
            cycleId: cId,
            exerciseId: exId,
            cycleExercise: ex,
          });
        }
      }
    },
    checkExId(ex) {
      for (let i = 0; i < this.exercises.length; i++) {
        if (ex.name == this.exercises[i].name) return this.exercises[i].id;
      }
    },
    cancelRoutine() {
      this.createRoutineDialog = false;
    },
  },
  async created() {
    this.$getExercises();
  },
};
</script>
