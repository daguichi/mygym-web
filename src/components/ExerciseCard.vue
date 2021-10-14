<template>
  <div>
    <v-card
      class="rounded-xl imagen mx-auto"
      max-width="430"
      height="220"
      outlined
      color="blue lighten-3"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title
            class="text-h6"
            align="center"
            v-text="exercise.name"
          ></v-card-title>

          <v-row align="left">Detalle: {{ exercise.detail }}</v-row>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>

export default {
  name: "ExerciseCard",
  data() {
    return {
      dialog: false,
    };
  },
  props: { exercise: Object },
  methods: {
    onClose() {
      this.dialog = false;
    },
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