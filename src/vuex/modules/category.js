import { RECIVE_CATEGORYS } from "../mutation-types";
import {reqCategoryData} from "../../api";



const mutations = {
  [RECIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  }
}

const actions = {
  async getCategorys ({commit}){
    const result = await reqCategoryData()
    if (result.code === 0) {
      const categorys = result.data.categoryL1List
      commit(RECIVE_CATEGORYS,{categorys})
    }else{
      console.log('+++')
    }
  }
}

const state = {
  categorys : []
}

export default {
  state,
  actions,
  mutations
}