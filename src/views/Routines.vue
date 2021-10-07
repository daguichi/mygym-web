<template>
  <v-app>
    <navBar actualPage="rutinas"></navBar>
    <br /><br /><br /><br />
    <v-container>
      <v-row align="center" justify="center">
        <v-col></v-col>
        <v-col class="options">
          <v-btn elevation="2" flat outlined rounded x-large block class="primary text"> Todas </v-btn>
        </v-col>
        <v-col class="options" >
          <v-btn elevation="2" rounded x-large outlined block class="primary text" > Mis rutinas </v-btn>
        </v-col>   
        <v-col></v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="4">
            <v-text-field
                    v-model="password"
                    :append-icon="'mdi-filter'"
                    placeholder="Buscar"
                    background-color="rgb(244, 249, 252)"
                    elevation="2"
                    color="black"
                    dense
                    filled
                    rounded
                    placeholderColor="#aaa"
                    textAlign="left"
                    textColor="#333"
                    truncate="{false}"
                    value=""
                    x-large
                  ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import navBar from "../components/navBar";
export default {
  name: "Routines",
  components: { navBar },
};
</script>

<style scoped>
.options{
  padding: 50px 30px 30px;
}
.primary {
  background-color: #92D9D3;
}

.text {
  font-weight: bold;
  font-size: 18px;
  text-transform: none;
}
</style>