<template>
  <div class="find">
    <div class="find-container">
      <GoodsTab></GoodsTab>
      <div class="content">
        <div class="content-list" v-for="(good,index) in goods" :key="index">
          <Ad v-if="good.ad" :ad="good.ad"></Ad>
          <div class="content-item" v-for="(topic,index) in good.topics" :key="index">
            <StyleTwo v-if="topic.style === 2" :topic="topic"></StyleTwo>
            <StyleOne v-if="topic.style === 1" :topic="topic"></StyleOne>
            <StyleThree v-if="topic.style === 3" :topic="topic"></StyleThree>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from "vuex";

  import GoodsTab from "./GoodsTab";
  import Ad from "./components/ad";
  import StyleTwo from "./components/style-2";
  import StyleOne from "./components/style-1";
  import StyleThree from "./components/style-3";
  export default {
    computed:{
      ...mapState({
        goods:state => state.goods.goods
      })
    },
    components:{
      GoodsTab,
      Ad,
      StyleTwo,
      StyleOne,
      StyleThree
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .find-container{
    padding-top: 94px;
    padding-bottom: 100px;
    .content{
      padding-top: 72px;
    }
  }
 
</style>
