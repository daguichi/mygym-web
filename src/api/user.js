import { Api } from "./api.js";

export { UserApi, Credentials, RegisterCredentials, Verification };

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
    return await Api.get(UserApi.getUrl("current"), true, controller);
  }

  static async register(credentials, controller) {
    await Api.post(UserApi.getUrl(), false, credentials, controller);
  }

  static async modify(newUser, controller) {
    return await Api.put(UserApi.getUrl("current"), true, newUser, controller);
  }
  /*
  static async modifyUserInformation(data, controller){
        const result = await Api.put(`${UserApi.url}/current`, true, data, controller);
        if (!result.id){
            console.log("ERROR!"); //ERROR
        }
    }
    */
  static async verifyEmail(verification, controller) {
    console.log(verification);
    await Api.post(UserApi.getUrl("verify_email"), false, verification, controller);
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
    this.avatarUrl =
      "https://cdn0.iconfinder.com/data/icons/handsome-man-avatars/283/stock_man_avatar-17-1024.png";
    this.metadata = {};
  }
}

class Verification {
  constructor(email, code) {
    this.email = email;
    this.code = code;
  }
}
