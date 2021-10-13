<template>
  <div>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row v-for="seccion in secciones" :key="seccion.title">
          <v-row
            ><h1 class="pa-5">{{ seccion.title }}</h1>
          </v-row>

          <v-slide-group
            v-model="model"
            class="pl-3"
            active-class="success"
            mobile-breakpoint="1"
            show-arrows
          >
            <v-slide-item class="pl-3" v-for="r in routines" :key="r.id">
              <ExcercisesCard
                v-bind:titulo="r.name"
                v-bind:autor="r.user.username"
                v-bind:stars="r.score"
                v-bind:imgUrl="r.metadata"
              ></ExcercisesCard>
            </v-slide-item>
          </v-slide-group>

          <br /><br />
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
import { mapState, mapActions } from "vuex";
//import {CategoryApi} from '../api/category'

export default {
  name: "Home",
  data() {
    return {
      secciones: undefined,
    };
  },
  components: { ExcercisesCard, Create },
  computed: {
    ...mapState("category", {
      categories: (state) => state.categories,
    }),
    ...mapState("routines", {
      routines: (state) => state.routines,
    }),
  },
  async created() {
    await this.$getAll();
    console.log(this.routines);
    for (let rutina in this.routines) {
      console.log(this.routines[rutina]);
    }
    this.secciones = [
      { title: "Destacados", arr: this.routines },
      { title: "Mis rutinas", arr: store.misrutinas },
      { title: "Historial", arr: store.historial },
    ];
  },
  methods: {
    ...mapActions("category", { $createCategory: "create" }),
    ...mapActions("routines", { $createRoutine: "create", $getAll: "getAll" }),
    /*
    async dale() {
    //const initialCategories = [{name:"espalda", detail:"N/A"},{name:"pecho", detail:"N/A"},{name:"biceps", detail:"N/A"}];
      console.log(this.$createCategory);
      await this.$createCategory({name:"dasdasd", detail:"N/A"});
    // for(let category in initialCategories) {
    // console.log(category)
    //   await CategoryApi.add(category).then((res) => {console.log(res)}).catch((e) => {return e;})
    // }
    }
    */
  },
};
</script>

<style scoped>
h1 {
  margin-top: 20px;
  margin-bottom: 0px;
}
</style>
