<template>
  <div>
    <v-card
      class="mx-auto my-12 rounded-xl imagen"
      width="300"
      color="blue lighten-3"
      elevation="2"
      outlined
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <div v-if="!edit">
        <v-card-title class="justify-center font-weight-bold">{{
          exercise.name
        }}</v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1">
            {{ showType }}
          </div>

          <div class="font-italic">
            {{ exercise.detail }}
          </div>
        </v-card-text>
      </div>
      <div v-else>
        <v-card-title class="justify-center font-weight-bold">
          <v-text-field
            v-model="name"
            label="Nombre*"
            maxlength="25"
            counter
            :rules="this.rules.name"
          ></v-text-field>
        </v-card-title>
        <v-card-text>
          <v-autocomplete
            v-model="type"
            :items="this.tipos.map((tipo) => tipo.show)"
            label="Tipo*"
            placeholder="Seleccione"
          ></v-autocomplete>
          <v-text-field
            v-model="detail"
            label="Descripcion*"
            maxlength="25"
            counter
            :rules="this.rules.detail"
          ></v-text-field>
        </v-card-text>
      </div>
      <v-card-actions>
        <v-row class="mt-2 mb-4" justify="space-around"
          ><v-btn color="deep-purple" text @click="confirm">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn
            :disabled="name === '' || detail === ''"
            v-if="edit"
            color="blue darken-4"
            @click="save"
            >GUARDAR</v-btn
          >
          <v-btn color="deep-purple " text @click="edit = !edit"
            ><v-icon v-if="!edit" rounded color="deep-purple " v>
              mdi-pencil-outline</v-icon
            >
            <v-icon v-else rounded outlined> mdi-pencil</v-icon>
          </v-btn>
        </v-row>
      </v-card-actions>

      <v-snackbar v-model="confirmSnack">
        ¿Está seguro de que desea borrar el ejercicio?
        <template v-slot:action="{ attrs }">
          <v-btn text dark v-bind="attrs" @click="deleteEx"> Si </v-btn>
          <v-btn text dark v-bind="attrs" @click="confirmSnack = false">
            No
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar v-model="error" color="error">
        Complete los campos obligatorios
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="error = false"> Cerrar </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar v-model="success" color="success"
        ><v-icon>mdi-check</v-icon>
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
      name: "",
      type: "",
      detail: "",
      confirmSnack: false,
      success: false,
      error: false,
      dialog: false,
      edit: false,
      tipos: [
        { show: "Descanso", value: "rest" },
        { show: "Ejercicio", value: "exercise" },
      ],
      rules: {
        name: [(val) => (val || "").length > 0 || "Campo obligatorio"],
        detail: [(val) => (val || "").length > 0 || "Campo obligatorio"],
      },
    };
  },
  computed: {
    showType() {
      if (this.exercise.type === "exercise") return "Ejercicio";
      return "Descanso";
    },
  },
  props: { exercise: Object },
  methods: {
    ...mapActions("exercises", {
      $deleteExercise: "delete",
      $getMines: "getMines",
      $modifyExercise: "modify",
    }),
    onClose() {
      this.dialog = false;
    },
    async deleteEx() {
      await this.$deleteExercise(this.exercise);
      await this.$getMines();
      this.confirmSnack = false;
    },
    confirm() {
      this.confirmSnack = true;
    },
    modifySuccess() {},
    async save() {
      let toSaveType = "";
      if (this.type == "Ejercicio") toSaveType = "exercise";
      else toSaveType = "rest";
      let newExercise = {
        id: this.exercise.id,
        name: this.name,
        detail: this.detail,
        type: toSaveType,
      };
      await this.$modifyExercise(newExercise);
      this.success = true;
      this.edit = !this.edit;
      await this.$getMines();
      await 2;
      this.$router.go();
    },
  },
  created() {
    this.name = this.exercise.name;
    this.detail = this.exercise.detail;
    if (this.exercise.type == "exercise") this.type = "Ejercicio";
    else this.type = "Descanso";
  },
};
</script>

<style scoped>
.imagen {
  background: rgb(193, 193, 204);
  background: linear-gradient(
    43deg,
    rgba(193, 193, 204, 1) 0%,
    rgba(138, 196, 196, 1) 60%,
    rgba(76, 181, 203, 1) 93%
  );
  /* 
  NICE PINK 
   background: rgb(193, 193, 204);
  background: linear-gradient(
    43deg,
    rgba(193, 193, 204, 1) 0%,
    rgba(211, 140, 232, 1) 60%,
    rgba(158, 114, 236, 1) 93%
  ); */
}
.titulo {
  margin-left: 50%;
}

.microText {
  font-size: 0.65em;
}

.icons {
  margin-top: 10px;
}
</style>
