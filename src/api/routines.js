import { Api } from './api.js'
import { UserApi } from './user.js'
export {RoutineApi, Routine}

class RoutineApi {
  static getUrl(slug) {
    return `${Api.baseUrl}/routines${ slug ? `/${slug}` : ''}`
  }

  static getFavsUrl(id) {
    return `${Api.baseUrl}/favourites${ id ? `/${id}` : ''}`
  }

  static async add(routine, controller) {
    return await Api.post(RoutineApi.getUrl(), true, routine, controller)
  }

  static async modify(routine, controller) {
    return await Api.put(`${Api.baseUrl}/routines/${parseInt(routine.id)}`, true, routine, controller)
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
    let ans = await this.getAll(controller)
    let routines = ans.content
    let user = await UserApi.get();
    let res = [];
    routines.forEach((routine) => {
      if (routine.user.id === user.id)
        res.push(routine)
    })
    return res;
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

