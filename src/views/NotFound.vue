<template>
  <div>
    <v-spacer></v-spacer>
    <h1>
      La pagina a la que intentaste acceder no existe o no se encuentra
      disponible
    </h1>
    <v-row align="center" justify="center">
      <v-img
        class="borders mt-13"
        max-height="250"
        max-width="450"
        src="../assets/lesionado.jpg"
      ></v-img>
    </v-row>
    <v-row justify="center" class="pt-3">
      <router-link to="/home" style="text-decoration: none">
        <v-btn color="#6262f8" elevation="2" rounded x-large
          >Volver al inicio
          <v-icon> right mdi-home</v-icon>
        </v-btn>
      </router-link>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped></style>
