<template>
  <div>
     <v-card class="rounded-xl"
             height="200"
             outlined
             color="blue lighten-3">

       <v-img
           class="imagen"
           src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
           height="150px"
           width="100px"
       ></v-img>

     </v-card>
  </div>

</template>

<script>
export default {
  name: "ExcercisesCard"
}
</script>

<style scoped>
.imagen{
  margin-left: 250px;
  margin-top: 25px;
}

</style>