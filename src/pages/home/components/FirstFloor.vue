<template>
  <div class="first-floor">
    <div class="first-floor-item">
      <h2>9.9超值专区</h2>
      <p>190款商品定价直降</p>
      <img src="../../../../static/images/first-view/first_floor-1-1.png">
      <img src="../../../../static/images/first-view/first_floor-1-2.png">
    </div>
    <div class="first-floor-item">
      <h2>享住</h2>
      <p>家的多种可能</p>
      <img src="../../../../static/images/first-view/first_floor-2-1.png">
      <img src="../../../../static/images/first-view/first_floor-2-2.png">
    </div>
    <div class="first-floor-item">
      <h2>靠谱好物大盘点</h2>
      <p>闭着眼买都不会错</p>
      <img src="../../../../static/images/first-view/first_floor-3-1.png">
      <img src="../../../../static/images/first-view/first_floor-3-2.png">
    </div>
    <div class="first-floor-item">
      <h2>重阳登高赏桂</h2>
      <p>不负美好秋光</p>
      <img src="../../../../static/images/first-view/first_floor-4-1.png">
      <img src="../../../../static/images/first-view/first_floor-4-2.png">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .first-floor{
    background :#fff;
    width :100%;
    height :576px;
    margin-bottom :20px;
    padding :10px 30px 30px 26px;
    box-sizing :border-box;
    display :flex;
    flex-wrap :wrap;
    .first-floor-item{
      width :323px;
      height :244px;
      margin-left :4px;
      margin-top :4px;
      padding-left :20px;
      padding-top :20px;
      background :#F5F5F5;
      border-radius :5px;
      h2{
        height:48px;
        line-height:48px;
        padding-left :10px;
        font-size :32px;
      }
      p{
        height:36px;
        line-height:36px;
        padding-left :10px;
        font-size :24px;
        color :#7f7f7f;
      }
      img{
        display :inline-block;
        width :150px;
        height :150px;
        margin-right: 4px;
      }
    }
  }
 
</style>
