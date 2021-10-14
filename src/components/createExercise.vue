<template>
  <v-dialog v-model="exerciseDialog" persistent max-width="600px">
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
            <v-col>
              <v-text-field
                label="Nombre*"
                maxlength="25"
                counter
                v-model="exName"
                :rules="rules.name"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select
                v-model="exType"
                :items="types"
                label="tipo de ejercicio"
                outlined
                rounded
                dense
                item-text="show"
                item-value="value"
                :rules="rules.ex"
                :menu-props="{ maxHeight: '400' }"
              >
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                :rules="rules.desc"
                v-model="exDesc"
                label="Descripcion*"
                maxlength="200"
                counter
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
            <v-btn
              color="#6262f8"
              outlined
              @click="
                exerciseDialog = false;
                clearFields();
              "
            >
              Cancelar
            </v-btn>
          </v-col>
          <v-col>
            <v-btn :disabled="validFields" color="primary" @click="save">
              Guardar
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar" color="success"
      ><v-icon class="save">mdi-check</v-icon>
      Ejercicio agregado correctamente
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="close">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "createExercise",
  data: () => ({
    snackbar: false,
    exName: "",
    exDesc: "",
    exType: "",
    types: [
      { show: "Ejercicio", value: "exercise" },
      { show: "Descanso", value: "rest" },
    ],
    exerciseDialog: false,
    rules: {
      name: [
        (val) =>
          (val || "").length > 0 || val === undefined || "Campo obligatorio",
      ],
      desc: [
        (val) =>
          (val || "").length > 0 || val === undefined || "Campo obligatorio",
      ],
      ex: [
        (val) =>
          (val || "").length > 0 || val === undefined || "Campo obligatorio",
      ],
    },
  }),
  computed: {
    validFields() {
      return (
        this.exName === "" ||
        this.exName === undefined ||
        this.exDesc === "" ||
        this.exDesc === undefined ||
        this.exType === "" ||
        this.exType === undefined
      );
    },
  },
  methods: {
    ...mapActions("exercises", { $createExercise: "create" }),
    ...mapActions("security", { $getUser: "getCurrentUser" }),
    async save() {
      let user = await this.$getUser();
      let userId = { id: user.id };
      let newEx = {
        name: this.exName,
        detail: this.exDesc,
        type: this.exType,
        metadata: userId,
      };
      await this.$createExercise(newEx);
      this.snackbar = true;
    },
    clearFields() {
      this.exName = undefined;
      this.exDesc = undefined;
      this.exType = undefined;
    },
    close() {
      this.clearFields();
      this.exerciseDialog = false;
      this.snackbar = false;
    },
  },

  /*
  name*	string
  maxLength: 100
  detail*	string
  maxLength: 200
  type*	string
  Enum:
  [ exercise, rest ]
  metadata	objectnull
*/
};
</script>
