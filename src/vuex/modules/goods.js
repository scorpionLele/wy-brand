import { reqGoods } from "../../api";
import { RECIVE_GOODS } from "../mutation-types";

const mutations = {
  [RECIVE_GOODS](state,{goods}){
    state.goods = goods
  }
}

const actions = {
  async getGoods ({commit}){
    const result = await reqGoods()
    if (result.code === 0){
      const goods = result.data
      commit(RECIVE_GOODS,{goods})
    }
  }
}

const state = {
  goods:[]
}

export default {
  state,
  actions,
  mutations
}