<template>
  <div>
    <v-row>
      <v-dialog
        v-model="createDialog"
        persistent
        max-width="600px"
        overlay-color="primary"
      >
        <template v-slot:activator="{ on, attrs }">
          <div class="fab-container">
            <v-btn
              fab
              bottom
              absolute
              right
              color="#6262f8"
              v-bind="attrs"
              v-on="on"
              x-large
            >
              <v-icon color="white">mdi-plus</v-icon>
            </v-btn>
          </div>
        </template>

        <v-card>
          <v-card-title>
            <span class="text-h5">Qué desea crear:</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <create-exercise></create-exercise>
                </v-col>
                <v-col>
                  <CreateRoutinePopUp> </CreateRoutinePopUp>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="#6262f8" outlined @click="createDialog = false">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import CreateExercise from "./createExercise.vue";
import CreateRoutinePopUp from "./CreateRoutine/CreateRoutinePopUp";
export default {
  components: { CreateRoutinePopUp, CreateExercise },
  data: () => ({
    createDialog: false,
    ExcerciseDialog: false,
    createRoutineDialog: false,
    createRoutineDialogStep2: false,
  }),
  methods: {
    setCreateRoutineDialogFalse() {
      "createRoutineDialog = false";
    },
  },
};
</script>

<style scoped>
.fab-container {
  position: fixed;
  bottom: 90px;
  right: 35px;
}
</style>
