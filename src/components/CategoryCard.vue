<template>

    <v-card>
        <v-img
            src="https://picsum.photos/350/165?random"
            height="125"
            class="grey darken-4"
        ></v-img>
        <v-card-title class="text-h6">
            Pecho
        </v-card-title>
    </v-card>
</template>

<script>
export default {
  name: "CategoryCard",
  data() {
    return {
      item: {
        title: "Categoría",
      },
    };
  },
};
</script>

<style scoped>
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