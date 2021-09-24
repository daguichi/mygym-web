<template>
  <v-container>
    <v-row>destacados</v-row>
    <v-row>

      <v-col
          v-for="n in 3"
          :key="n"
          cols="4"
      >
        <v-card height="200"
        outlined
                color="blue lighten-3"></v-card>
      </v-col>
    </v-row>
    <v-row>mis rutinas</v-row>
    <v-row>

      <v-col
          v-for="n in 3"
          :key="n"
          cols="4"
      >
        <v-card height="200"
                outlined
                color="blue lighten-3"></v-card>
      </v-col>
    </v-row>
    <v-row>rutinas realizadas</v-row>
    <v-row>

      <v-col
          v-for="n in 3"
          :key="n"
          cols="4"
      >
        <v-card height="200"
                outlined
                color="blue lighten-3"></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "homePage"
}
</script>

<style scoped>

</style>