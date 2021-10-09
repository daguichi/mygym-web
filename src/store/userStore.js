import { UserApi, Credentials } from "@/api/user";

const UserStore = {
  async logIn(username, password) {
    const credentials = new Credentials(username, password);
    try {
      await UserApi.login(credentials);
    } catch (err) {
      alert(err.description);
      return err.description;
    }
    localStorage.setItem("logged", "true");
    UserApi.get().then((data) => {
      localStorage.setItem("user", data);
      return data;
    }).catch((err) => {return err.description})

  },

  async logOut() {
    localStorage.setItem("logged", false);
    await UserApi.logout();
  },

  isLoggedIn() {
      return localStorage.getItem("logged") === "true";
  },

  getUser() {
      return localStorage.getItem("user");
  }
};

export default UserStore;
