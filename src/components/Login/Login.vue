<template>
  <div class="phone-login">
    <div class="container">
      <div class="logo">
        <img src="../../../static/images/persinal-img/big_img.png">
      </div>
      <div class="mobileView">
        <form>
          <div class="phone">
            <input type="text" :placeholder="type === 'email'?'邮箱账号':'请输入手机号'" v-model="value" @input="verificationPhone"/>
            <i class="clear" v-show="value !== ''" @click="clearValue"></i>
          </div>
          <span class="verification" v-if="!phoneisright">{{type === "email"?'邮箱格式错误':'电话格式错误'}}</span>
          <div class="code">
            <input type="text" :placeholder="type === 'phone'?'请输入验证码':'请输入密码'" v-model="pwd" @input="verificationPwd"/>
            <button class="getCode" v-if="type === 'phone'">获取验证码</button>
            <i class="clear" v-show="pwd !== ''" @click="clearPwd" v-else></i>
          </div>
          <span class="verification" v-if="!pwdisright">{{type === "phone"?'验证码格式错误':'密码格式错误'}}</span>
          <div class="toggle-pwd">
            <slot name="left"></slot>
            <slot name="right"></slot>
          </div>
          <div class="login-btn">
            <button type="submit">登录</button>
          </div>
        </form>
        <div class="clause" v-if="type === 'phone'">
          <i class="agree" :class="{active:agreeClause}" @click="agreeClause = !agreeClause"></i>
          <span>我同意<a href="javascript:">《服务条款》</a>和<a href="javascript:">《网易隐私政策》</a></span>
        </div>
        <div class="else" @click="changeLoginType('change')">
          <span>其他登录方式</span>
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      type:String,
      changeLoginType:Function
    },
    data (){
      return {
        value:'',
        pwd:'',
        agreeClause:true,
        phoneisright:true,
        pwdisright:true
      }
    },
    watch:{
      value (value){
        if(value === ''){
          this.phoneisright = true
        }
      },
      pwd (value){
        if(value === ''){
          this.pwdisright = true
        }
      }
    },
    methods:{
      clearValue (){
        this.value = ''
      },
      clearPwd (){
        this.pwd = ''
      },
      verificationPhone (event){
        if(this.type === 'email'){
          let rex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g
          this.phoneisright = rex.test(event.target.value)
        }else{
          let rex = /^1[3456789]\d{9}$/
          this.phoneisright = rex.test(event.target.value)
        }
      },
      verificationPwd (event){
        if(this.type === 'phone'){
          let rex = /^[0-9a-zA-Z]{1,4}$/
          this.pwdisright = rex.test(event.target.value)
        }else{
          let rex = /^[0-9a-zA-Z]{1,16}$/
          this.pwdisright = rex.test(event.target.value)
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/stylus/mixins.less';
  
  .container{
    padding-top: 94px;
    width: 100%;
    height: 1241px;
    background: #fff;
    overflow: hidden;
    .logo{
      margin-top: 56px;
      margin-bottom: 40px;
      display: flex;
      justify-content: center;
      img{
        width: 192px;
        height: 65px;
      }
    }
    .mobileView{
      padding: 20px 40px 0 40px;
      .verification{
        color:red;
        font-size: 24px;
      }
      .phone,.code{
        .border-bottom-1px(#e4e4e4);
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input{
          width: 73%;
          height: 43px;
          margin: 28px 0;
          &::-webkit-input-placeholder {
            color: rgba(0,0,0,.5);
            font-size: 28px;
          }
        }
        .getCode{
          padding: 10px 15px;
          border: 2px solid #7f7f7f;
          border-radius: 8px;
          background: #fff;
          color: #333;
        }
        i{
          width: 28px;
          height: 28px;
          background: url('../../../static/images/persinal-img/clear.png') no-repeat;
          background-size: 100% 100%;
          margin-right: 20px;
        }
      }
      .toggle-pwd{
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        span{
          font-size: 28px;
          color: #333;
          &:nth-child(1){
            color: #7f7f7f;
          }
        }
      }
      .login-btn{
        width: 100%;
        height: 95px;
        margin-top: 40px;
        margin-bottom: 26px;
        button{
          width: 100%;
          height: 100%;
          background: #DD1A21;
          color: #fff;
          font-size: 28px;
          border-radius: 8px;
        }
      }
      .clause{
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        .agree{
          width: 35px;
          height: 35px;
          background-image: url('../../../static/images/persinal-img/disagree.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-right: 20px;
          &.active{
            background-image: url('../../../static/images/persinal-img/agree.png')
          }
        }
        span{
          color: #7f7f7f;
          padding-bottom: 4px;
          a{
            color: #007aff;
          }
        }
      }
      .else{
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          font-size: 28px;
          color: #333;
          padding-bottom: 4px;
        }
        i{
          width: 20px;
          height: 28px;
          margin-left: 4px;
          background: url('../../../static/images/first-view/more_arrows.png');
          background-size: 100% 100%;
        }
      }
    }
  }
 
</style>
