<template>
  <v-app>
    
    <div class="fivepeople">
      <v-container fluid class="fill-height pa-0 ma-0">
      <v-row align="center" justify="center">
        <v-img
          max-height="150"
          max-width="250"
          src="../assets/output-onlinepngtools.png"
        ></v-img>
      </v-row>
      <register-card></register-card>
    </v-container>
    </div>
    
  </v-app>
</template>

<script>
import RegisterCard from "../components/RegisterCard.vue";

export default {
  name: "Register",
  components: { RegisterCard },
};
</script>

<style scoped>

.fivepeople {
  width: auto;
  height: 700px;
  overflow: visible;
  background-image: url("../assets/RegisterBackground.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgb(153,102,153,40);
  opacity: 1;
}

</style>