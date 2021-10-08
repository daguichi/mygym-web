<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
        <template v-slot:activator="{ on, attrs }">
         
              <v-icon color="primary"  rounded dark v-bind="attrs" v-on="on">mdi-play</v-icon>
        
        </template>
        <v-card class="container">
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>{{title}}</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <h1>{{title}}</h1>
        </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
  props: ['title', 'stars', 'imgUrl']
};
</script>

<style scoped>
.container{
  background: linear-gradient(291deg, #4e95a2 0%, #D4A373 100%);
  overflow: hidden;
}
</style>