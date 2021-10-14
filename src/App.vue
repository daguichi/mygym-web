<template>
  <v-app>
    <nav-bar v-if='!hide'></nav-bar>
    <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
  </v-app>
</template>
<script>
import NavBar from "./components/navBar.vue";
import {mapActions} from "vuex"
export default {
  name: "App",
  computed: {
    hide() {
      return this.$route.path === "/" || this.$route.path === "/register" || this.$route.path === "/Verification";
    },
  },
  components: {
    NavBar,
  },
  methods: {
    ...mapActions("security", {initialize: "initialize", getCurrentUser: "getCurrentUser"})
  },
  async created() {
    this.initialize();
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
