<template>
  <v-col>
    <v-sheet min-height="70vh" rounded="lg">
      <h1 class="pa-6 font-weight-bold">Mi perfil</h1>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col></v-col>
          <v-col>
              <v-text-field
                v-model="nombre"
                label="Nombre"
                 
              ></v-text-field>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col></v-col>
          <v-col>
              <v-text-field
              v-model="apellido"
              label="Apellido"
               
              ></v-text-field>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col></v-col>
          
          <v-col>
              <v-autocomplete
            
            v-model="genero"
       
            :items="this.generos.map(genero => genero.value)"
            label="Genero"
            placeholder="Seleccione"
             
          ></v-autocomplete>
          </v-col>
          
          <v-col></v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col></v-col>
          <v-col>
              <v-text-field
              v-model="telefono"
              label="Teléfono"
               
              ></v-text-field>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col></v-col>
          <v-col>
              <v-text-field
              v-model="avatarUrl"
              label="Avatar (ingrese URL)"
               
              ></v-text-field>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col></v-col>
          <v-col>
             <v-btn
                class="mx-2"
                fab
                dark
                large
                color="cyan"
                @click="save"
              >
                <v-icon dark>
                  mdi-content-save
                </v-icon>
              </v-btn>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-col>
</template>

<script>
// import store from "@/store/profile";
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    nombre: "",
    apellido: "",
    telefono: "",
    avatarUrl: "",
    genero: "",
    generos: [
        { show: "Hombre", value: "male" },
        { show: "Mujer", value: "female" },
        { show: "Otro", value: "other" },
      ],
  }),
  computed: {
    ...mapState("security", {
      $user: (state) => state.user,
    }),
  },
  methods: {
    ...mapActions("security", {
      $modifyUser: "modifyUser"
    }),
    async save() {
      let newUser = {
          firstName: this.nombre,
          lastName: this.apellido,
          gender:  this.genero ,
          phone :  this.telefono ,
          avatarUrl :  this.avatarUrl ,
      }
      
      await this.$modifyUser(newUser);
      console.log(this.$user)
   },
    
  },
  created() {
    this.nombre = this.$user.firstName;
    this.apellido = this.$user.lastName;
    this.genero = this.$user.gender;
    this.telefono = this.$user.phone;
    this.avatarUrl = this.$user.avatarUrl
    if(this.$user.gender == "male")
      this.genero = "male";
    else if(this.$user.gender == "female")
      this.genero = "female";
    else 
      this.genero = "other";
  }
};
</script>

<style>
</style>