<template>
  <v-container>
    <div>
      <div class="bg">
        <v-container class="body-container">
          <v-row >
            <v-col cols="8">
              <h2 class="text-left main-card">tu nueva rutina</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card
              class="mx-auto rounded-xl "
              max-width="800"
              color="primary"
            >
              <div  >
                <v-row class="pt-4 pl-4" >
                <v-col >
                  <v-row class="pa-2">
                    <v-text-field
                      label="Nombre de tu rutina"
                      placeholder="Nombre de tu rutina"
                      outlined
                      class="rounded-xl"
                      required
                      single-line
                      hide-details
                      hide-no-data
                      hide-selected
                    ></v-text-field>
                  </v-row>

                  <v-row class="pa-2">
                    <v-text-field
                      label="Duración"
                      outlined
                      rounded
                      value="00:00:00"
                      type="time"
                      required
                      hide-details
                    ></v-text-field>
                  </v-row>

                  <v-row class="pa-2">
                    <v-autocomplete
                        v-model="selected"
                        chips
                        label="Grupos musculares"
                        outlined
                        rounded
                        hide-details
                        hide-no-data
                        hide-selected
                        multiple
                        single-line
                    ></v-autocomplete>
                  </v-row>


                  <v-row class="pa-2">
                    <v-autocomplete
                      ref="Color"
                      reverse
                      outlined
                      rounded
                      v-model="ColorDeFondo"
                      :rules="[
                        () => !!coloresDeFondo || 'Este campo es obligatorio',
                      ]"
                      :items="coloresDeFondo"
                      label="Color de fondo"
                      placeholder="Seleccione un color..."
                      required
                    ></v-autocomplete>
                  </v-row>

                </v-col>
                  <v-col>
                    <v-card class="pr-6 mr-3 mt-">
                      <v-card class="flex-grow-0">
                        <v-file-input  :rules="rules"
                                       accept="image/png, image/jpeg, image/bmp"
                                       placeholder="Pick an avatar"
                                       prepend-icon="mdi-camera"
                                       label="Avatar"></v-file-input>
<!--                        <v-virtual-scroll-->
<!--                            :items="Array.from({length: 100}).map((_, index) => index)"-->
<!--                            :item-height="50"-->
<!--                            height="300"-->
<!--                        >-->
<!--                          <template v-slot="{ item }">-->
<!--                            <v-list-item>-->
<!--                              <v-list-item-content>-->
<!--                                <v-list-item-title><v-img :src="item.image"></v-img></v-list-item-title>-->
<!--                              </v-list-item-content>-->
<!--                            </v-list-item>-->
<!--                          </template>-->
<!--                        </v-virtual-scroll>-->
                      </v-card>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </v-card>
            </v-col>
            <v-col>
              <v-card color="primary" class="rounded-xl ejercicios">
                <v-row align-content="center">
                  <v-col></v-col>
                  <v-col class="pl-16">
                    <h2>Entrada en calor</h2>
                    <h5><U>repeticiones:</U> 3 (NO SE SI ESTO ES VARIABLE)</h5>
                  </v-col>
                  <v-col class="mr-n10">
                    <v-icon>mdi-note-edit-outline</v-icon>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "CreateRoutine",
  data: () => ({
    items: [
      { name: 'Foo', image: 'https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG'},
      { name: 'Bar', image: 'https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG'},
      { name: 'Hoo', image: 'https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG'},
      { name: 'Coo', image: 'https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG'}],
    rules: [
      value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    ],
  }),
  computed: {
    grupos(){
      return this.$store.getters.state.availableGroups
    }
  },
  created() {

  }
}
</script>

<style scoped>
.bg {
  width: auto;
  height: 100vh;
  overflow: visible;
  background-image: url("../assets/RegisterBackground.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.315);
  opacity: 1;
}
.main-card {
  margin-top: 10%;
}

.ejercicios{
  height: 300%;
}
.body-container {
  flex: 1;
  padding: 30px 35px 90px 35px;
  display: flex;
  width: auto;
  flex-direction: column;
}
</style>