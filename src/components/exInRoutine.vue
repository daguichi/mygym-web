<template>
  <v-card elevation="1" width="500px">
    <v-row>
      <v-col align-self="center">
        <v-card-text>{{nombre}}</v-card-text>
      </v-col>
      <v-col align-self="center">
        <v-card-text>{{cant}} repeticiones</v-card-text>
      </v-col>
      <v-col align-self="center">
        <v-card-text>{{tiempo}} segundos</v-card-text>
      </v-col>
      <v-col align-self="center">
        <v-btn icon color="#6262f8"><v-icon>mdi-close</v-icon></v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "exInRoutine",
  props:{
    nombre: String,
    cant: Number,
    tiempo: Number,
  },
}
</script>

<style scoped>

</style>