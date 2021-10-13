import { Api } from './api.js'

export { CycleApi, Cycle }

class CycleApi {
    
  static get url() {
    return `${Api.baseUrl}/routines`;
  }

  static async add(routineId, cycle, controller) {
   return await Api.post(`${CycleApi.url}/${routineId}/cycles`, true, cycle, controller)
  }

  static async modify(routineId, cycleId, cycle, controller) {
    return await Api.put(`${CycleApi.url}/${routineId}/cycles/${cycleId}`, true, cycle, controller)
  }

  static async delete(routineId, cycleId, controller) {
    return await Api.delete(`${CycleApi.url}/${routineId}/cycles/${cycleId}`, true, controller);
  }

  static async get(routineId, cycleId, controller) {
    return await Api.get(`${CycleApi.url}/${routineId}/cycles/${cycleId}`,true,  controller);
}

  static async getAll(routineId, controller) {
    return await Api.get(`${CycleApi.url}/${routineId}/cycles?size=50`, true, controller);
  }
}

class Cycle {
  constructor(routineId, name, detail) {
    if (routineId) {
      this.routineId = routineId;
    }
    this.name = name;
    this.detail = detail;
  }
}
