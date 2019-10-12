<template>
  <div class="personasl-container">
    <Header>
      <i class="title" slot="title"></i>
    </Header>
    <div class="change-type" v-if="loginType === 'change'">
      <div class="conrainer">
        <img src="../../../static/images/persinal-img/big_img.png">
      </div>
      <div class="login-type">
        <div class="phone-login" @click="changeLoginType('phone')">
          <i></i>
          <span>手机号快捷登录</span>
        </div>
        <div class="email-login" @click="changeLoginType('email')">
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
    <PhoneLogin v-if="loginType === 'phone'" :changeLoginType="changeLoginType"></PhoneLogin>
    <EmailLogin v-if="loginType === 'email'" :changeLoginType="changeLoginType"></EmailLogin>
    <PhonePwdLogin v-if="loginType === 'pwd'" :changeLoginType="changeLoginType"></PhonePwdLogin>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from "../../components/Header/Header";
  import PhoneLogin from "./PhoneLogin";
  import EmailLogin from "./EmailLogin";
  import PhonePwdLogin from "./PhonePwdLogin";
  export default {
    data (){
      return {
        loginType:'change'
      }
    },
    methods:{
      changeLoginType(type){
        this.loginType = type
      }
    },
    components:{
      Header,
      PhoneLogin,
      EmailLogin,
      PhonePwdLogin
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/stylus/mixins.less';

  .personasl-container{
    position: relative;
    width: 100%;
    height: 1334px;
    background: #F2F5F4;
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
