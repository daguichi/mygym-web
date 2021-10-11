<template>
  <div>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row v-for="seccion in secciones" :key="seccion.title">
          <v-row><h1>{{seccion.title}}</h1></v-row>
          <v-row align="stretch" justify="space-around">
            <v-slide-group
              v-model="model"
              class="pa-4"
              active-class="success"
              show-arrows
            >
              <v-slide-item
                class="pa-4"
                v-for="rutina in seccion.arr"
                :key="rutina.id"
              >
                <ExcercisesCard
                  v-bind:titulo="rutina.titulo"
                  v-bind:autor="rutina.autor"
                  v-bind:stars="rutina.stars"
                  v-bind:img="rutina.img"
                ></ExcercisesCard>
              </v-slide-item>
            </v-slide-group>
          </v-row>
          <br><br>
        </v-row>
        <create />
      </v-container>
    </v-main>
  </div>

</template>

<script>
import ExcercisesCard from "../components/ExcercisesCard";
import Create from "../components/Create";
import store from "@/store/modules/routines.js";
export default {
  name: "Home",
  data() {
    return {
      secciones: [
        { title: "Destacados", arr: store.destacadas },
        { title: "Mis rutinas", arr: store.misrutinas },
        { title: "Historial", arr: store.historial },
      ],
      
    };
  },
  methods: {
    
  },
  components: { ExcercisesCard, Create },
};
</script>

<style scoped>
</style>