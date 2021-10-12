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
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 2">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>
          <v-stepper-content v-for="n in steps" :key="n" :step="n">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 2">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>
          <v-stepper-content :step="steps + 1">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 2">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
    <v-btn @click="createRoutineDialogStep2 = false"> Atras</v-btn> |
  </v-dialog>
</template>

<script>
export default {
  components: {},
  name: "calentamientoStep",
  props: {
    title: String,
    imgUrl: URL,
  },

  data() {
    return {
      e1: 0,
      steps: 4,
      createRoutineDialogStep2: false,
    };
  },
  methods: {
    /*
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
    */
  },
};

/*
<v-stepper-content step="0">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="800px"
              elevation="0"
            >
              <v-list two-line style="max-height:300px" class="overflow-y-auto">
                <v-subheader id="sub"
                  >Seleccione los ejercicios que quiera</v-subheader
                >
                <v-list-item-group
                  v-model="selected[0]"
                  active-class="grey--text"
                  multiple
                  ><template v-for="(excersise, index) in excersises">
                    <v-row v-bind:key="excersise.id">
                      <v-col>
                        <v-list-tile :class="'white'"></v-list-tile>
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
                                @click="imprimi"
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
                      </v-col> </v-row></template
                ></v-list-item-group>
              </v-list>
              <br />
              <!-- lista de ejercicios seleccionados -->

              <v-list>
                <!-- <v-list-title>Ejercicios seleccionados</v-list-title> -->
                <v-list-item
                  v-for="selectedExercise in selectedExercises"
                  :key="selectedExercise.id"
                >
                </v-list-item>
              </v-list>
            </v-card>

                <v-btn color="primary" @click="createRoutine">guardar</v-btn>
                <!-- llamar metodo para guardar rutina -->

            </v-card>
            */
</script>
