<template>
  <div class="shopcart-container">
    <header class="header">
      <span class="shop-cart">购物车</span>
      <a href="javascript:">领券</a>
    </header>
    <div class="intro-nav">
      <ul class="nav-list">
        <li class="nav-item">
          <i class="icon"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="nav-item">
          <i class="icon"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="nav-item">
          <i class="icon"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="main">
      <div class="container">
        <div class="img"></div>
        <div class="text">
          <p>去添加点什么吧</p>
          <button class="shopCart-login">登录</button>
        </div>
      </div>
    </div>
  </div> 
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/stylus/variable.less';
  .shopcart-container{
    position: relative;
    width: 100%;
    height: 1334px;
    .header{
      width: 100%;
      height: 88px;
      padding: 0 30px;
      box-sizing: border-box;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .shop-cart{
        font-size: 36px;
        margin-bottom: 2px;
      }
      a{
        color: @red;
        font-size: 30px;
        margin-right: 30px;
        margin-bottom: 2px;
      }
    }
    .intro-nav{
      width: 100%;
      height: 70px;
      background: #eee;
      .nav-list{
        width: 100%;
        height: 100%;
        padding: 0 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .nav-item{
          display: flex;
          align-items: center;
          .icon{
            width: 10px;
            height: 10px;
            background: url('../../../static/images/shop-cart/icon.png') no-repeat;
            background-size: 100%;
            margin-right: 6px;
          }
          span{
            color: #666;
            font-size: 24px;
          }
        }
      }
    }
    .main{
      position: absolute;
      left: 0;
      top:156px;
      right: 0;
      bottom: 0;
      margin: 0;
      width: 100%;
      background: #F4F4F4;
      .container{
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-70%);
        width: 100%;
        height: 300px;
        margin: auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .img{
          flex-shrink: 0;
          width: 248px;
          height: 248px;
          background: url('../../../static/images/shop-cart/shop_cart_bg.png') no-repeat;
          background-size:100% 100%;
          margin-bottom: -18px;
        }
        .text{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          p{
            color: #999;
            font-size: 28px;
            text-align: center;
            margin-bottom: 50px;
          }
          .shopCart-login{
            border: none;
            outline: none;
            background: @red;
            font-size: 30px;
            color: #fff;
            width: 480px;
            height: 92px;
          }
        }
      }
    }
  }
 
</style>
