<template>
  <div class="goods-cotainer">
    <Header>
      <div class="goods-title" slot="title">
        <a href="javascript:" class="active">发现</a>
        <a href="javascript:">甄选家</a>
      </div>
    </Header>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from "../../components/Header/Header";
  export default {
    components:{
      Header
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
