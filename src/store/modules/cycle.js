import {CycleApi} from "../../api/cycle"

export default {
    namespaced: true,
    state: {
        cycle: [[]]
    },
    getters: {
        findIndex(state) {
            return (routine) => {
                return state.cycle.findIndex(item => item.id === routine.id)
            }
        },
    },
    mutations: {
        push(state, routine) {
            state.cycle.push(routine)
        },
        replace(state, index, routine) {
            state.cycle[index] = routine
        },
        splice(state, index) {
            state.cycle.splice(index, 1)
        },
        replaceAll(state, cycle) {
            state.cycle = cycle
        }
    },
    actions: {
        async create({getters, commit}, routine) {
            const result = await CycleApi.add(routine)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async modify({getters, commit}, routine) {
            const result = await CycleApi.modify(routine)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, routine) {
            await CycleApi.delete(routine.id)
            const index = getters.findIndex(routine)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, routine) {
            const index = getters.findIndex(routine)
            if (index >= 0)
                return state.cycle[index]

            const result = await CycleApi.get()
            commit('push', result)
            return result
        },
        async getAll({commit}, controller) {
            const result = await CycleApi.getAll(controller)
            commit('replaceAll', result)
            return result
        }
    },
}