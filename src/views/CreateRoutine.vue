<template>
  <v-container>
    <v-app>
      <div class="bg">
        <v-container class="body-container">
          <v-row>
            <v-col cols="8">
              <h2 class="text-center">tu nueva rutina</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-card
              class="mx-auto rounded-xl main-card"
              max-width="800"
              color="primary"
            >
              <div class="left-components">
                <v-col>
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

                  <v-text-field
                    label="Duración"
                    outlined
                    rounded
                    value="00:00:00"
                    type="time"
                    required
                    hide-details
                  ></v-text-field>

                  <v-autocomplete
                    v-model="selected"
                    :items="grupos"
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

                  <v-autocomplete
                    ref="Color"
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
                </v-col>
              </div>
              <v-col>
                <div class="right-components">
                  <v-col cols="7" offset="5">
                    <v-card rounded> hola</v-card>
                  </v-col>
                </div>
              </v-col>
            </v-card>
          </v-row>
        </v-container>
      </div>
    </v-app>
  </v-container>
</template>

<script>
export default {
  name: "CreateRoutine",
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
  position: center;
  width: 400%;
  height: 1%;
}
.left-components {
  padding-left: 1%;
  padding-top: 1%;
  padding-bottom: 2%;
}
.right-components {
  padding-right: 1%;
  padding-top: 5%;
}
.body-container {
  flex: 1;
  padding: 30px 35px 90px 35px;
  display: flex;
  width: auto;
  flex-direction: column;
}
</style>