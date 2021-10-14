<template>
  <v-dialog v-model="ExcerciseDialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Ejercicio
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Tu nuevo ejercicio</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Nombre*"
                v-model="exName"
                :rules="rules.name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                :rules="rules.desc"
                v-model="exDesc"
                label="Descripcion*"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indica campos obligatorios</small>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col>
            <v-btn color="#6262f8" text @click="ExcerciseDialog = false">
              Cancelar
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              :disabled="validFields"
              color="primary"
              @click="ExcerciseDialog = false"
            >
              Guardar
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "createExercise",
  data: () => ({
    exName: "",
    exDesc: "",
    createDialog: false,
    ExcerciseDialog: false,
    createRoutineDialog: false,
    createRoutineDialogStep2: false,
    rules: {
      name: [(val) => (val || "").length > 0 || "Campo obligatorio"],
      desc: [(val) => (val || "").length > 0 || "Campo obligatorio"],
    },
  }),
  computed: {
    validFields() {
      return this.exName === "" || this.exDesc === "";
    },
  },
};
</script>
