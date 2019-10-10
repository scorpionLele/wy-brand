import Vue from 'vue'
import 'lib-flexible'

import "./mockData/mockServer";
import App from './App.vue'
import router from "./router";
import store from "./vuex/store";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
