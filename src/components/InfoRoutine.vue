<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        @click="getCycles"
        icon
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        <v-icon @click="showInfo = !showInfo" v-if="showInfo" x-large
          >mdi-information-outline</v-icon
        >
        <v-icon v-else x-large> mdi-information</v-icon>
      </v-btn>
    </template>
    <v-card flat>
      <v-row justify="space-around" align="center"
        ><v-card-title>
          <v-btn color="#6262f8" outlined @click="edit = !edit">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn @click="confirm" color="#6262f8" outlined>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn
            @click="
              close();
              showInfo = !showInfo;
            "
            color="#6262f8"
            outlined
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-btn
            v-if="edit"
            @click="save"
            color="#6262f8"
            class="ml-10"
            outlined
          >
            GUARDAR <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </v-card-title></v-row
      >

      <v-divider></v-divider>
      <div v-if="!edit">
        <v-card-title class="black--text">{{ rutina.name }}</v-card-title>
        <v-card-subtitle class="black--text"
          ><span class="font-weight-bold">Descripción: </span
          >{{ rutina.detail }}</v-card-subtitle
        >
        <v-card-subtitle class="black--text"
          ><span class="font-weight-bold">Dificultad: </span
          >{{ translateDifficulty(rutina.difficulty) }}</v-card-subtitle
        >
      </div>
      <div v-else>
        <v-card-title class="black--text">
          <v-text-field
            v-model="name"
            label="Nombre de la rutina"
          ></v-text-field>
        </v-card-title>
        <v-card-text
          ><v-text-field v-model="detail" label="Descripcion"></v-text-field>
          <v-row>
            <v-col></v-col>
            <v-col
              ><v-autocomplete
                :items="this.dificultad.map((dif) => dif.show)"
                v-model="difficulty"
                label="Dificultad"
                placeholder="Seleccione"
              ></v-autocomplete
            ></v-col>
            <v-col></v-col>
          </v-row>
        </v-card-text>
      </div>

      <h4 class="mt-4 pl-6 mb-4">Ciclos</h4>
      <div v-if="!loading">
        <v-expansion-panels v-for="(ciclo, i) in this.ciclos" :key="ciclo.id">
          <v-expansion-panel>
            <v-expansion-panel-header>
              {{ ciclo.name }}
            </v-expansion-panel-header>
            <div v-if="!edit">
              <v-expansion-panel-content>
                <v-chip class="mb-4 ma-2" dark small color="#2679CC">
                  Repeticiones del ciclo: {{ ciclo.repetitions }}</v-chip
                >
                <template v-for="ejs in cycleExercises[i]">
                  <v-card small class="mt-1" :key="ejs.exercise.id">
                    <v-row>
                      <v-col>
                        <v-card-text>{{ ejs.exercise.name }}</v-card-text>
                      </v-col>
                      <v-col> </v-col>
                      <v-spacer></v-spacer>
                      <v-col>
                        <v-card-text> Duración: {{ ejs.duration }}</v-card-text>
                      </v-col>
                      <v-col>
                        <v-card-text>
                          Repeticiones: {{ ejs.repetitions }}</v-card-text
                        >
                      </v-col>
                    </v-row>
                  </v-card>
                </template>
              </v-expansion-panel-content>
            </div>
            <div v-else>
              <v-expansion-panel-content>
                <v-row align="center" justify="center">
                  <v-col></v-col>
                  <v-col>
                    <v-text-field
                      v-model="cycleReps[i]"
                      label="Repeticiones"
                      type="number"
                    ></v-text-field>
                  </v-col>
                  <v-col></v-col>
                </v-row>

                <template v-for="(ejs, j) in cycleExercises[i]">
                  <v-card small class="mt-1" :key="ejs.exercise.id">
                    <v-row>
                      <v-col>
                        <v-card-text>{{ ejs.exercise.name }}</v-card-text>
                      </v-col>
                      <v-col> </v-col>
                      <v-spacer></v-spacer>
                      <v-col>
                        <v-card-text>
                          Duración:
                          <v-text-field
                            type="number"
                            v-model="exDur[i][j]"
                          ></v-text-field>
                        </v-card-text>
                      </v-col>
                      <v-col>
                        <v-card-text>
                          Repeticiones:
                          <v-text-field
                            type="number"
                            v-model="exReps[i][j]"
                          ></v-text-field>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-card>
                </template>
              </v-expansion-panel-content>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <v-snackbar v-model="snackbar">
        ¿Está seguro de que desea borrar la rutina?
        <template v-slot:action="{ attrs }">
          <v-btn text dark v-bind="attrs" @click="deleteRoutine"> Si </v-btn>
        </template>
      </v-snackbar>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    loading: true,
    edit: false,
    showInfo: true,
    snackbar: false,
    dialog: false,
    cycleExercises: [[], [], [], [], [], []],
    dificultad: [
      { show: "Novato", value: "rookie" },
      { show: "Principiante", value: "beginner" },
      { show: "Intermedio", value: "intermediate" },
      { show: "Avanzado", value: "advanced" },
      { show: "Experto", value: "expert" },
    ],
    name: "",
    detail: "",
    difficulty: "",
    cycleReps: [],
    exReps: [[], [], [], [], [], []],
    exDur: [[], [], [], [], [], []],
  }),
  props: {
    rutina: Object,
  },
  computed: {
    ...mapState("cycle", { ciclos: (state) => state.cycle }),
    isPrivate() {
      if (!this.showUsername) {
        return !this.rutina.isPublic;
      } else {
        return false;
      }
    },
  },
  methods: {
    cancelActionRut: function() {
      this.$store.dispatch("changeCardID"); //es como un flag que avisa un cambio de estado
    },
    translateDifficulty: function(difficulty) {
      if (difficulty == "rookie") {
        return "Novato";
      }
      if (difficulty == "beginner") {
        return "Principiante";
      }
      if (difficulty == "intermediate") {
        return "Intermedio";
      }
      if (difficulty == "advanced") {
        return "Avanzado";
      }
      if (difficulty == "expert") {
        return "Experto";
      }
    },
    traslateDifficulty(diff) {
      if (diff == "Novato") {
        return "rookie";
      }
      if (diff == "Principiante") {
        return "beginner";
      }
      if (diff == "Intermedio") {
        return "intermediate";
      }
      if (diff == "Avanzado") {
        return "advanced";
      }
      if (diff == "Experto") {
        return "expert";
      }
    },
    ...mapActions("routines", {
      $deleteRoutine: "delete",
      $getMines: "getMines",
      $modifyRoutine: "modify",
    }),
    ...mapActions("cycle", { $getCycles: "getAll", $modifyCycle: "modify" }),
    ...mapActions("cycleExercise", {
      $getCycleExercises: "getAll",
      $modifyCycleExercise: "modify",
    }),
    close() {
      this.dialog = false;
    },
    confirm() {
      this.snackbar = true;
    },
    async deleteRoutine() {
      await this.$deleteRoutine(this.rutina);
      await this.$getMines();
      this.snackbar = false;
    },
    async getCycles() {
      this.name = this.rutina.name;
      this.detail = this.rutina.detail;
      this.difficulty = this.translateDifficulty(this.rutina.difficulty);
      await this.$getCycles(this.rutina.id);

      for (let i = 0; i < this.ciclos.length; i++) {
        this.cycleExercises[i] = await this.$getCycleExercises(
          this.ciclos[i].id
        );
        this.cycleReps[i] = this.ciclos[i].repetitions;
        for (let j = 0; j < this.cycleExercises[i].length; j++) {
          this.exReps[i][j] = this.cycleExercises[i][j].repetitions;
          this.exDur[i][j] = this.cycleExercises[i][j].duration;
        }
      }
      this.loading = false;
    },
    async save() {
      this.difficulty = this.traslateDifficulty(this.difficulty);
      let newRoutine = {
        name: this.name,
        detail: this.detail,
        difficulty: this.difficulty,
        metadata: this.rutina.metadata,
        isPublic: this.rutina.isPublic,
      };
      console.log(this.ciclos);
      console.log(this.ciclos.length);
      await this.$modifyRoutine({
        routineId: this.rutina.id,
        routine: newRoutine,
      });

      /*
      for(let i = 0; i < this.ciclos.length; i++) {
        let newCycle = {
          name: this.ciclos[i].name,
          detail: this.ciclos[i].detail,
          type: this.ciclos[i].type,
          order:  this.ciclos[i].order,
          repetitions:  this.cycleReps[i],
          metadata: null
        }
        console.log(newCycle);
        await this.$modifyCycle({routineId: this.rutina.id, cycleId: this.ciclos[i].id, cycle: newCycle});
        for(let j = 0; j < this.cycleExercises[i].length; j++) {
          let newEx = {
            order:  this.cycleExercises[i][j].order,
            repetitions: parseInt(this.cycleExercises[i][j].repetitions),
            duration: parseInt(this.cycleExercises[i][j].duration)
          }
          await this.$modifyCycleExercise({cycleId: this.ciclos[i].id, exerciseId: this.cycleExercises[i][j].id, cycleExercise: newEx });
        }
      }
      this.edit = !this.edit;
      */
    },
  },
};
</script>
