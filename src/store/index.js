import Vue from 'vue'
import Vuex from 'vuex'
import exercises from "./modules/exercises"
import sport from "./modules/sport"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exercises,
    sport,
  },
})
