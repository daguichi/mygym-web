import { Api } from './api.js';

export { CategoryApi, Category };

class CategoryApi {
    static get url() {
        return `${Api.baseUrl}/categories`;
    }

    static async add(category, controller) {
        await Api.post(CategoryApi.url, true, category, controller);
    }

    static async modify(category, controller) {
        await Api.put(`${CategoryApi.url}/${category.id}`, true, category, controller);
    }

    static async delete(categoryID, controller) {
        return await Api.delete(`${CategoryApi.url}/${categoryID}`, true, controller);
    }

    static async get(categoryID, controller) {
        return await Api.get(`${CategoryApi.url}/${categoryID}`,true,  controller);
    }

    static async getAll(controller) {
        return await Api.get(`${CategoryApi.getUrl()}?size=50`, true, controller);
    }
}

class Category {
    constructor(id, name, detail) {
      if (id) {
        this.id = id;
      }
      this.name = name;
      this.detail = detail;
    }
}