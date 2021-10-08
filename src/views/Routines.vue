<template>
  <div>
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
      <v-row>
        <v-col cols ="4"><category-card class="card"/></v-col>
        <v-col cols ="4"><category-card class="card"/></v-col>
        <v-col cols ="4"><category-card class="card"/></v-col>
        <v-col cols ="4"><category-card class="card"/></v-col>
        <v-col cols ="4"><category-card class="card"/></v-col>
        <v-col cols ="4"><category-card class="card"/></v-col>
        <v-col cols ="4"><category-card class="card"/></v-col>
        <v-col cols ="4"><category-card class="card"/></v-col>
        <v-col cols ="4"><category-card class="card"/></v-col>
        <v-col cols ="4"><category-card class="card"/></v-col>
        
        
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import CategoryCard from '../components/CategoryCard.vue';

export default {
  name: "Routines",
  data() {
    return {
      loading: false,
    }
  },
  components: {CategoryCard },
  methods: {
    ...mapActions('exercises', ['fetchExercises']),
  },
  computed: {
    ...mapState('exercises', {
        exercises: state => state.exercises
    }),
  },
  /*
  async created() {
    this.loading = true;
    await this.fetchExercises()
    this.loading = false;
  }
  */
};
</script>

<style scoped>
.options{
  padding: 50px 30px 30px;
}
.primary {
  background-color: #92D9D3;
}

.card {
  margin: 30px;
}

.text {
  font-weight: bold;
  font-size: 18px;
  text-transform: none;
}
</style>