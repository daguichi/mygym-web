<template>
  <div>
    <v-card
      class="rounded-xl imagen mx-auto"
      max-width="430"
      outlined
      color="light-blue accent-2"
    >
      <div>
        <v-row align="center" justify="space-around" >
          <v-col cols="7">
            <h2 v-if="!edit">{{ exercise.name }}</h2>
            <v-text-field
              v-else
              :value="exercise.name"
              label="nombre"
              outlined
              readonly
              rounded
              class="pl-3 pt-5"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-icon @click="confirm" large> mdi-delete </v-icon>
          </v-col>
          <v-col>
            <v-icon @click="edit = !edit" large> mdi-file-edit-outline </v-icon>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="font-italic">
          <v-col>
            <v-textarea
              outlined
              readonly
              class="pl-2"
              name="input-7-4"
              label="Descripción"
              :value="exercise.detail"
            ></v-textarea>
            <!-- <v-text-field
                :value="exercise.detail"
                label="detalle"
                outlined
                readonly
                rounded
                class="mb-3 pl-2"
              ></v-text-field> -->
          </v-col>
          <v-col
            ><v-text-field
              :value="exercise.type"
              label="tipo"
              outlined
              readonly
              rounded
              class="mb-3 pr-2"
            ></v-text-field
          ></v-col>
        </v-row>
      </div>

      <v-snackbar v-model="confirmSnack">
        ¿Está seguro de que desea borrar el ejercicio?
        <template v-slot:action="{ attrs }">
          <v-btn text dark v-bind="attrs" @click="deleteEx"> Si </v-btn>
          <v-btn text dark v-bind="attrs" @click="confirmSnack = false"> No </v-btn>
        </template>
      </v-snackbar>
      
      <v-snackbar v-model="error" color="error">
        Complete los campos obligatorios
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="error = false">
            Cerrar
          </v-btn>
        </template>
      </v-snackbar>
      
      <v-snackbar v-model="success" color="success"
        ><v-icon class="save">mdi-check</v-icon>
        Se ha modificado el ejerciico correctamente
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="success = false"> Cerrar </v-btn>
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
      confirmSnack: false,
      success: false,
      error: false,
      dialog: false,
      edit: false,
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
      this.confirmSnack = false;
    },
    confirm() {
      this.confirmSnack = true;
    },
    modifySuccess() {

    }
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
