<template>
  <Login :type="'email'" :changeLoginType="changeLoginType">
    <span slot="left">注册账号</span>
    <span slot="right">忘记密码</span>
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
