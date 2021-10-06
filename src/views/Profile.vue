<template>
    <v-app>
        <v-container>
            <v-row><navBar></navBar></v-row>
            <br><br><br><br>
            <v-row>
                <v-col>a</v-col>
                <v-col>b</v-col>
                <v-col><v-card color="blue-grey darken-2">Hola</v-card></v-col>
                <v-col>c</v-col>
                <v-col>d</v-col>
            </v-row>
            <v-row>
                <v-col>a</v-col>
                <v-col>b</v-col>
                <v-col><v-card color="blue-grey darken-2">Hola</v-card></v-col>
                <v-col>c</v-col>
                <v-col>d</v-col>
            </v-row>
            
        </v-container>
    </v-app>    
</template>

<script>
import navBar from "../components/navBar";

export default {
   name: "Profile",
   components: {navBar},
}
</script>

<style scoped>

</style>