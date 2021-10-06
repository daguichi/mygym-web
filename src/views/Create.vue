<template>
    <v-app>
        <v-row>
        <navBar></navBar>
        </v-row>
        <v-row>    
            <v-col>
            <h1 align="center">¿Qué desea crear?</h1>
            </v-col>
        </v-row>
        <v-row>
            <div class="rcorners1"></div> 
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
  background-position: right top;
  padding: 20px;
  width: 400px;
  height: 400px;
  margin-left: 100px;
}

</style>