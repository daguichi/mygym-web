<template>
  <!-- siguiente paso, comienzan los ciclos-->
  <v-dialog
    v-model="createRoutineDialogStep2"
    persistent
    max-width="900px"
    transition="v-slide-y-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">Siguiente</v-btn>
    </template>

    <!-- steppers steps -->
    <v-card class="rounded-xl" width="10000px" height="400px">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 0" step="0" editable>
            Calentamiento
          </v-stepper-step>

          <v-stepper-step
            v-for="n in steps"
            :key="n"
            :complete="e1 > n"
            :step="n"
            editable
          >
            {{ n }}º Ciclo
          </v-stepper-step>

          <v-stepper-step :complete="e1 > steps + 1" :step="steps + 1" editable>
            Enfriamiento
          </v-stepper-step>
        </v-stepper-header>

        <!-- steper contents  -->
        <v-stepper-items>
          <v-stepper-content step="0">
            <template>
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="cycleName[0]"
                      label="Nombre del ciclo"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="cycleRepetitions[0]"
                      hide-details
                      single-line
                      rounded
                      outlined
                      type="number"
                      label="repeticiones"
                      item-text="show"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-textarea
                  v-model="cycleDetail[0]"
                  class="mr-3 ml-3"
                  dense
                  outlined
                  auto-grow
                  label="Descripcion"
                ></v-textarea>
                <v-row
                  class="pl-3"
                  v-for="exercise in selectedExercises[0]"
                  :key="exercise"
                >
                  {{ exercise.name }} - segundos:{{ exercise.seconds }} -
                  repeticiones:{{ exercise.repetitions }}
                </v-row>

                <v-row>
                  <v-col>
                    <v-select
                      v-model="selectedEx"
                      :items="exercises"
                      label="elija el ejercicio"
                      rounded
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="repetitions"
                      hide-details
                      single-line
                      rounded
                      outlined
                      type="number"
                      label="repeticiones"
                      item-text="show"
                    >
                    </v-text-field> </v-col
                  ><v-col>
                    <v-text-field
                      v-model="seconds"
                      hide-details
                      single-line
                      rounded
                      outlined
                      label="segundos"
                      type="number"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col>
                    <v-btn @click="addEx(0, selectedEx, repetitions, seconds)">
                      +
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </template>
            <v-btn @click="createRoutineDialogStep2 = false"> Cancelar </v-btn>
            <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-content v-for="n in steps" :key="n" :step="n">
            <template>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="cycleName[n + 0]"
                    label="Nombre del ciclo"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="cycleRepetitions[n + 0]"
                    hide-details
                    single-line
                    rounded
                    outlined
                    type="number"
                    label="repeticiones"
                    item-text="show"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-textarea
                v-model="cycleDetail[n + 0]"
                class="mr-3 ml-3"
                dense
                outlined
                auto-grow
                label="Descripcion"
              ></v-textarea>
              <v-container>
                <v-row
                  class="pl-3"
                  v-for="exercise in selectedExercises[n + 0]"
                  :key="exercise"
                >
                  {{ exercise.name }} - segundos:{{ exercise.seconds }} -
                  repeticiones:{{ exercise.repetitions }}
                </v-row>

                <v-row>
                  <v-col>
                    <v-select
                      v-model="selectedEx"
                      :items="exercises"
                      label="elija el ejercicio"
                      rounded
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="repetitions"
                      hide-details
                      single-line
                      rounded
                      outlined
                      type="number"
                      label="repeticiones"
                      item-text="show"
                    >
                    </v-text-field> </v-col
                  ><v-col>
                    <v-text-field
                      v-model="seconds"
                      hide-details
                      single-line
                      rounded
                      outlined
                      label="segundos"
                      type="number"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col>
                    <v-btn
                      @click="addEx(n + 0, selectedEx, repetitions, seconds)"
                    >
                      +
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </template>

            <v-btn @click="e1 = n - 1">
              Anterior
            </v-btn>
            <v-btn color="primary" @click="e1 = n + 1"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-content :step="steps + 1">
            <template>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="cycleName[steps + 1]"
                    label="Nombre del ciclo"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="cycleRepetitions[steps + 1]"
                    hide-details
                    single-line
                    rounded
                    outlined
                    type="number"
                    label="repeticiones"
                    item-text="show"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-textarea
                v-model="cycleDetail[steps + 1]"
                class="mr-3 ml-3"
                dense
                outlined
                auto-grow
                label="Descripcion"
              ></v-textarea>
              <v-container>
                <v-row
                  class="pl-3"
                  v-for="exercise in selectedExercises[steps + 1]"
                  :key="exercise"
                >
                  {{ exercise.name }} - segundos:{{ exercise.seconds }} -
                  repeticiones:{{ exercise.repetitions }}
                </v-row>

                <v-row>
                  <v-col>
                    <v-select
                      v-model="selectedEx"
                      :items="exercises"
                      label="elija el ejercicio"
                      rounded
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="repetitions"
                      hide-details
                      single-line
                      rounded
                      outlined
                      type="number"
                      label="repeticiones"
                      item-text="show"
                    >
                    </v-text-field> </v-col
                  ><v-col>
                    <v-text-field
                      v-model="seconds"
                      hide-details
                      single-line
                      rounded
                      outlined
                      label="segundos"
                      type="number"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col>
                    <v-btn
                      @click="
                        addEx(steps + 1, selectedEx, repetitions, seconds)
                      "
                    >
                      +
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </template>

            <v-btn @click="e1 = steps - 1"> Anterior </v-btn>
            <v-btn color="primary" @click="save"> Continue </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
    <!-- <v-btn @click="createRoutineDialogStep2 = false"> Atras</v-btn>  -->
  </v-dialog>
</template>

<script>
export default {
  components: {},
  name: "calentamientoStep",
  props: {
    title: String,
    imgUrl: URL,
    steps: Number,
  },
  data() {
    return {
      e1: 0,
      createRoutineDialogStep2: false,

      selectedExercises: [[], [], [], [], [], []],
      exercises: ["ex1", "ex2", "ex3"],
      selectedEx: "-",
      repetitions: 0,
      seconds: 0,

      cycles: [],
      cycleName: [],
      cycleDetail: [],
      cycleRepetitions: [],
    };
  },
  methods: {
    save() {
      for (var i = 0; i <= this.steps + 1; i++) {
        var type = "exercise";
        if (i === 0) {
          type = "warmup";
        } else if (i === this.steps + 1) {
          type = "cooldown";
        }
        this.cycles.push({
          name: this.cycleName[i],
          detail: this.cycleDetail[i],
          type: type,
          order: i,
          repetitions: this.cycleRepetitions[i],
        });
      }
      this.$emit("save", this.cycles, this.selectedExercises);
    },
    addEx(cycle, name, repetitions, seconds) {
      this.selectedExercises[cycle].push({
        name: name,
        repetitions: repetitions,
        seconds: seconds,
      });
    },
  },
};
</script>
