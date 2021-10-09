<template>
  <div>
    <br/>
    <v-container>
      <v-row><p class="font-weight-black">destacados</p></v-row>
      <v-row>
        <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
        >
          <v-slide-item
              v-for="n in 15"
              :key="n"
          >
            <ExcercisesCard titulo="Abdominales" author="dax" stars="iiiii" imgUrl="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></ExcercisesCard>

          </v-slide-item>
        </v-slide-group>

      </v-row>
      <v-row><p class="font-weight-black">mis rutinas</p></v-row>
      <v-row>
        <v-col v-for="n in 3" :key="n" cols="4">
          <ExcercisesCard titulo="Abdominales" author="dax" stars="iiiii" imgUrl="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></ExcercisesCard>
        </v-col>
      </v-row>
      <v-row><p class="font-weight-black">rutinas realizadas</p></v-row>
      <v-row>
        <v-col v-for="n in 3" :key="n" cols="4">
          <ExcercisesCard titulo="Abdominales" author="dax" stars="ii" imgUrl="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></ExcercisesCard>
        </v-col>
        <create/>
      </v-row>
    </v-container>
    <v-btn @click='logOut'>
      Log Out
    </v-btn>
  </div>

</template>

<script>
import ExcercisesCard from "../components/ExcercisesCard";
import Create from "../components/Create";
import userStore from "../store/userStore";
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    logOut() {
      userStore.logOut();
    }
  },
  components: { ExcercisesCard, Create },
};
</script>

<style scoped>
</style>