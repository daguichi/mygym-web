import {CycleExerciseApi} from "../../api/cycleExercise"

export default {
    namespaced: true,
    state: {
        cycleExercises: []
    },
    getters: {
        findIndex(state) {
            return (cycleExercise) => {
                return state.cycleExercises.findIndex(item => item.id === cycleExercise.id)
            }
        },
    },
    mutations: {
        push(state, cycleExercise) {
            state.cycleExercises.push(cycleExercise)
        },
        replace(state, index, cycleExercise) {
            state.cycleExercises[index] = cycleExercise
        },
        splice(state, index) {
            state.cycleExercises.splice(index, 1)
        },
        replaceAll(state, cycleExercises) {
            state.cycleExercises = cycleExercises
        }
    },
    actions: {
        async create({getters, commit}, {cycleId, exerciseId, cycleExercise}) {
            const result = await CycleExerciseApi.add(cycleId, exerciseId, cycleExercise, null)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async modify({getters, commit}, {cycleId, exerciseId, cycleExercise}) {
            const result = await CycleExerciseApi.modify(cycleId, exerciseId, cycleExercise)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, cycle) {
            await CycleExerciseApi.delete(cycle.id)
            const index = getters.findIndex(cycle)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, cycle) {
            const index = getters.findIndex(cycle)
            if (index >= 0)
                return state.cycle[index]

            const result = await CycleExerciseApi.get()
            commit('push', result)
            return result
        },
        async getAll({commit}, cycleId) {
            const result = await CycleExerciseApi.getAll(cycleId, null)
            commit('replaceAll', result.content)
            return result.content
        }
    },
}