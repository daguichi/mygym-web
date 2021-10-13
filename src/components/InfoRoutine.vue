<template>
  <v-card flat>
    
    <v-card-title
      >{{ rutina.name }} <v-spacer></v-spacer>
      <v-btn>
        <v-icon dark>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle></v-card-subtitle>
    <v-card-subtitle class="black--text"
      ><span class="font-weight-bold">Descripción: </span
      >{{ rutina.detail }}</v-card-subtitle
    >
    <v-card-subtitle class="black--text"
      ><span class="font-weight-bold">Dificultad: </span
      >{{ translateDifficulty(rutina.difficulty) }}</v-card-subtitle>
    
    <h4 class="mt-4 pl-6 mb-4">Ciclos</h4>

    <v-expansion-panels v-for="ciclo in this.ciclos" :key="ciclo.id">
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ ciclo.name }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-chip class="mb-4 ma-2" dark small color="#2679CC"
            >x{{ ciclo.repetitions }}</v-chip
          >
          <template v-for="ejs in ciclo.ciclosEjs">
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
  </v-card>
</template>

<script>
import {mapActions, mapState} from "vuex"
export default {
  data: () => ({
    createDialog: false,
  }),
  props: {
    rutina: Object,
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
    ...mapActions("cycle", { $getCycles: "getAll" })
  },
  computed: {
    ...mapState("cycle", { ciclos: state => state.cycle}),
    isPrivate() {
      if (!this.showUsername) {
        return !this.rutina.isPublic;
      } else {
        return false;
      }
    },
  },
  async created() {
      console.log(this.rutina.id)
    await this.$getCycles(this.rutina.id)
    console.log(this.ciclos);
    console.log("hola", this.rutina, this.username);

  },
};
</script>