<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Name of step 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Name of step 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Name of step 3
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 1">
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
export default {
  name: "Stepper",
  data() {
    return {
      e1: 1,
    };
  },
};
/*
<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 0" step="0" editable>
        Calentamiento
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :v-for="n in steps"
        :key="n"
        :complete="e1 > n"
        :step="n"
        editable
      >
        {{ n }}º Ciclo
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > steps + 1" :step="steps + 1" editable>
        Enfriamiento
      </v-stepper-step>

      <v-stepper-step :step="steps + 1">
        Enfriamiento
      </v-stepper-step>
    </v-stepper-header>
    <!-- steper contents  -->
    <v-stepper-items>
      <v-stepper-content step="0">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
      <v-stepper-content :v-for="n in steps" :key="n" :step="n">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
      <v-stepper-content :step="steps + 1">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  
</template>
*/
</script>
