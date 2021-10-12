<template>
  <v-col>
    <v-sheet min-height="100vh" rounded="lg">
      <h1 class="pa-6 font-weight-bold">Mis rutinas</h1>
     
      <v-card elevation="24" max-width="444" class="mx-auto">
        <v-system-bar lights-out></v-system-bar>
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item v-for="my in this.myRoutines"
            :key="my.id">
          
            <ExcercisesCard
              v-bind:titulo="my.name"
              v-bind:autor="my.user.username"
              v-bind:stars="my.score"
              v-bind:imgUrl="my.metadata"
            />
            <v-list two-line>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.png"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>John Leider</v-list-item-title>
                  <v-list-item-subtitle>Author</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-carousel-item>
        </v-carousel>
      </v-card>
      
    </v-sheet>
  </v-col>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ExcercisesCard from "@/components/ExcercisesCard"
export default {
  components: {ExcercisesCard},
  methods: {
    ...mapActions("routines", { $getMines: "getMines" }),
  },
  computed: {
    ...mapState("routines", {
      myRoutines: (state) => state.myRoutines,
    }),
  },
  async created() {
    console.log('hola')
    let res = await this.$getMines();
    console.log(res)
    console.log('created')
  },
};
</script>

<style>
</style>