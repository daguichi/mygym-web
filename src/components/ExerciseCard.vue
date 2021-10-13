<template>
  <v-card
      class="mx-auto"
      width="300"
      outlined
  >
    <v-row>
      <v-card-title>{{nombre}}</v-card-title>
      <v-col align="right">
        <v-btn icon flat>
        <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon flat>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-card-text>{{descripcion}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ExerciseCard",
  props: {
    nombre: String,
    descripcion: String
  },
};
</script>