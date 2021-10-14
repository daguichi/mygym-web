<template>
  <div>
    <v-card
      class="rounded-xl imagen mx-auto"
      max-width="430"
      height="220"
      outlined
      color="light-blue accent-2"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title
            class="text-h6"
            align="center"
            v-text="exercise.name"
          ></v-card-title>

          <v-row align="left">Detalle: {{ exercise.detail }}</v-row>
          <v-btn icon class="mr-2" @click="confirm"
                  ><v-icon color="primary" x-large rounded dark
                    >mdi-delete</v-icon
                  >
                </v-btn>
          <v-btn icon class="mr-2"
                  ><v-icon color="primary" x-large rounded dark
                    >mdi-pencil</v-icon
                  >
          </v-btn>
        </div>
      </div>
      <v-snackbar
          v-model="snackbar"
      >
        ¿Está seguro de que desea borrar el ejercicio?
        <template v-slot:action="{ attrs }">
          <v-btn
              text
              dark
              v-bind="attrs"
              @click="deleteEx"
          >
            Si
          </v-btn>
        </template>
      </v-snackbar>
    </v-card>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "ExerciseCard",
  data() {
    return {
      snackbar: false,
      dialog: false,
    };
  },
  props: { exercise: Object },
  methods: {
    ...mapActions("exercises", {$delete: "delete", $getMines: "getMines"}),
    onClose() {
      this.dialog = false;
    },
    async deleteEx() {
      await this.$delete(this.exercise)
      await this.$getMines();
      this.snackbar = false;
    },
    confirm() {
      this.snackbar = true;
    }
  },
  
};
</script>

<style scoped>
.imagen {
  background: rgb(55, 43, 255);
  background: linear-gradient(
    43deg,
    rgba(55, 43, 255, 1) 0%,
    rgba(28, 109, 173, 1) 58%,
    rgba(0, 212, 255, 1) 100%
  );
}

.microText {
  font-size: 0.65em;
}
</style>