<template>
  <div class="goods-tab">
    <div class="tab-wrapper">
      <ul class="tab-list">
        <li class="tab-item" :class="{active:currentIndex===index}" v-for="(tab,index) in goodsTab" :key="tab.tabId" @click="currentIndex = index">{{tab.tabName}}</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from "@better-scroll/core";

  import { reqGoodsTab } from "../../api";
  export default {
    data (){
      return {
        goodsTab:[],
        currentIndex:0
      }
    },
    async mounted (){
      const result = await reqGoodsTab()
      if(result.code === 0){
        this.goodsTab = result.data
      }
    },
    watch:{
      goodsTab (){
        this.$nextTick(()=>{
          new BScroll('.tab-wrapper',{
            click:true,
            scrollX:true
          })
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common//stylus/mixins.less';
  @import '../../common//stylus/variable.less';
  .goods-tab{
    .border-bottom-1px(#d9d9d9);
    position: fixed;
    width: 100%;
    height: 72px;
    margin-bottom: 20px;
    background: #fff;
    .tab-wrapper{
      position: relative;
      width: 100%;
      height: 100%;
      white-space: nowrap;
      overflow: hidden;
      .tab-list{
        position: absolute;
        height: 72px;
        .tab-item{
          position: relative;
          height: 100%;
          line-height: 72px;
          display: inline-block;
          padding: 0 8px;
          margin: 0 20px;
          font-size: 28px;
          color: #7f7f7f;
          &.active{
            color: @red;
            &::after{
              content: '';
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 4px;
              background: @red;
            }
          }
        }
      }
    }
  }
 
</style>
