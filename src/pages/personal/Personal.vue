<template>
  <div class="personasl-container">
    <Header>
      <i class="title" slot="title"></i>
    </Header>
    <!-- <header class="header">
      <div class="header-left" @click="$router.replace('/home')">
        <a href="javascript:"></a>
      </div>
      <div class="header-center">
        <i class="title"></i>
      </div>
      <div class="header-right">
        <a href="javasctipt:" class="search" @click="$router.push('/search')"></a>
        <a href="javasctipt:" class="shopCart" @click="$router.replace('/shopCart')"></a>
      </div>
    </header> -->
    <div class="conrainer">
      <img src="../../../static/images/persinal-img/big_img.png">
    </div>
    <div class="login-type">
      <div class="phone-login">
        <i></i>
        <span>手机号快捷登录</span>
      </div>
      <div class="email-login">
        <i></i>
        <span>邮箱帐号登录</span>
      </div>
    </div>
    <div class="more-type">
      <div class="weixin">
        <i></i>
        <span>微信</span>
      </div>
      <div class="QQ">
        <i></i>
        <span>QQ</span>
      </div>
      <div class="weibo">
        <i></i>
        <span>微博</span>
      </div>
    </div>
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
  @import '../../common/stylus/mixins.less';

  .personasl-container{
    position: relative;
    width: 100%;
    height: 100%;
    background: #F2F5F4;
    // .header{
    //   .border-bottom-1px(#d9d9d9);
    //   position: relative;
    //   width: 100%;
    //   height: 87px;
    //   padding: 0 16px 0 24px;
    //   box-sizing: border-box;
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   background: #FAFAFA;
    //   .header-left{
    //     width:48px;
    //     height: 44px;
    //     a{
    //       display: block;
    //       width: 100%;
    //       height: 100%;
    //       background: url('../../../static/images/persinal-img/home.png') no-repeat;
    //       background-size: 100% 100%;
    //     }
    //   }
    //   .header-center{
    //     width :172px;
    //     height: 54px;
    //     .title{
    //       position: absolute;
    //       left: 0;
    //       top:0;
    //       right:0;
    //       bottom:0;
    //       margin: auto;
    //       display: block;
    //       width :159px;
    //       height: 48px;
    //       background: url('../../../static/images/persinal-img/title.png') no-repeat center 2px;
    //       background-size: 100% ;
    //     }
    //   }
    //   .header-right{
    //     display: flex;
    //     align-items: center;
    //     .search{
    //       width: 64px;
    //       height:64px;
    //       background: url('../../../static/images/persinal-img/search.png') no-repeat center center;
    //       background-size: 69% ;
    //       margin-right: 20px;
    //     }
    //     .shopCart{
    //       width: 64px;
    //       height:64px;
    //       background: url('../../../static/images/persinal-img/shop_cart.png') no-repeat center center;
    //       background-size: 76% ;
    //       margin-right: 4px;
    //     }
    //   }
    // }
    .conrainer{
      width :100%;
      padding-top: 160px;
      padding-bottom: 232px;
      img{
        width :268px;
        height :90px;
        margin : 0 auto;
      }
    }
    .login-type{
      width: 100%;
      height: 220px;
      padding: 0 40px;
      margin-bottom: 205px;
      box-sizing: border-box;
      .phone-login{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 94px;
        margin-bottom: 32px;
        background: #DD1A21;
        color: #fff;
        i{
          width: 40px;
          height: 40px;
          margin-right: 16px;
          background: url('../../../static/images/persinal-img/icon_img.png') no-repeat center -50px;
          background-size: 100% auto;
        }
        span{
          font-size: 28px;
          margin-bottom: 1px;
        }
      }
      .email-login{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 94px;
        background: #F2F5F4;
        color: #DD1A21;
        border: 1px solid #DD1A21;
        i{
          width: 40px;
          height: 40px;
          margin-right: 14px;
          background: url('../../../static/images/persinal-img/icon_img.png') no-repeat center 0px;
          background-size: 100% auto;
        }
        span{
          font-size: 28px;
          margin-bottom: 1px;
        }
      }
    }
    .more-type{
      position: absolute;
      left: 0;
      top: 1216px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .weixin,.QQ,.weibo{
        display: flex;
        justify-content: center;
        align-items: center;
        height :40px;
        line-height: 40px;
        padding :0 42px;
        border-right :1px solid #979797;
        i{
          width: 40px;
          height: 40px;
          background: url('../../../static/images/persinal-img/weixin.png') no-repeat;
          background-size: 100% auto;
          margin-bottom: 2px;
        }
        span{
          font-size: 27px;
          margin-left :5px;
          color :#7F7F7F;
        }
      }
      .QQ{
        i{
          background-image: url('../../../static/images/persinal-img/qq.png')
        }
      }
      .weibo{
        border-right :none;
        i{
          background-image :url('../../../static/images/persinal-img/weibo.png')
        }
      }
    }
  }
 
</style>
