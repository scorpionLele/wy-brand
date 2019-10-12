<template>
  <div class="ad" v-if="ad">
    <div class="ad-container">
      <img :src="ad.picUrl">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      ad:Object
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .ad{
    width: 690px;
    height: 376px;
    padding: 36px 30px;
    background: #fff;
    margin-bottom: 20px;
    .ad-container{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }
  }
  
</style>
