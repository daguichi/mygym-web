<template>
  <!-- siguiente paso, comienzan los ciclos-->
  <v-dialog
    v-model="createRoutineDialogStep2"
    persistent
    max-width="900px"
    transition="v-slide-y-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">Siguiente</v-btn>
    </template>

    <!-- steppers steps -->
    <v-card class="rounded-xl" width="10000px" height="400px">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 0" step="0" editable>
            Calentamiento
          </v-stepper-step>

          <v-stepper-step
            v-for="n in steps"
            :key="n"
            :complete="e1 > n"
            :step="n"
            editable
          >
            {{ n }}º Ciclo
          </v-stepper-step>

          <v-stepper-step :complete="e1 > steps + 1" :step="steps + 1" editable>
            Enfriamiento
          </v-stepper-step>
        </v-stepper-header>
        <!-- steper contents  -->
        <v-stepper-items>
          <v-stepper-content step="0">

            <template>
                <v-container>
                  <v-row class="pl-3" v-for="exercise in exercises" :key="exercise.id">
                    <v-checkbox v-model="model[exercise+0]" :value="exercise" multiple ></v-checkbox>
                  </v-row>
                </v-container>
            </template>

            <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>
          <v-stepper-content v-for="n in steps" :key="n" :step="n">
            

            <v-btn color="primary" @click="e1 = n + 1"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>
          <v-stepper-content :step="steps + 1">
            

            <v-btn color="primary" @click="guardar"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
    <v-btn @click="createRoutineDialogStep2 = false"> Atras</v-btn> |
  </v-dialog>
</template>

<script>
export default {
  components: {},
  name: "calentamientoStep",
  props: {
    title: String,
    imgUrl: URL,
    steps: Number,
  },
  data() {
    return {
      reps: false,
      exercises: [
        { name: "Dog Photos", id: "20" },
        { name: "Dog ", id: "10" },
        { name: "Cat Photos", id: "15" },
      ],  
      model: [
        
      ],
      e1: 0,
      createRoutineDialogStep2: false,
      cycles: [],
      cycleName: [],
      cycleDetail: [],
      cycleType: [],
      order: [],
      repetitions: [],
    };
  },
  methods: {
    guardar() {
      console.log(this.model[0]);
      console.log(this.model[1]);
      console.log(this.model[2]);
      console.log(this.model[3]);
      console.log(this.model[4]);
    },
  },
};
/*
<template>
              <v-card class="mx-auto" max-width="500">
                <v-list shaped>
                  <v-list-item-group v-model="model[steps + 1]" multiple>
                    <template v-for="(item, i) in items">
                      <v-list-item
                        :key="`item-${i}`"
                        :value="item"
                        active-class="deep-purple--text text--accent-4"
                      >
                        <template v-slot:default="{ active }">
                          <v-list-item-content>
                            <v-list-item-title
                              v-text="item.name"
                            ></v-list-item-title>
                          </v-list-item-content>

                          <v-list-item-action>
                            <v-checkbox
                              :input-value="active"
                              color="deep-purple accent-4"
                            ></v-checkbox>
                          </v-list-item-action>
                        </template>
                      </v-list-item>
                    </template>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </template>
            */
</script>
