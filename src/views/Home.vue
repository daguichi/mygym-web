<template>
  <v-app>
    <v-container>
    <navBar></navBar>
    <v-row><p class="font-weight-black">destacados</p></v-row>
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
    <v-row><p class="font-weight-black">mis rutinas</p></v-row>
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
    <v-row><p class="font-weight-black">rutinas realizadas</p></v-row>
    <v-row>

      <v-col
          v-for="n in 3"
          :key="n"
          cols="4"
      >
        <v-card height="200"
                outlined
                color="primary"></v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-app>
</template>

<script>
import navBar from "../components/navBar";
export default {
  name: "Home",
  components:{navBar}
}
</script>

<style scoped>

</style>