import Vue from 'vue'
import Vuex from 'vuex'
import exercises from "./modules/exercises";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exercises
  },
})
