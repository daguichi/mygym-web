import Vue from 'vue'
import Vuex from 'vuex'
import mockapi from "../api/mockapi";

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //data
    grupos:["gluteos", "gemelos", "biceps"]
  },
  mutations: {
    setGrupos(state,grupos){
      state.grupos=grupos
    }
  },
  actions: { //methods
    fetchGroup(){
      mockapi.getGrupos(grupos =>{
        this.$store.commit("setGrupos",grupos)
      })
    }
  },
  getters: { //computed
    availableGroups(state){
      return state.grupos
    }
  },
  modules: {
  }
})
