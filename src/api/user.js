import { Api } from "./api.js";

export { UserApi, Credentials, RegisterCredentials };

class UserApi {
  static getUrl(slug) {
    return `${Api.baseUrl}/users${slug ? `/${slug}` : ""}`;
  }

  static async login(credentials, controller) {
    let res = await Api.post(
      UserApi.getUrl("login"),
      false,
      credentials,
      controller
    );
    Api.token = res.token;
    return res;
  }

  static async logout(controller) {
    await Api.post(UserApi.getUrl("logout"), true, controller);
  }

  static async get(controller) {
    return Api.get(UserApi.getUrl("current"), true, controller);
  }

  static async register(credentials, controller) {
    return await Api.post(UserApi.getUrl(""), false, credentials, controller);
  }
}

class Credentials {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

class RegisterCredentials {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.avatar =
      "https://cdn0.iconfinder.com/data/icons/handsome-man-avatars/283/stock_man_avatar-17-1024.png";
  }
}
