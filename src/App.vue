<template>
  <v-app id="inspire">
    <v-main>
    <!-- <home-page></home-page> -->
    <!-- <log-in></log-in>-->
   <register></register> 
    </v-main>
  </v-app>
</template>


<script>
import Register from './views/Register.vue';


export default {
  name: 'App',
  components: {Register},
  data: () => ({
    //
  }),
};
</script>
