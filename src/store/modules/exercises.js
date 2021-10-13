import {ExerciseApi} from "../../api/exercise"

export default {
    namespaced: true,
    state: {
        exercises: []
    },
    getters: {
        findIndex(state) {
            return (exercise) => {
                return state.exercises.findIndex(item => item.id === exercise.id)
            }
        },
    },
    mutations: {
        push(state, exercise) {
            state.exercises.push(exercise)
        },
        replace(state, index, exercise) {
            state.exercises[index] = exercise
        },
        splice(state, index) {
            state.exercises.splice(index, 1)
        },
        replaceAll(state, exercises) {
            state.exercises = exercises
        }
    },
    actions: {
        async create({getters, commit}, exercise) {
            const result = await ExerciseApi.add(exercise)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async modify({getters, commit}, exercise) {
            const result = await ExerciseApi.modify(exercise)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, exercise) {
            await ExerciseApi.delete(exercise.id)
            const index = getters.findIndex(exercise)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, exercise) {
            const index = getters.findIndex(exercise)
            if (index >= 0)
                return state.exercises[index]

            const result = await ExerciseApi.get()
            commit('push', result)
            return result
        },
        async getAll({commit}, controller) {
            const result = await ExerciseApi.getAll(controller)
            commit('replaceAll', result.content)
            return result.content
        }
    },
}