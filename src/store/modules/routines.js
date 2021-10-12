import {RoutineApi} from "../../api/routines"

export default {
    namespaced: true,
    state: {
        routines: []
    },
    getters: {
        findIndex(state) {
            return (routine) => {
                return state.routines.findIndex(item => item.id === routine.id)
            }
        },
    },
    mutations: {
        push(state, routine) {
            state.routines.push(routine)
        },
        replace(state, index, routine) {
            state.routines[index] = routine
        },
        splice(state, index) {
            state.routines.splice(index, 1)
        },
        replaceAll(state, routines) {
            state.routines = routines
        }
    },
    actions: {
        async create({getters, commit}, routine) {
            const result = await RoutineApi.add(routine)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async modify({getters, commit}, routine) {
            const result = await RoutineApi.modify(routine)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, routine) {
            await RoutineApi.delete(routine.id)
            const index = getters.findIndex(routine)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, routine) {
            const index = getters.findIndex(routine)
            if (index >= 0)
                return state.routines[index]

            const result = await RoutineApi.get()
            commit('push', result)
            return result
        },
        async getAll({commit}, controller) {
            const result = await RoutineApi.getAll(controller)
            commit('replaceAll', result)
            return result
        }
    },
}