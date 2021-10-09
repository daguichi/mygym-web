import Vue from 'vue'
import Vuex from 'vuex'
import exercises from "./modules/exercises";
import security from "./modules/security";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exercises,
    security
  },
})
