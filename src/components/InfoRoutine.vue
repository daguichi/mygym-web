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
        <v-icon x-large>mdi-information</v-icon>
      </v-btn>
    </template>
    <v-card flat>
      <v-row justify='space-around'><v-card-title
        >{{ rutina.name }}
        <v-btn color="#6262f8" outlined>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn @click="confirm" color="#6262f8" outlined>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn @click="close" color="#6262f8" outlined>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title></v-row>
      
      <v-divider></v-divider>
      <v-card-subtitle></v-card-subtitle>
      <v-card-subtitle class="black--text"
        ><span class="font-weight-bold">Descripción: </span
        >{{ rutina.detail }}</v-card-subtitle
      >
      <v-card-subtitle class="black--text"
        ><span class="font-weight-bold">Dificultad: </span
        >{{ translateDifficulty(rutina.difficulty) }}</v-card-subtitle
      >

      <h4 class="mt-4 pl-6 mb-4">Ciclos</h4>
      <div v-if="!loading">
        <v-expansion-panels v-for="(ciclo, i) in this.ciclos" :key="ciclo.id">
          <v-expansion-panel>
            <v-expansion-panel-header>
              {{ ciclo.name }}
            </v-expansion-panel-header>

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
    snackbar: false,
    dialog: false,
    cycleExercises: [[], [], [], [], [], []],
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
    cancelActionRut: function () {
      this.$store.dispatch("changeCardID"); //es como un flag que avisa un cambio de estado
    },
    translateDifficulty: function (difficulty) {
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
    ...mapActions("routines", {
      $deleteRoutine: "delete",
      $getMines: "getMines",
    }),
    ...mapActions("cycle", { $getCycles: "getAll" }),
    ...mapActions("cycleExercise", { $getCycleExercises: "getAll" }),
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
      await this.$getCycles(this.rutina.id);
      for (let i = 0; i < this.ciclos.length; i++) {
        this.cycleExercises[i] = await this.$getCycleExercises(
          this.ciclos[i].id
        );
      }
      console.log(this.cycleExercises)
      this.loading = false;
    },
  },
  created() {},
};
</script>