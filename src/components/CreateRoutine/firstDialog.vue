<template>
  <v-dialog v-model="createRoutineDialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Rutina
      </v-btn>
    </template>
    <v-card class="rounded-xl">
      <v-card-title>tu nueva rutina</v-card-title>
      <v-card-text>
        <v-row class="pa-2">
          <v-text-field
            v-model="nameRoutine"
            label="Nombre*"
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
            label="Descripcion"
          ></v-textarea>
        </v-row>
        <!--
        <v-row class="pa-2">
          <v-text-field
            v-model="duracion"
            label="Duración*"
            outlined
            rounded
            value="00:00:00"
            type="time"
            required
            hide-details
          ></v-text-field>
        </v-row>
        -->
        <!-- 
          <v-row class="pa-2">
            <v-autocomplete
              v-model="selected"
              chips
              label="Grupos musculares"
              outlined
              rounded
              hide-details
              hide-no-data
              hide-selected
              multiple
              :items="muscleGroups"
            >asdas
            </v-autocomplete>
          </v-row> -->
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
            <v-btn color="blue darken-1" text @click="cancelRoutine">
              <!-- LLAMAR METODOS PARA CANCELAR RUTINA -->
              Cancelar
            </v-btn>
          </v-col>
          <v-col>
            <calentamiento-step
              :steps="steps"
              @save="onSave"
            ></calentamiento-step>
            <!-- <v-btn @click="nextDialog"> Siguiente</v-btn> -->
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import calentamientoStep from "./calentamientoStep.vue";
export default {
  components: { calentamientoStep },
  name: "firstDialog",
  props: {
    title: String,
    imgUrl: URL,
  },

  data() {
    return {
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
    };
  },
  methods: {
    nextDialog() {
      this.$emit(
        "nextDialog",
        this.nameRoutine,
        this.detailRoutine,
        this.diff,
        this.steps,
        this.reps,
        this.col
      );
    },
    cancelRoutine() {
      this.createRoutineDialog = false;
      this.$emit("cancelRoutine");
    },

    onSave(cycles, selectedExercises) {
      this.cycles = cycles;
      this.selectedExercises = selectedExercises;

      /* Aca ya tengo todo como para llamar a la api */
    },
  },
};
</script>
