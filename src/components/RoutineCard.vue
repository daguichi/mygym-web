<template>
  <div>
    <v-card
      class="rounded-xl imagen mx-auto"
      width="330"
      height="220"
      outlined
      color="blue lighten-3"
    >
      <v-row justify="center" class="card-title mt-4">
        <v-card-title
          class="text-h6"
          align="center"
          v-text="routine.name"
        ></v-card-title>
      </v-row>
      <v-card-subtitle class="font-italic font-weight-bold ">
        rutina creada por: {{ routine.user.username }}
      </v-card-subtitle>

      <v-icon v-for="n in routine.score" :key="n">mdi-star</v-icon>
      <v-card-actions class="mt-4">
        <v-container>
          <v-row class="justify-center">
            <v-btn icon class="mr-2 pr-5" @click="fav"
              ><v-icon v-if="favved" color="primary" x-large rounded dark
                >mdi-heart</v-icon
              >
              <v-icon v-else color="primary" x-large rounded dark
                >mdi-heart-outline</v-icon
              >
            </v-btn>
            <info-routine v-bind:rutina="routine"></info-routine>
          </v-row>
        </v-container>
      </v-card-actions>
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
      notFaved: true,
      dialog: false,
      favved: false,
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
    isFav() {
      this.favs.forEach((fav) => {
        // console.log("pasando por rutina", fav.id);
        // console.log("viendo el argumento.id", this.routine.id);
        if (fav.id === this.routine.id) {
          this.favved = true;
        }
      });
    },
    async fav() {
      if (!this.favved) {
        this.$markFav(this.routine.id);
        this.favved = true;
      } else {
        this.$unmarkFav(this.routine.id);
        this.favved = false;
      }
      this.$getFavs();
      if (this.$router.currentRoute.name === "Favorites") {
        this.$emit("refreshCarousel");
      }
    },
  },
  computed: {
    ...mapState("security", { $user: (state) => state.user }),
    ...mapState("routines", { favs: (state) => state.favs }),
  },
  components: { infoRoutine },
  async created() {
    await this.$getFavs();
    this.isFav();
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
.card-title {
  text-align: center;
}
.microText {
  font-size: 0.65em;
}
</style>
