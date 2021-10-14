<template>
  <div>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- columna izquierda -->
          <v-col cols="3">
            <v-sheet rounded="lg">
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img
                      contain
                      :src="$user.avatarUrl"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      {{ $user.username }}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{
                      $user.email
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list color="transparent">
                <v-list-item
                  v-for="item in profileSections"
                  :key="item.title"
                  link
                  :to="{
                    name: item.title,
                  }"
                >
                  <v-list-item-icon>
                    <v-icon color="#6262f8">{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
            <router-link class="router" to="/"><v-btn color ="red" outlined class="logout" @click="logout" ><v-icon class="logouticon">mdi-logout-variant</v-icon> Cerrar sesión</v-btn></router-link>
          </v-col>

          <!-- columna derecha -->
          <router-view :key="$route.path" />
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
// import store from "@/store/profile";
import router from "@/router/index";
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    profileSections: [
      { icon: "mdi-account", title: "Mi perfil", route: "miperfil" },
      { icon: "mdi-weight-lifter", title: "Mis ejercicios", route: "misejercicios" },
      { icon: "mdi-dumbbell", title: "Mis rutinas", route: "misrutinas" },
    ],
  }),
  components: {},
  computed: {
    ...mapState("security", {
      $user: (state) => state.user,
    }),
  },
  methods: {
    ...mapActions("security", {
      $logout: "logout"
    }),

    async logout() {
      await this.$logout();
      router.push("/")
    }
  }
};
</script>

<style scoped>
.logout{
  margin-top: 40px;
}
.logouticon{
  padding-right: 20px;
}
.router{
  text-decoration: none
}
</style>