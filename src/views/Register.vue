<template>
  <div class="bg fivepeople " >
    <v-container fluid class="fill-height pa-0 ma-0">
      <v-row align="center" justify="center" >
            <v-img
            max-height="150"
            max-width="250"
            src="../assets/MyGymLogo.png"
            ></v-img>
      </v-row>
      <register-card></register-card>
    </v-container>
  </div>
</template>

<script>
import RegisterCard from '../components/RegisterCard.vue'
export default {
  name: "Register",
  components: {RegisterCard}

};
</script>

<style scoped>
.fivepeople {
  width: auto;
  height: 700px;
  overflow: visible;
  opacity: 1;
  background-image: url('../assets/RegisterBackground.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>