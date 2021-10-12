<template>
  <div>
    <v-main class="grey lighten-3">
      <h1>Mis rutinas favoritas</h1>
      <v-row justify="space-around" align="center"
        ><v-icon x-large color="purple">mdi-heart</v-icon></v-row
      >
      <h3>No tienes rutinas favoritas :(</h3>
      <h5>Toca en el ícono de Favoritos para añadir</h5>
      <router-link to="/routines" style="text-decoration: none">
        <v-btn color="purple" elevation="2" rounded outlined x-large>
          <v-icon> right mdi-weight-lifter</v-icon>
          Buscar rutinas
        </v-btn>
      </router-link>

      <GoBack />
    </v-main>
  </div>
</template>

<script>
import GoBack from "@/components/GoBack";

export default {
  name: "Favorites",
  components: { GoBack },
};
</script>

<style scoped>
h1 {
  margin-bottom: 100px;
}
h3 {
  margin-top: 40px;
  margin-bottom: 20px;
}
.v-btn {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
