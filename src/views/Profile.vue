<template>
  <div>
    <v-main class="grey lighten-3" >
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-sheet rounded="lg">
              <v-list>
                <v-list-item link>
                  <v-list-item-avatar >
                    <v-img
                      class="ml-auto"
                      src="https://cdn.vuetifyjs.com/images/john.png"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      {{user.nombre}}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              
              <v-divider></v-divider>

              <v-list color="transparent">
                <v-list-item v-for="item in profileSections" :key="item" @click="listRoute(item.route)" link>
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
          <v-col v-if="estadisticas">
            <v-sheet min-height="70vh" rounded="lg">
              <h1 class="pa-6 font-weight-bold">Estadisticas</h1>
              <v-list-item v-for="stat in estadisticas" :key="stat" two-line>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold">
                    {{ stat.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ stat.content }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-sheet>
          </v-col>
          <v-col v-else>
              <v-sheet min-height="70vh" rounded="lg">
                <h1 class="pa-6 font-weight-bold">Ficha tecnica</h1>
                <v-list-item v-for="data in fichaTecnica" :key="data" two-line>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{
                      data.title
                    }}</v-list-item-title>
                    <v-list-item-subtitle>{{
                      data.content
                    }}</v-list-item-subtitle>
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
    fichaTecnica: store.fichaTecnica,
    estadisticas: store.estadisticas,
    user:{
      nombre:"johndoe",
      email:"john@doe.com",
      peso:"70",
      edad:"22",
      fechaNacimiento:"30/08/1999"

    }
  }),
  props: {
    fichatecnica: Boolean,
    estadisticas: Boolean,
    misrutinas: Boolean,
    historial: Boolean,
    editarperfil: Boolean,
  },

  components: {  },
};
</script>