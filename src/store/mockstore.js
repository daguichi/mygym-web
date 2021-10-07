import mockapi from "../api/mockapi"

export default {
    namespaced: true,
    state: {
        items: [],
    },
    mutations: {
        setExercises(state, exercises) {
            state.items = exercises
        },
    },
    actions: {
        fetchExercises({commit}) {
            return new Promise((resolve) => {
                mockapi.getExercises(exercises => {
                    commit('setExercises', exercises)
                    resolve()
                })
            })
        },
    }
}