<template>
  <div>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-sheet rounded="lg">
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img
                    class="ml-auto"
                      src="https://cdn.vuetifyjs.com/images/john.png"
                    ></v-img>
                  </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      John Doe
                    </v-list-item-title>
                    <v-list-item-subtitle>john@doe.com</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>

              <v-list color="transparent">
                <v-list-item v-for="item in profileSections" :key="item" link>
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

          <v-col v-if="editarperfil">
            <v-sheet min-height="70vh" rounded="lg"> </v-sheet>
          </v-col>
          <v-col v-else>
            <v-sheet min-height="70vh" rounded="lg">
              <h1 class="font-weight-bold">Ficha tecnica</h1>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Peso</v-list-item-title>
                  <v-list-item-subtitle>72kg</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Edad</v-list-item-title>
                  <v-list-item-subtitle>20 años</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Fecha de nacimiento</v-list-item-title>
                  <v-list-item-subtitle>01/03/2000</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import store from "@/store/profile";

export default {
  data: () => ({
    profileSections: store.sections,
  }),
  props: {
    fichatecnica: Boolean,
    estadisticas: Boolean,
    misrutinas: Boolean,
    historial: Boolean,
    editarperfil: Boolean,
  },
  components: { },
};
</script>