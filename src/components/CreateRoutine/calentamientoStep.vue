<template>
  <!-- siguiente paso, comienzan los ciclos-->
  <v-dialog
    v-model="createRoutineDialogStep2"
    persistent
    max-width="900px"
    transition="v-slide-y-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn :disabled="validForm" color="primary" v-bind="attrs" v-on="on"
        >Siguiente</v-btn
      >
    </template>

    <!-- steppers steps -->
    <v-card class="rounded-xl" width="100%" height="600px">
      <v-stepper v-model="e1" min-height="100%">
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
                      :rules="rules.name"
                      label="Nombre del ciclo"
                      maxlength="25"
                      counter
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="cycleRepetitions[0]"
                      :rules="rules.reps"
                      hide-details
                      rounded
                      outlined
                      type="number"
                      max="100"
                      min="1"
                      onkeypress="return event.charCode >= 49"
                      label="repeticiones del ciclo"
                      item-text="show"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-textarea
                  v-model="cycleDetail[0]"
                  :rules="rules.detail"
                  class="mr-3 ml-3"
                  dense
                  outlined
                  auto-grow
                  label="Descripcion"
                  maxlength="200"
                  counter
                ></v-textarea>
                <v-row
                  class="pl-3"
                  v-for="exercise in selectedExercises[0]"
                  :key="exercise.order"
                >
                  {{ exercise.name }} - segundos:{{ exercise.duration }} -
                  repeticiones:{{ exercise.repetitions }}
                </v-row>

                <v-row>
                  <v-col>
                    <v-select
                      v-model="selectedEx"
                      :items="getExerciseNames(exercises)"
                      label="elija el ejercicio"
                      rounded
                      @change="onChange"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="repetitions"
                      :rules="rules.exReps"
                      rounded
                      outlined
                      type="number"
                      min="1"
                      max="100"
                      onkeypress="return event.charCode >= 49"
                      label="repeticiones"
                      item-text="show"
                    >
                    </v-text-field> </v-col
                  ><v-col>
                    <v-text-field
                      v-model="seconds"
                      :rules="rules.exSecs"
                      hide-details
                      rounded
                      outlined
                      label="segundos"
                      type="number"
                      min="1"
                      max="100"
                      onkeypress="return event.charCode >= 49"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col>
                    <!-- el boton queda deshabilitado si no se selecciono ninguna opcion -->
                    <v-btn
                      :disabled="isEmpty"
                      @click="addEx(0, selectedEx, repetitions, seconds)"
                    >
                      +
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </template>
            <v-row>
              <v-col>
                <v-btn color="#6262f8" outlined @click="cancel">
                  Cancelar
                </v-btn>
              </v-col>
              <v-col>
                <v-btn color="primary" @click="nextStep(1)"> Continuar </v-btn>
              </v-col>
            </v-row>
          </v-stepper-content>
          <v-stepper-content v-for="n in steps" :key="n" :step="n">
            <template>
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="cycleName[n + 0]"
                      label="Nombre del ciclo"
                      maxlength="25"
                      counter
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="cycleRepetitions[n + 0]"
                      hide-details
                      rounded
                      outlined
                      type="number"
                      min="1"
                      max="100"
                      onkeypress="return event.charCode >= 49"
                      label="repeticiones del ciclo"
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
                  maxlength="25"
                  counter
                ></v-textarea>
                <v-container>
                  <v-row
                    class="pl-3"
                    v-for="exercise in selectedExercises[n + 0]"
                    :key="exercise.order"
                  >
                    {{ exercise.name }} - segundos:{{ exercise.duration }} -
                    repeticiones:{{ exercise.repetitions }}
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-select
                        v-model="selectedEx"
                        :items="getExerciseNames(exercises)"
                        label="elija el ejercicio"
                        maxlength="25"
                        rounded
                        @change="onChange"
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="repetitions"
                        hide-details
                        rounded
                        outlined
                        type="number"
                        min="1"
                        max="100"
                        onkeypress="return event.charCode >= 49"
                        label="repeticiones"
                        item-text="show"
                      >
                      </v-text-field> </v-col
                    ><v-col>
                      <v-text-field
                        v-model="seconds"
                        hide-details
                        rounded
                        outlined
                        label="segundos"
                        min="1"
                        max="100"
                        onkeypress="return event.charCode >= 49"
                        type="number"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col>
                      <v-btn
                        :disabled="isEmpty"
                        @click="addEx(n + 0, selectedEx, repetitions, seconds)"
                      >
                        +
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-container>
            </template>
            <v-row>
              <v-col>
                <v-btn color="#6262f8" outlined @click="e1 = n - 1">
                  Anterior
                </v-btn>
              </v-col>
              <v-col>
                <v-btn color="primary" @click="nextStep(n + 1)">
                  Continuar
                </v-btn>
              </v-col>
            </v-row>
          </v-stepper-content>

          <v-stepper-content :step="steps + 1">
            <template>
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="cycleName[steps + 1]"
                      label="Nombre del ciclo"
                      maxlength="25"
                      counter
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="cycleRepetitions[steps + 1]"
                      hide-details
                      rounded
                      outlined
                      type="number"
                      min="1"
                      max="100"
                      onkeypress="return event.charCode >= 49"
                      label="repeticiones del ciclo"
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
                  maxlength="25"
                  counter
                ></v-textarea>
                <v-container>
                  <v-row
                    class="pl-3"
                    v-for="exercise in selectedExercises[steps + 1]"
                    :key="exercise.order"
                  >
                    {{ exercise.name }} - segundos:{{ exercise.duration }} -
                    repeticiones:{{ exercise.repetitions }}
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-select
                        v-model="selectedEx"
                        :items="getExerciseNames(exercises)"
                        label="elija el ejercicio"
                        rounded
                        @change="onChange"
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="repetitions"
                        hide-details
                        rounded
                        outlined
                        type="number"
                        min="1"
                        max="100"
                        onkeypress="return event.charCode >= 49"
                        label="repeticiones"
                        item-text="show"
                      >
                      </v-text-field> </v-col
                    ><v-col>
                      <v-text-field
                        v-model="seconds"
                        hide-details
                        rounded
                        outlined
                        min="1"
                        onkeypress="return event.charCode >= 49"
                        label="segundos"
                        max="100"
                        type="number"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col>
                      <v-btn
                        :disabled="isEmpty"
                        @click="
                          addEx(steps + 1, selectedEx, repetitions, seconds)
                        "
                      >
                        +
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-container>
            </template>
            <v-row>
              <v-col>
                <v-btn color="#6262f8" outlined @click="e1 = steps - 1">
                  Anterior
                </v-btn>
              </v-col>
              <v-col>
                <v-btn color="primary" @click="save"> Guardar </v-btn>
              </v-col>
            </v-row>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
    <v-snackbar v-model="continueFail" color="error">
      Debes agregar al menos un ejercicio
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="continueFail = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="snackbar" color="success"
      ><v-icon class="save">mdi-check</v-icon>
      Rutina creada correctamente
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="close">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="obligatorios" color="error">
      Complete todos los campos obligatorios
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="obligatorios = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
    <!-- <v-btn @click="createRoutineDialogStep2 = false"> Atras</v-btn>  -->
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {},
  name: "calentamientoStep",
  props: {
    title: String,
    imgUrl: URL,
    steps: Number,
    validForm: Boolean,
  },
  data() {
    return {
      rules: {
        name: [
          (val) =>
            val === undefined || (val || "").length > 0 || "Campo obligatorio",
        ],
        detail: [
          (val) =>
            val === undefined || (val || "").length > 0 || "Campo obligatorio",
        ],
        reps: [
          (val) => val >= 1 || (val || "").length > 0 || "Campo obligatorio",
        ],
        exReps: [
          (val) => val >= 1 || (val || "").length > 0 || "Campo obligatorio",
        ],
        exSecs: [
          (val) => val >= 1 || (val || "").length > 0 || "Campo obligatorio",
        ],
      },
      isEmpty: true,
      continueFail: false,
      snackbar: false,
      obligatorios: false,
      e1: 0,
      createRoutineDialogStep2: false,
      selectedExercises: [[], [], [], [], [], []],
      selectedEx: "-",
      repetitions: 1,
      seconds: 1,
      cycles: [],
      cycleName: [],
      cycleDetail: [],
      cycleRepetitions: [1, 1, 1, 1, 1, 1],
    };
  },
  computed: {
    ...mapState("exercises", {
      exercises: (state) => state.exercises,
    }),
    Empty() {
      if (this.isEmpty) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    onChange() {
      if (this.isEmpty) {
        this.isEmpty = !this.isEmpty;
      }
      if (this.selectedEx === 0) {
        this.isEmpty = false;
      }
    },
    cancel() {
      this.createRoutineDialogStep2 = false;
      this.clear();
    },
    nextStep(to) {
      if (
        this.cycleName[to - 1] === undefined ||
        this.cycleName[to - 1] === "" ||
        this.cycleDetail[to - 1] === undefined ||
        this.cycleDetail[to - 1] === "" ||
        this.cycleRepetitions[to - 1] === undefined ||
        this.cycleRepetitions[to - 1] === ""
      )
        this.obligatorios = true;
      else if (this.selectedExercises[to - 1].length === 0)
        this.continueFail = true;
      else this.e1 = to;
    },
    ...mapActions("exercises", { $getExercises: "getAll" }),
    save() {
      if (
        this.cycleName[this.steps + 1] === undefined ||
        this.cycleName[this.steps + 1] === "" ||
        this.cycleDetail[this.steps + 1] === undefined ||
        this.cycleDetail[this.steps + 1] === "" ||
        this.cycleRepetitions[this.steps + 1] === undefined ||
        this.cycleRepetitions[this.steps + 1] === ""
      )
        this.obligatorios = true;
      else if (this.selectedExercises[this.steps + 1].length === 0)
        this.continueFail = true;
      else {
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
        this.clear();
        this.snackbar = true;
      }
    },
    close() {
      this.createRoutineDialogStep2 = false;
      this.e1 = 0;
      this.$emit("closeAll");
    },
    addEx(cycle, name, repetitions, seconds) {
      if (
        repetitions === null ||
        repetitions === "" ||
        seconds === null ||
        seconds === ""
      )
        this.obligatorios = true;
      else {
        this.selectedExercises[cycle].push({
          name: name,
          repetitions: repetitions,
          duration: seconds,
          order: this.selectedExercises[cycle].length,
        });
        this.selectedEx = 0;
        this.isEmpty = !this.isEmpty;
      }
    },
    getExerciseNames() {
      let res = [];
      this.exercises.forEach((exercise) => {
        res.push(exercise.name);
      });
      return res;
    },
    clear() {
      this.selectedExercises = [[], [], [], [], [], []];
      this.selectedEx = "-";
      this.repetitions = 1;
      this.seconds = 1;
      this.cycles = [];
      this.cycleName = [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ];
      this.cycleDetail = [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ];
      this.cycleRepetitions = [1, 1, 1, 1, 1, 1];
    },
  },
  async created() {
    this.$getExercises();
  },
};
</script>
