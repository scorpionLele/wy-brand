<template>
  <div class="goods-cotainer">
    <Header>
      <div class="goods-title" slot="title">
        <a href="javascript:" :class="{active:currentRouter === 'find'}" @click="goFind">发现</a>
        <a href="javascript:" :class="{active:currentRouter === 'zhenxj'}" @click="goZhenXJ">甄选家</a>
      </div>
    </Header>
    <div class="goods-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from "../../components/Header/Header";
  import Find from "./Find";
  export default {
    data (){
      return {
        currentRouter:'find'
      }
    },
    mounted (){
      this.$store.dispatch('getGoods')
    },
    methods:{
      goFind (){
        this.currentRouter = 'find'
        this.$router.push('/goods/find')
      },
      goZhenXJ (){
        this.currentRouter = 'zhenxj'
        this.$router.push('/goods/zhenxuanjia')
      }
    },
    components:{
      Header,
      Find
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/stylus/variable.less';
  .goods-title{
    width: 320px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(25px);
    a{
      font-size: 28px;
      color: #7f7f7f;
      padding: 0 8px;
      margin-left: 20px;
      &.active{
        font-size: 40px;
        font-weight: bold;
        color: @red;
      }
    }
  }
 
</style>
