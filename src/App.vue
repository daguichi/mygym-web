<template>
<v-app>
  <nav-bar v-if="showNavBar"></nav-bar>
  <v-main>
    <router-view :key="$route.fullPath"></router-view>
  </v-main>
</v-app>

</template>
<script>
import NavBar from './components/navBar.vue';
export default {
  name: 'App',
  components: {
    NavBar
  },
  computed: {
    shouldShowBar(){
      return this.$route.path === '/routines' || this.$route.path === '/favorites' || this.$route.path === '/home' || this.$route.path === '/profile';
    },
    showNavBar(){
      return this.shouldShowBar;
    }
  },
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
