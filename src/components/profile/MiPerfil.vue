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
       
            :items="this.generos.map(genero => genero.show)"
            label="Género"
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
                @click="save"
                depressed
                color="primary"
              ><v-icon class="save">mdi-content-save</v-icon>
                Guardar
              </v-btn>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-snackbar
        v-model="snackbar"
        color="success"
    ><v-icon class="save">mdi-check</v-icon>
      Perfil editado correctamente
      <template v-slot:action="{ attrs }">
        <v-btn
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-col>
</template>

<script>
// import store from "@/store/profile";
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    snackbar: false,
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
      let toSaveGenero = "";
      if(this.genero == "Hombre")
        toSaveGenero = "male";
      else if(this.genero == "Mujer")
       toSaveGenero = "female";
      else 
        toSaveGenero = "other";
      let newUser = {
          firstName: this.nombre,
          lastName: this.apellido,
          gender:  toSaveGenero ,
          phone :  this.telefono ,
          avatarUrl :  this.avatarUrl ,
      }
      
      await this.$modifyUser(newUser);
      this.snackbar = true;
   },
    
  },
  created() {
    this.nombre = this.$user.firstName;
    this.apellido = this.$user.lastName;
    this.genero = this.$user.gender;
    this.telefono = this.$user.phone;
    this.avatarUrl = this.$user.avatarUrl
    if(this.$user.gender == "male")
      this.genero = "Hombre";
    else if(this.$user.gender == "female")
      this.genero = "Mujer";
    else 
      this.genero = "Otro";
  }
};
</script>

<style scoped>
.save {
  margin-right: 10px;
}
</style>