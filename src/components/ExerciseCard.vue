<template>
  <div>
    <v-card
      class="rounded-xl imagen mx-auto"
      max-width="430"
      outlined
      color="light-blue accent-2"
    >
      <div>
        <div>
          <v-row align="center" justify="center">
            <v-col>
              <v-text-field
                :value="exercise.name"
                label="nombre"
                outlined
                readonly
                rounded
                class="ma-5 pt-2"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-icon>
                mdi-delete
              </v-icon>
            </v-col>
            <v-col>
              <v-icon>
                mdi-file-edit-outline
              </v-icon>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" class="font-italic">
            <v-col>
              <v-text-field
                :value="exercise.detail"
                label="detalle"
                outlined
                readonly
                rounded
                class=" pt-2 pl-2"
              ></v-text-field>
            </v-col>
            <v-col
              ><v-text-field
                :value="exercise.type"
                label="tipo"
                outlined
                readonly
                rounded
                class=" pt-2 pr-2"
              ></v-text-field
            ></v-col>
          </v-row>
        </div>
      </div>
      <v-snackbar v-model="snackbar">
        ¿Está seguro de que desea borrar el ejercicio?
        <template v-slot:action="{ attrs }">
          <v-btn text dark v-bind="attrs" @click="deleteEx">
            Si
          </v-btn>
        </template>
      </v-snackbar>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
    ...mapActions("exercises", { $delete: "delete", $getMines: "getMines" }),
    onClose() {
      this.dialog = false;
    },
    async deleteEx() {
      await this.$delete(this.exercise);
      await this.$getMines();
      this.snackbar = false;
    },
    confirm() {
      this.snackbar = true;
    },
  },
};
</script>

<style scoped>
.imagen {
  background: rgb(76, 68, 207);
  background: linear-gradient(
    43deg,
    rgba(76, 68, 207, 1) 0%,
    rgba(154, 67, 180, 1) 60%,
    rgba(122, 92, 175, 1) 93%
  );
}
.titulo {
  margin-left: 50%;
}

.microText {
  font-size: 0.65em;
}
</style>
