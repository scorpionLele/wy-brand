<template>
  <div id="header-wrapper">
    <header class="header">
      <div class="header-left" @click="$router.replace('/home')">
        <a href="javascript:"></a>
      </div>
      <div class="header-center">
        <slot name="title"></slot>
        
      </div>
      <div class="header-right">
        <a href="javasctipt:" class="search" @click="$router.push('/search')"></a>
        <a href="javasctipt:" class="shopCart" @click="$router.replace('/shopCart')"></a>
      </div>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/stylus/mixins.less';
  #header-wrapper{
    width: 100%;
    position: fixed;
    z-index: 99;
    .header{
      .border-bottom-1px(#d9d9d9);
      position: relative;
      width: 100%;
      height: 93px;
      padding: 0 16px 0 24px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #FAFAFA;
      .header-left{
        width:48px;
        height: 44px;
        a{
          display: block;
          width: 100%;
          height: 100%;
          background: url('../../../static/images/persinal-img/home.png') no-repeat;
          background-size: 100% 100%;
        }
      }
      .header-center{
        width: 320px;
        height: 100px;
        .title{
          position: absolute;
          left: 0;
          top:0;
          right:0;
          bottom:0;
          margin: auto;
          display: block;
          width :159px;
          height: 48px;
          background: url('../../../static/images/persinal-img/title.png') no-repeat center 2px;
          background-size: 100% ;
        }
      }
      .header-right{
        display: flex;
        align-items: center;
        .search{
          width: 64px;
          height:64px;
          background: url('../../../static/images/persinal-img/search.png') no-repeat center center;
          background-size: 69% ;
          margin-right: 20px;
        }
        .shopCart{
          width: 64px;
          height:64px;
          background: url('../../../static/images/persinal-img/shop_cart.png') no-repeat center center;
          background-size: 76% ;
          margin-right: 4px;
        }
      }
    }
  }
</style>
