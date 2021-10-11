<template>
  <div>
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
            <v-text-field label="Nombre*" required></v-text-field>
          </v-row>
          <v-row
            ><v-textarea
              class="mr-3 ml-3"
              dense
              outlined
              auto-grow
              label="Descripcion"
              v-model="detailRoutine"
            ></v-textarea
          ></v-row>
          <v-row class="pa-2">
            <v-text-field
              label="Duración*"
              outlined
              rounded
              value="00:00:00"
              type="time"
              required
              hide-details
              v-model="nameRoutine"
            ></v-text-field>
          </v-row>

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
            >
            </v-autocomplete>
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
              ></v-select>
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
            <v-card-text>
              <v-select
                v-model="steps"
                :items="[1, 2, 3, 4, 5]"
                label="Numero de ciclos"
                rounded
                outlined
              ></v-select>
            </v-card-text>
          </v-row>
          <v-row class="pa-2">
            <v-col>
              <v-btn
                color="blue darken-1"
                text
                @click="createRoutineDialog = false"
              >
                Cancelar
              </v-btn>
            </v-col>
            <v-col>
              <v-btn @click="createRoutine" color="primary">
                crear rutina
              </v-btn>
            </v-col>
            <!-- siguiente paso -->
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
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
    col: "Azul",
    colores: [
      { show: "Amarillo", value: "#fff00" },
      { show: "Rojo", value: "FF0000" },
      { show: "Azul", value: "#0000ff" },
    ],
    steps: 1,
    e1: 0,
    selected: {},
    excersises: [
      { nombre: "pecho plano", id: "pecho plano" },
      { nombre: "flexiones de brazo", id: "flexiones de brazo" },
      { nombre: "sentadilla", id: "sentadilla" },
    ],
    createRoutineDialog: false,
    createRoutineDialogStep2: false,
    muscleGroups: ["Gemelos", "Biceps", "triceps", "cuadriceps"],
  }),
  methods: {
    createRoutine() {
      if (this.nameRoutine) {
        return;
      }
    },
  },
};
</script>

<style scoped></style>
