import { Api } from './api.js';

export {CycleExerciseApi};

class CycleExerciseApi {
    static get url() {
        return `${Api.baseUrl}/cycles`;
    }

    static async add(cycleId, exerciseId, cycleExercise, controller) {
        const result= await Api.post(`${CycleExerciseApi.url}/${cycleId}/exercises/${exerciseId}`, true, cycleExercise, controller);
        return result;
    }

    static async modify(cycleId, exerciseId, cycleExercise, controller){
        const result= await Api.put(`${CycleExerciseApi.url}/${cycleId}/exercises/${exerciseId}`, true, cycleExercise, controller);
        return result;
    }

    static async delete(cycleId, exerciseId, controller){
        return await Api.delete(`${CycleExerciseApi.url}/${cycleId}/exercises/${exerciseId}`, true, controller);
    }

    static async get(cycleId, exerciseId, controller){
        return await Api.get(`${CycleExerciseApi.url}/${cycleId}/exercises/${exerciseId}`,true,  controller);
    }

    static async getAll(cycleId, controller) {
        return await Api.get(`${CycleExerciseApi.url}/${cycleId}/exercises/`, true, controller);
    }
}