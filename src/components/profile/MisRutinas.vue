<template>
  <v-col>
    <v-sheet min-height="70vh" rounded="lg">
      <h1 class="pa-6 font-weight-bold">Mis rutinas</h1>
      <v-list-item v-for="data in misRutinas" :key="data" two-line>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">{{
            data.title
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ data.content }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-sheet>
  </v-col>
</template>

<script>
import store from "@/store/profile"

export default {
    data: () => ({
        misRutinas: store.misRutinas,
    }),
};
</script>

<style>
</style>