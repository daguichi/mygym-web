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
            v-text="titulo"
          ></v-card-title>

          <v-card-subtitle class="font-italic font-weight-thin microText"
            >rutina creada por: {{ author }}</v-card-subtitle
          >

          <v-icon v-for="n in stars" :key="n">mdi-star</v-icon>
          <v-card-actions class="mt-4">
            <v-container>
              <v-row>
                <v-col>
                    <v-icon color="primary"  rounded dark>mdi-heart</v-icon>
                </v-col>
                <v-col><RoutinePopUp class="nopad"></RoutinePopUp></v-col>
              </v-row>
            </v-container>
           
          </v-card-actions>
        </div>

        <v-avatar class="ma-6" size="150" tile>
          <v-img class="rounded-xl" :src="imgUrl"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </div>
</template>

<script>
import RoutinePopUp from "../components/RoutinePopUp";
export default {
  name: "ExcercisesCard",
  data() {
    return {};
  },
  components: { RoutinePopUp },
  props: ["titulo", "imgUrl", "author", "stars"],
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

.nopad{
  padding: 0;
  margin: 0;
}

</style>

