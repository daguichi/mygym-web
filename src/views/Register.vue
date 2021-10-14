<template>
  <div class="fivepeople">
    <v-container fluid class="fill-height pa-0 ma-0">
      <v-row align="center" justify="center">
        <v-img
          max-height="150"
          max-width="250"
          src="../assets/MyGymLogo2.png"
        ></v-img>
      </v-row>
      <v-row>      <register-card></register-card>
      </v-row>
      <v-row></v-row>
    </v-container>
  </div>
</template>

<script>
import RegisterCard from "../components/RegisterCard.vue";
import {mapState} from "vuex"

import router from '@/router/index'
export default {
  name: "Register",
  components: { RegisterCard },
  computed: {
    ...mapState("security", {$token: state => state.token}),
  },
  created() {
    if (this.$token) router.push("Home")
  }
};
</script>

<style scoped>

.fivepeople {
  width: auto;
  height: 100vh;
  overflow: visible;
  background-image: url("../assets/mancuernas.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.315);
  opacity: 1;
}

</style>