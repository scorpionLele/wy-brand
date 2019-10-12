<template>
  <Login :type="'phone'" :changeLoginType="changeLoginType">
    <span slot="left">遇到问题？</span>
    <span @click="changeLoginType('pwd')" slot="right">使用密码验证登录</span>
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
