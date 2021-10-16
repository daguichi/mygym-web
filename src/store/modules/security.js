import { UserApi } from "../../api/user";
import { Api } from "../../api/api";
const SECURITY_TOKEN_KEY = "token";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  getters: {
    isLoggedIn(state) {
      return state.token != null;
    },
    fullUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    initialize({ commit }) {
      const token = localStorage.getItem(SECURITY_TOKEN_KEY);
      if (token) {
        commit("setToken", token);
        Api.token = token;
      }
    },
    updateToken({ commit }, { token, rememberMe }) {
      if (rememberMe) localStorage.setItem(SECURITY_TOKEN_KEY, token);
      commit("setToken", token);
      Api.token = token;
    },
    removeToken({ commit }) {
      localStorage.removeItem(SECURITY_TOKEN_KEY);
      commit("setToken", null);
      Api.token = null;
    },
    async login({ dispatch }, { credentials, rememberMe }) {
      const result = await UserApi.login(credentials);
      dispatch("updateToken", { token: result.token, rememberMe });
    },
    async logout({ commit, dispatch }) {

      await UserApi.logout();
      commit("setUser", null);
      dispatch("removeToken");
    },

    async register(context, credentials) {
      await UserApi.register(credentials);
    },

    async getCurrentUser({ state, commit }) {
      if (state.user) return state.user;

      const result = await UserApi.get();
      commit("setUser", result);
      return result;
    },

    async modifyUser({commit},newUser) {
      UserApi.modify(newUser);
      const result = await UserApi.get();
      commit("setUser", result);
    },

    async verifyEmail({ dispatch }, { credentials, rememberMe }) {
      await UserApi.verifyEmail(credentials);
      console.log(rememberMe);
      dispatch();
    },
  },
};
