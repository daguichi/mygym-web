<template>
  <div id="app">
    <!--
  The v-btn component replaces the standard html button with a material design theme and
   a multitude of options. Any color helper class can be used to alter the background or text color.
   -->
    <v-btn color="primary" depressed elevation="5" large outlined plain></v-btn>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>