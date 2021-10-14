<template>
  <div>
    <v-card
      class="rounded-xl imagen mx-auto"
      max-width="430"
      outlined
      color="blue lighten-3"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h6 pa-3" align="center"
            >Titulo Ejercicio</v-card-title
          >

          <v-card-subtitle
            class="font-italic font-weight-thin microText pl-5 pr-5 pt-3"
            >Ejercicio creado por:"pedro"</v-card-subtitle
          >
          <v-row>
            <v-col>
              <v-card-text> Descripción:</v-card-text>
            </v-col>
            <v-col>
              <v-card-text> tipo</v-card-text>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "cardExercise",
};
</script>
<style scoped>
.imagen {
  background: rgb(76, 68, 207);
  background: linear-gradient(
    43deg,
    rgba(76, 68, 207, 1) 0%,
    rgba(154, 67, 180, 1) 60%,
    rgba(122, 92, 175, 1) 93%
  );
}
</style>
