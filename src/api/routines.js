import { Api } from './api.js'

export {RoutineApi, Routine}

class RoutineApi {
  static getUrl(slug) {
    return `${Api.baseUrl}/routines${ slug ? `/${slug}` : ''}`
  }

  static async add(routine, controller) {
   return await Api.post(RoutineApi.getUrl(), true, routine, controller)
  }

  static async modify(routine, controller) {
    return await Api.put(RoutineApi.getUrl(routine.id), true, routine, controller)
  }

  static async delete(id, controller) {
    return await Api.delete(RoutineApi.getUrl(id), true, controller)
  }

  static async get(id, controller) {
    return await Api.get(RoutineApi.getUrl(id),true,  controller)
  }

  static async getAll(controller) {
    return await Api.get(`${RoutineApi.getUrl()}?size=50`, true, controller)

  }

  static async getFavs(controller) {
    return await Api.get(RoutineApi.getFavsUrl(), true, controller);
  }

  static async markFav(id, controller) {
    return await Api.post(RoutineApi.getFavsUrl(id), true, controller);
  }

  static async unmarkFav(id, controller) {
    return await Api.delete(RoutineApi.getFavsUrl(id), true, controller);
  }

  static async getMines(controller) {
    return await this.getAll(controller)
    // return await Api.get(RoutineApi.getFavsUrl(), true, controller);
  }
}

class Routine {
  constructor(id, name, detail, isPublic, difficulty) {
    if (id) {
      this.id = id;
    }
    this.name = name;
    this.detail = detail;
    this.isPublic = isPublic;
    this.difficulty = difficulty;
  }
}

