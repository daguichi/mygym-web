export { Api }

const url = 'http://127.0.0.1:8080/api';

class Api {
  static token; // variable que se guarda al loguear a la api para que desp me quede logueado

  static get baseUrl() {
    return url;
  }

  static get timeout() { // tiempo maximo de espera de la respuesta de la api (lo podemos cambiar obvio)
    return 60 * 1000;
  }

  static async fetch(url, secure, init = {}, controller) { // este metodo es generico, es el que usan post, get, etc
    if (secure && Api.token) {
      if (!init.headers)
        init.headers = {}

      init.headers['Authorization'] = `bearer ${Api.token}`
    }

    controller = controller || new AbortController()
    const timer = setTimeout(() => controller.abort(), Api.timeout)
    init.signal = controller.signal

    try {
      const response = await fetch(url, init)
      const text = await response.text()
      const result = text ? (JSON).parse(text) : {}
      if (result.code)
        throw result
      return result
    } catch (error) {
      if (error.code)
        throw error
      if (error.name === 'AbortError')
        throw { "code": 98, "description": error.message.toLowerCase() }
      else
        throw { "code": 99, "description": error.message.toLowerCase() }
    } finally {
      clearTimeout(timer)
    }
  }

  static async get(url, secure, controller) {
    return await Api.fetch(url, secure, {}, controller)
  }

  static async post(url, secure, data, controller) {
    return await Api.fetch(url, secure, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    }, controller)
  }

  static async put(url, secure, data, controller) {
    return await Api.fetch(url, secure,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    }, controller)
  }

  static async delete(url, secure, controller) {
    return await Api.fetch(url, secure, {
      method: 'DELETE',
    }, controller)
  }
}