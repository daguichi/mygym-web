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
            <!-- me va a servir para el stepper -->
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
                <!-- LLAMAR METODOS PARA CANCELAR RUTINA -->
                Cancelar
              </v-btn>
            </v-col>
            <v-col> </v-col>
            <!-- siguiente paso, comienzan los ciclos-->
            <v-dialog
              v-model="createRoutineDialogStep2"
              persistent
              max-width="900px"
              transition="v-slide-y-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on"
                  >Siguiente</v-btn
                >
              </template>

              <!-- calentamiento step -->
              <v-card class="rounded-xl">
                <v-stepper v-model="e1">
                  <v-stepper-header>
                    <v-stepper-step
                      :key="`calentamiento-step`"
                      :step="0"
                      editable
                    >
                      Calentamiento
                    </v-stepper-step>
                    <!-- n step -->
                    <v-divider v-if="n !== steps" :key="n"></v-divider>
                    <template v-for="n in steps">
                      <v-stepper-step :key="`${n}-step`" :step="n" editable>
                        {{ n }}º Ciclo
                      </v-stepper-step>
                      <v-divider v-if="n !== steps" :key="n"></v-divider>
                    </template>
                    <v-divider v-if="n !== steps" :key="n"></v-divider>
                    <v-stepper-step
                      :key="`enfriemiento-step`"
                      :step="steps + 1"
                      editable
                    >
                      Enfriamiento
                    </v-stepper-step>
                  </v-stepper-header>
                  <!-- calentamiento content  -->
                  <v-stepper-items>
                    <v-stepper-content :key="`calentamiento-content`" :step="0">
                      <v-card
                        class="mb-12"
                        color="grey lighten-1"
                        height="200px"
                        elevation="0"
                      >
                        <v-list
                          two-line
                          style="max-height:250px"
                          class="overflow-y-auto"
                        >
                          <v-list-item-group
                            v-model="selected[0]"
                            active-class="grey--text"
                            multiple
                            ><template v-for="(excersise, index) in excersises">
                              <v-row v-bind:key="excersise.id">
                                <v-col>
                                  <v-list-item :key="excersise.id">
                                    <template v-slot:default="{ active }">
                                      <v-list-item-content>
                                        <v-list-item-title
                                          v-text="excersise.nombre"
                                        ></v-list-item-title>
                                      </v-list-item-content>
                                      <v-list-item-action>
                                        <v-icon
                                          v-if="active"
                                          color="grey lighten-1"
                                        >
                                          mdi-check
                                        </v-icon>
                                      </v-list-item-action>
                                    </template>
                                  </v-list-item>
                                  <v-divider
                                    v-if="index < excersise.length - 1"
                                    :key="index"
                                  ></v-divider>
                                </v-col>

                                <v-col>
                                  <v-select
                                    v-model="reps"
                                    :items="repeticiones"
                                    label="repeticiones"
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
                                    v-model="segs"
                                    :items="segundos"
                                    label="segundos"
                                    outlined
                                    rounded
                                    dense
                                    item-text="show"
                                    item-value="value"
                                    :menu-props="{ maxHeight: '400' }"
                                  ></v-select>
                                </v-col> </v-row></template
                          ></v-list-item-group>
                        </v-list>
                      </v-card>
                    </v-stepper-content>

                    <!-- n content  -->
                    <v-stepper-content
                      v-for="n in steps"
                      :key="`${n}-content`"
                      :step="n"
                    >
                      <v-card
                        class="mb-12"
                        color="grey lighten-1"
                        height="200px"
                        elevation="0"
                      >
                        <v-list
                          two-line
                          style="max-height:250px"
                          class="overflow-y-auto"
                        >
                          <v-list-item-group
                            v-model="selected[n]"
                            active-class="grey--text"
                            multiple
                          >
                            <template v-for="(excersise, index) in excersises">
                              <v-row v-bind:key="excersise.id">
                                <v-col>
                                  <v-list-item :key="excersise.id">
                                    <template v-slot:default="{ active }">
                                      <v-list-item-content>
                                        <v-list-item-title
                                          v-text="excersise.nombre"
                                        ></v-list-item-title>
                                      </v-list-item-content>
                                      <v-list-item-action>
                                        <v-icon
                                          v-if="active"
                                          color="grey lighten-1"
                                        >
                                          mdi-check
                                        </v-icon>
                                      </v-list-item-action>
                                    </template>
                                  </v-list-item>
                                  <v-divider
                                    v-if="index < excersise.length - 1"
                                    :key="index"
                                  ></v-divider>
                                </v-col>
                                <v-col>
                                  <v-select
                                    v-model="reps"
                                    :items="repeticiones"
                                    label="repeticiones"
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
                                    v-model="segs"
                                    :items="segundos"
                                    label="segundos"
                                    outlined
                                    rounded
                                    dense
                                    item-text="show"
                                    item-value="value"
                                    :menu-props="{ maxHeight: '400' }"
                                  ></v-select>
                                </v-col>
                              </v-row>
                            </template>
                          </v-list-item-group>
                        </v-list>
                      </v-card>
                    </v-stepper-content>
                    <!-- enfriamiento content -->
                    <v-stepper-content
                      :key="`enfriamiento-content`"
                      :step="steps + 1"
                    >
                      <v-card
                        class="mb-12"
                        color="grey lighten-1"
                        height="200px"
                        elevation="0"
                      >
                        <v-list
                          two-line
                          style="max-height:250px"
                          class="overflow-y-auto"
                        >
                          <v-list-item-group
                            v-model="selected[steps + 1]"
                            active-class="grey--text"
                            multiple
                          >
                            <template v-for="(excersise, index) in excersises">
                              <v-row v-bind:key="excersise.id">
                                <v-col>
                                  <v-list-item :key="excersise.id">
                                    <template v-slot:default="{ active }">
                                      <v-list-item-content>
                                        <v-list-item-title
                                          v-text="excersise.nombre"
                                        ></v-list-item-title>
                                      </v-list-item-content>
                                      <v-list-item-action>
                                        <v-icon
                                          v-if="active"
                                          color="grey lighten-1"
                                        >
                                          mdi-check
                                        </v-icon>
                                      </v-list-item-action>
                                    </template>
                                  </v-list-item>
                                  <v-divider
                                    v-if="index < excersise.length - 1"
                                    :key="index"
                                  ></v-divider>
                                </v-col>
                                <v-col>
                                  <v-select
                                    v-model="reps"
                                    :items="repeticiones"
                                    label="repeticiones"
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
                                    v-model="segs"
                                    :items="segundos"
                                    label="segundos"
                                    outlined
                                    rounded
                                    dense
                                    item-text="show"
                                    item-value="value"
                                    :menu-props="{ maxHeight: '400' }"
                                  ></v-select>
                                </v-col>
                              </v-row>
                            </template>
                          </v-list-item-group>
                          <v-btn color="primary">guardar</v-btn>
                          <!-- llamar metodo para guardar rutina -->
                        </v-list>
                      </v-card>
                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
                <v-btn @click="createRoutineDialogStep2 = false"> Atras</v-btn>
              </v-card>
            </v-dialog>
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
    reps: "-",
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
