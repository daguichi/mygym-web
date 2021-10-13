<template>
  <v-col>
    <v-sheet min-height="70vh" rounded="lg">
      <h1 class="pa-6 font-weight-bold">Ficha tecnica</h1>
      <v-list-item v-for="data in Object.entries(unwrap($user))" :key="data" two-line>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">{{
            data[0]
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ data[1] }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-sheet>
  </v-col>
</template>

<script>
// import store from "@/store/profile";
import { mapState } from "vuex";

export default {
  data: () => ({
    fichaTecnica: Object.entries({ peso: "40" }),
  }),
  computed: {
    ...mapState("security", {
      $user: (state) => state.user,
    }),
  },
  methods: {
    unwrap: ({
      username,
      firstName,
      lastName,
      gender,
      birthdate,
      metadata,
    }) => ({ username, firstName, lastName, gender, birthdate, metadata }),
  },
};
</script>

<style>
</style>