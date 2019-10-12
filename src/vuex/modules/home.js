import { RECIVE_HOMEDATA } from "../mutation-types";
import { reqHomeData } from "../../api";

const mutations = {
  [RECIVE_HOMEDATA](state,{homeData}){
    state.policyDescList = homeData.policyDescList
    state.kingKongList = homeData.kingKongModule.kingKongList
    state.sceneLightShoppingGuideModule = homeData.sceneLightShoppingGuideModule
    state.personalShop = homeData.personalShop
    state.flashSaleModule = homeData.flashSaleModule
    state.newItemList = homeData.newItemList
    state.popularItemList = homeData.popularItemList
    state.topicList = homeData.topicList
    state.zhongChouList = homeData.zhongChouList
  }
}

const actions = {
  async getHomeData ({commit}){
    const result = await reqHomeData()
    if(result.code === 0){
      const homeData = result.data
      commit(RECIVE_HOMEDATA,{homeData})
    }
  }
}

const state = {
  //服务策略
  policyDescList:[],
  //商品导航
  kingKongList: [],
  //购物导航榜单
  sceneLightShoppingGuideModule:[],
  //私人定制
  personalShop:[],
  //限时购
  flashSaleModule:[],
  //新品首发
  newItemList:[],
  //人气推荐
  popularItemList:[],
  //专题精选
  topicList:[],
  //众筹
  zhongChouList:[]
}

export default {
  state,
  actions,
  mutations
}