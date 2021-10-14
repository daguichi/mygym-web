<template>
  <div>
    <v-card
      class="rounded-xl imagen mx-auto"
      max-width="330"
      height="220"
      outlined
      color="blue lighten-3"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title
            class="text-h6"
            align="center"
            v-text="routine.name"
          ></v-card-title>

          <v-card-subtitle class="font-italic font-weight-thin microText"
            >rutina creada por: {{ routine.user.username }}</v-card-subtitle
          >

          <v-icon v-for="n in routine.score" :key="n">mdi-star</v-icon>
          <v-card-actions class="mt-4">
            <v-container>
              <v-row class="justify-center">
                <v-btn icon class="mr-2"
                  ><v-icon color="primary" x-large rounded dark
                    >mdi-heart</v-icon
                  >
                </v-btn>
                <info-routine v-bind:rutina="routine"></info-routine>
              </v-row>
            </v-container>
          </v-card-actions>
        </div>

        <v-avatar class="ma-6" size="150" tile>
          <v-img class="rounded-xl" :src="this.routine.metadata"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import infoRoutine from "./InfoRoutine.vue";

export default {
  name: "RoutineCard",
  data() {
    return {
      dialog: false,
    };
  },
  props: { routine: Object },
  methods: {
    ...mapActions("routines", {
      $createRoutine: "create",
      $getAll: "getAll",
      $getFavs: "getFavs",
      $markFav: "markFav",
      $unmarkFav: "unmarkFav",
    }),
    onClose() {
      this.dialog = false;
    },
  },
  computed: {
    ...mapState("security", { $user: (state) => state.user }),
  },
  components: { infoRoutine },
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
