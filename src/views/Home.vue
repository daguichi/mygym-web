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
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ExcercisesCard from "../components/ExcercisesCard";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: { ExcercisesCard },
};
</script>

<style scoped>
</style>