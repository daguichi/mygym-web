<template>
  <v-container>
    <v-row>
      <v-card class="card">
        <v-img :src="imgUrl" height="100%" class="grey darken-4"></v-img>
      </v-card>
    </v-row>
    <v-row align="center" justify="center">
      <h2>{{ title }}</h2>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    title: String,
    imgUrl: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  width: 153px;
  height: 141px;
  overflow: visible;
  border-radius: 20px;
}
.imagen {
  background: rgb(55, 43, 255);
  background: linear-gradient(
    43deg,
    rgba(55, 43, 255, 1) 0%,
    rgba(28, 109, 173, 1) 58%,
    rgba(0, 212, 255, 1) 100%
  );
}
.microText {
  font-size: 0.65em;
}
</style>
