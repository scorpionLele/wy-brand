<template>
  <Login :type="'pwd'" :changeLoginType="changeLoginType">
    <span slot="left">忘记密码？</span>
    <span @click="changeLoginType('phone')" slot="right">短信快捷登录</span>
  </Login>
</template>

<script type="text/ecmascript-6">
  import Login from "../../components/Login/Login";
  export default {
    props:{
      changeLoginType:Function
    },
    components:{
      Login
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
 
</style>
