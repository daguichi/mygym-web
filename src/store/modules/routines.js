import { RoutineApi } from "../../api/routines";

export default {
  namespaced: true,
  state: {
    routines: [],
    favs: [],
    myRoutines: [],
  },
  
  getters: {
      findIndex(state) {
          return (routine) => {
              return state.routines.findIndex(item => item.id === routine.id)
          }
      },
      findFav(state) {
          return (routine) => {
            return state.favs.findIndex(item => item.id === routine.id);
          }
      },
  },
  
  mutations: {
    push(state, routine) {
      state.routines.push(routine);
    },
    pushFav(state, routine) {
      state.favs.push(routine);
    },
    replace(state, index, routine) {
      state.routines[index] = routine;
    },
    splice(state, index) {
      state.routines.splice(index, 1);
    },
    replaceAll(state, routines) {
      state.routines = routines;
    },
    replaceFavs(state, favs) {
      state.favs = favs;
    },
    replaceMines(state, myRoutines) {
        state.myRoutines = myRoutines;
    }
  },
  actions: {
    async create({ commit }, routine) {
      const result = await RoutineApi.add(routine);
      //if ( false && !getters.findIndex(result)) commit("push", result); // <-- aca hay un error
      commit("push", result);
      return result;
    },
    async modify({ getters, commit }, routine) {
      const result = await RoutineApi.modify(routine);
      const index = getters.findIndex(result);
      if (index >= 0) commit("replace", index, result);
      return result;
    },
    async delete({ getters, commit }, routine) {
      await RoutineApi.delete(routine.id);
      const index = getters.findIndex(routine);
      if (index >= 0) commit("splice", index);
    },
    async get({ state, getters, commit }, routine) {
      const index = getters.findIndex(routine);
      if (index >= 0) return state.routines[index];

            const result = await RoutineApi.get(routine.id) // REVISAR
            commit('push', result)
            return result
        },
        async getAll({commit}, controller) {
            const result = await RoutineApi.getAll(controller)
            commit('replaceAll', result.content)
            return result.content
        },
        async getFavs({commit}, controller) {
            const result = await RoutineApi.getFavs(controller);
            console.log(result)
            commit('replaceFavs', result.content)
            return result.content
        },
        async markFav({getters, commit}, routineId, controller) {
            const result = await RoutineApi.markFav(routineId, controller);
            if (!getters.findFav(result))
                commit('pushFav', result)
            return result
        },
        
        async getMines({ commit }, controller) {
          const result = await RoutineApi.getMines(controller);
          console.log('en modulo', result.content)
          commit("replaceMines", result.content);
          return result.content;
        },
    
    
  },
};

/*
 static async markFav(id, controller) {
    return await Api.post(RoutineApi.getFavsUrl(id), true, controller);
  }

  static async unmarkFav(id, controller) {
    return await Api.delete(RoutineApi.getFavsUrl(id), true, controller);
  }
  */
