import Vue from 'vue'
import 'lib-flexible'

//图片懒加载
import VueLazyload from "vue-lazyload";
import loading from "../static/images/first-view/lazyLoad.gif";


import "./mockData/mockServer";
import App from './App.vue'
import router from "./router";
import store from "./vuex/store";

Vue.config.productionTip = false

Vue.use(VueLazyload,{
  loading
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
