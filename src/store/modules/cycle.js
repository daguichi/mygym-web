import {CycleApi} from "../../api/cycle"

export default {
    namespaced: true,
    state: {
        cycle: [],
    },
    getters: {
        findIndex(state) {
            return (cycle) => {
                return state.cycle.findIndex(item => item.id === cycle.id)
            }
        },
    },
    mutations: {
        push(state, cycle) {
            state.cycle.push(cycle)
        },
        replace(state, index, cycle) {
            state.cycle[index] = cycle
        },
        splice(state, index) {
            state.cycle.splice(index, 1)
        },
        replaceAll(state, cycles) {
            state.cycle = cycles
        }
    },
    actions: {
        async create({getters, commit}, {cycle, routineId}) {
            const result = await CycleApi.add(routineId, cycle, null)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async modify({getters, commit}, {routineId, cycleId, cycle}) {
            const result = await CycleApi.modify(routineId, cycleId, cycle)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, cycle) {
            await CycleApi.delete(cycle.id)
            const index = getters.findIndex(cycle)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, cycle) {
            const index = getters.findIndex(cycle)
            if (index >= 0)
                return state.cycle[index]

            const result = await CycleApi.get()
            commit('push', result)
            return result
        },
        async getAll({commit}, routineId) {
            const result = await CycleApi.getAll(routineId, null)
            commit('replaceAll', result.content)
            return result.content
        }
    },
}