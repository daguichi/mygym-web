<template>
  <div >
    <v-card
        class="rounded-xl"
        height="200"
        outlined
        color="blue lighten-3">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title
            class="text-h5"
            align="center"
            v-text="item.title"

        ></v-card-title>

        <v-card-subtitle v-text="item.artist"></v-card-subtitle>

         <v-icon
         v-for="n in 4"
         :key="n"
         cols="4">mdi-star</v-icon>
        <v-card-actions class="mt-4" >
          <v-btn
              class="ml-2 mt-3"
              fab
              icon
              height="40px"
              right
              width="40px"
          >
            <v-icon>mdi-heart</v-icon>
          </v-btn>


          <v-btn
              class="ml-2 mt-5"
              outlined
              rounded
              small
          >
            START RADIO
          </v-btn>
        </v-card-actions>
      </div>

      <v-avatar
          class="ma-6"
          size="150"
          tile
      >
        <v-img
            class="rounded-xl"

            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
      </v-avatar>
    </div>
    </v-card>
  </div>

</template>

<script>
export default {
  name: "ExcercisesCard",
  data(){
    return{
      item:{
        title:"hola",
        artist:"pedro"

      }
    }
  }
}
</script>

<style scoped>
.imagen{
  margin-left: 250px;
  margin-top: 25px;
}

</style>