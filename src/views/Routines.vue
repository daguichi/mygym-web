<template>
  <v-app>
      <navBar actualPage="rutinas"></navBar>
      <!--      no se pq pero hay que meter un br aca pq sino la lavbar tapa la palabra destacados-->
  </v-app>
</template>

<script>
import navBar from "../components/navBar";
export default {
  name: "Routines",
  components:{navBar}
}
</script>

<style scoped>

</style>