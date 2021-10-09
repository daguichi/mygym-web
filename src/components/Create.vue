<template>
  <div>
  <v-row >
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
              color="light"
              v-bind="attrs"
              v-on="on"
              x-large
          >
            <v-icon color="blue">mdi-plus</v-icon>
          </v-btn>
        </div>

      </template>

      <v-card >
        <v-card-title>
          <span class="text-h5">Qué desea crear:</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <template>
                  <v-row justify="center">
                    <v-dialog
                        v-model="ExcerciseDialog"
                        persistent
                        max-width="600px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                        >
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
                              <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                              >
                                <v-text-field
                                    label="Nombre*"
                                    required
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                    label="Descripcion*"
                                    required
                                ></v-text-field>
                              </v-col>
                              <v-col
                                  cols="12"
                                  sm="6"
                              >
                                <v-select
                                    :items="['0-17', '18-29', '30-54', '54+']"
                                    label="Dificultad*"
                                    required
                                ></v-select>
                              </v-col>
                              <v-col
                                  cols="12"
                                  sm="6"
                              >
                                <v-autocomplete
                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                    label="Categoria*"
                                    multiple
                                ></v-autocomplete>
                              </v-col>
                            </v-row>
                          </v-container>
                          <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                              color="blue darken-1"
                              text
                              @click="ExcerciseDialog = false"
                          >
                            Close
                          </v-btn>
                          <v-btn
                              color="blue darken-1"
                              text
                              @click="ExcerciseDialog = false"
                          >
                            Save
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
                </template>
              </v-col>
              <v-col>
                <v-dialog
                    v-model="createRoutineDialog"
                    persistent
                    max-width="600px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                    >
                      Rutina
                    </v-btn>
                  </template>
                <CreateRoutinePopUp >
                </CreateRoutinePopUp>
                </v-dialog>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              color="blue darken-1"
              text
              @click="createDialog = false"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </v-row>
  </div>
</template>


<script>
import CreateRoutinePopUp from "./CreateRoutinePopUp";
export default{
  components: {CreateRoutinePopUp},
  data:()=>({
    createDialog:false,
    ExcerciseDialog:false,
    createRoutineDialog:false,
    createRoutineDialogStep2:false,
  }),
  methods: {
    setCreateRoutineDialogFalse(){
      "createRoutineDialog =false"
    }
  }
}
</script>

<style scoped>
.fab-container {
  position: fixed;
  bottom: 40px;
  right: 15px;
}
</style>