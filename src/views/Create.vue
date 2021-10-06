<template>
    <v-app>
        <v-row>
        <navBar></navBar>
        </v-row>
        
        <v-row></v-row>

        <v-row>    
            <v-col>
            <h1 align="center">¿Qué desea crear?</h1>
            </v-col>
        </v-row>
        <v-row>
        <v-spacer/>
          <v-col>
            <v-btn  
            class="rcorners1"
            x-large 
            fab
            >
            <v-img
                max-height="400"
                max-width="400"
                src="../assets/output-onlinepngtools.png"
              ></v-img>
            </v-btn>
            <h2>ejercicio</h2>
          </v-col>
          <v-col>
            <v-btn  
            class="rcorners1"
            x-large 
            fab
            >
            <v-img
                max-height="400"
                max-width="400"
                src="../assets/output-onlinepngtools.png"
            ></v-img>
              </v-btn>
            <h2>rutina</h2>
          </v-col>
        <v-spacer/>

        </v-row>
        
    </v-app>
</template>
<script>
import navBar from "../components/navBar";

export default {
  name: "Create",
  components: {navBar}
}
</script>

<style scoped>
.rcorners1 {
  border-radius: 25px;
  background: rgb(55,43,255);
  height:400px;
  width:400px;
  margin: 50px;
}

</style>