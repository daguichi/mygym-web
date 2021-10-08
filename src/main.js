import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false; // investigar que es esto
//Vue.config.silent = true          y esto que es

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
