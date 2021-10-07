<template>
  <v-app>
    <navBar actualPage="favoritos"></navBar>
    <br><br><br><br>
    <GoBack />
      <!--      no se pq pero hay que meter un br aca pq sino la lavbar tapa la palabra destacados-->
  </v-app>
</template>

<script>
import navBar from "../components/navBar";
import GoBack from "@/components/GoBack";

export default {
  name: "Favorites",
  components:{navBar,
  GoBack}
}
</script>

<style scoped>

</style>