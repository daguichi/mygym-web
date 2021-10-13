<template>
  <v-col>
    <v-sheet min-height="70vh" rounded="lg">
      <h1 class="pa-6 font-weight-bold">Ficha tecnica</h1>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col></v-col>
          <v-col>
              <v-text-field
              v-model="this.nombreUsuario"
              label="Nombre de Usuario"
              required
              ></v-text-field>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col></v-col>
          <v-col>
              <v-text-field
                v-model="this.nombre"
                label="Nombre"
                 
              ></v-text-field>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col></v-col>
          <v-col>
              <v-text-field
              v-model="this.apellido"
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
       
            :items="generos"
            label="Genero"
            placeholder="Seleccione"
             
          ></v-autocomplete>
          </v-col>
          
          <v-col></v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col></v-col>
          <v-col>
          <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="Date"
              hint="MM/DD/YYYY format"
              persistent-hint
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
              <v-text-field
              v-model="this.cumpleaños"
              label="Cumpleaños"
               
              ></v-text-field>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col></v-col>
          <v-col>
              <v-text-field
              v-model="this.telefono"
              label="Teléfono"
               
              ></v-text-field>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col></v-col>
          <v-col>
              <v-text-field
              v-model="this.avatarUrl"
              label="Avatar (ingrese URL)"
               
              ></v-text-field>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-col>
</template>

<script>
// import store from "@/store/profile";
import { mapState } from "vuex";

export default {
  data: () => ({
    nombreUsuario: "",
    nombre: "",
    apellido: "",
    cumpleaños: "",
    telefono: "",
    avatarUrl: "",
    genero: [
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
    unwrap: ({
      username,
      firstName,
      lastName,
      gender,
      birthdate,
      metadata,
    }) => ({ username, firstName, lastName, gender, birthdate, metadata }),
  },
  created(){
    this.nombreUsuario = this.$user.username;
    this.nombre = this.$user.firstName;
    this.apellido = this.$user.lastName;
    this.genero = this.$user.gender;
    this.cumpleaños = this.$user.birthdate;
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