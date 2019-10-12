import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

import home from "./modules/home";
import category from "./modules/category";
import goods from "./modules/goods";

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules:{
    home,
    category,
    goods
  }
})