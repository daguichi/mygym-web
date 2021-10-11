<template>
  <v-card class="rounded-xl">
  <v-card-title>tu nueva rutina</v-card-title>
  <v-card-text>
    <v-row class="pa-2">
      <v-text-field
          label="Nombre*"
          required
      ></v-text-field>
    </v-row>
    <v-row class="pa-2">
      <v-text-field
          label="Duración*"
          outlined
          rounded
          value="00:00:00"
          type="time"
          required
          hide-details
      ></v-text-field>
    </v-row>
    <v-row class="pa-2">
      <v-autocomplete
          v-model="selected"
          chips
          label="Grupos musculares"
          outlined
          rounded
          hide-details
          hide-no-data
          hide-selected
          multiple
          single-line
      ></v-autocomplete>
    </v-row>
    <v-row class="pa-2">
      <v-autocomplete
          ref="Color"
          reverse
          outlined
          rounded
          v-model="ColorDeFondo"
          :rules="[
                          () => !!coloresDeFondo || 'Este campo es obligatorio',
                        ]"
          :items="coloresDeFondo"
          label="Color de fondo"
          placeholder="Seleccione un color..."
          required
      ></v-autocomplete>
    </v-row>
    <v-row class="pa-2">
      <v-btn
          color="blue darken-1"
          text
          @click="createRoutineDialog = false"
      >
        Cancelar
      </v-btn>
      <v-spacer></v-spacer>
      <v-dialog
          v-model="createRoutineDialogStep2"
          persistent
          max-width="600px"
          transition="v-slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
          >Siguiente</v-btn>
        </template>
        <v-card class="rounded-xl">
          <v-card-title> Entrada en calor</v-card-title>
          <v-card-subtitle><u>Repeticiones:</u> 3</v-card-subtitle>

          <v-btn @click="createRoutineDialogStep2=false"> Atras</v-btn>

        </v-card>
      </v-dialog>

    </v-row>
  </v-card-text>
  </v-card>
</template>
<script>

export default {
  name: "CreateRoutinePopUp",
  data:()=>({
    createDialog:false,
    ExcerciseDialog:false,
    createRoutineDialog:false,
    createRoutineDialogStep2:false,
  }),


}
</script>

<style scoped>

</style>