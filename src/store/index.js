import Vue from 'vue'
import Vuex from 'vuex'
import exercises from "./modules/exercises";
import security from "./modules/security";
import category from "./modules/category";
import routines from "./modules/routines";
import sport from "./modules/sport";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exercises,
    security,
    category,
    routines,
    sport,
  },
})
