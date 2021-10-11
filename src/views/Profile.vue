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
                      src="https://cdn0.iconfinder.com/data/icons/handsome-man-avatars/283/stock_man_avatar-17-1024.png"
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
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <!-- columna derecha -->
          <router-view :key="$route.path" />
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import store from "@/store/profile";
import {mapState} from 'vuex';
export default {
  data: () => ({
    profileSections: store.sections,
    user: {
      nombre: "johndoe",
      email: "john@doe.com",
      peso: "70",
      edad: "22",
      fechaNacimiento: "30/08/1999",
    },
  }),
  components: {},
  computed: {
    ...mapState("security", {
      $user: (state) => state.user,
    }),
  },
};
</script>