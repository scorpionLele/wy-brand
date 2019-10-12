<template>
  <div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from "./components/Footer/Footer";
  export default {
    mounted(){
      this.$store.dispatch('getHomeData')
    },
    components:{
      Footer
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  
 
</style>
