import mockapi from '@/api/mockapi'

export default {
    namespaced: true,
    state: {
        exercises: [],
    },
    mutations: {
        setExercises(state, exercises) {
            state.exercises = exercises
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