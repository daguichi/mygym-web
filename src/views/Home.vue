<template>
  <v-app>
      <navBar actualPage="home"></navBar>
      <!--      no se pq pero hay que meter un br aca pq sino la lavbar tapa la palabra destacados-->
    <br>
    <br>
    <br>
    <v-container>

    <v-row><p class="font-weight-black">destacados</p></v-row>
    <v-row>
      <v-col
          v-for="n in 3"
          :key="n"
          cols="4"
      >
        <ExcercisesCard></ExcercisesCard>
      </v-col>
    </v-row>
    <v-row><p class="font-weight-black">mis rutinas</p></v-row>
      <v-row>

      <v-col
          v-for="n in 3"
          :key="n"
          cols="4"
      >
        <ExcercisesCard></ExcercisesCard>

      </v-col>
    </v-row>
    <v-row><p class="font-weight-black">rutinas realizadas</p></v-row>
    <v-row>

      <v-col
          v-for="n in 3"
          :key="n"
          cols="4"
      >
        <ExcercisesCard></ExcercisesCard>

      </v-col>
    </v-row>
  </v-container>
  </v-app>
</template>

<script>
import navBar from "../components/navBar";
import ExcercisesCard from "../components/ExcercisesCard";
export default {
  name: "Home",
  components:{navBar,ExcercisesCard}
}
</script>

<style scoped>

</style>