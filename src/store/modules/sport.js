import {SportApi} from "../../../api/sport";

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        findIndex(state) {
            return (sport) => {
                return state.items.findIndex(item => item.id === sport.id)
            }
        },
    },
    mutations: {
        push(state, sport) {
            state.items.push(sport)
        },
        replace(state, index, sport) {
            state.items[index] = sport
        },
        splice(state, index) {
            state.items.splice(index, 1)
        },
        replaceAll(state, sports) {
            state.items = sports
        }
    },
    actions: {
        async create({getters, commit}, sport) {
            const result = await SportApi.add(sport)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async modify({getters, commit}, sport) {
            const result = await SportApi.modify(sport)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, sport) {
            await SportApi.delete(sport.id)
            const index = getters.findIndex(sport)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, sport) {
            const index = getters.findIndex(sport)
            if (index >= 0)
                return state.items[index]

            const result = await SportApi.get()
            commit('push', result)
            return result
        },
        async getAll({commit}, controller) {
            const result = await SportApi.getAll(controller)
            commit('replaceAll', result)
            return result
        }
    },
}