<template>
  <v-app>
    <br><br><br><br>
    <GoBack />
      <!--      no se pq pero hay que meter un br aca pq sino la lavbar tapa la palabra destacados-->
    <router-view :key="$route.path" />
  </v-app>
</template>

<script>
import GoBack from "@/components/GoBack";

export default {
  name: "Favorites",
  components:{GoBack}
}
</script>

<style scoped>

</style>