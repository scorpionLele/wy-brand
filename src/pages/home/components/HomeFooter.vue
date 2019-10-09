<template>
  <div class="home-footer">
    <div class="content">
      <div class="download-type">
        <a href="javascript:" class="App">下载APP</a>
        <a href="javascript:" class="pc">电脑版</a>
      </div>
      <p class="copyright">网易公司版权所有 @ 1997-2019</p>
      <p class="licence">食品经营许可证：JY1330465465121</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .home-footer{
    width: 100%;
    height:244px;
    padding: 54px 20px 28px 20px;
    box-sizing: border-box;
    background: #414141;
    .content{
      width: 100%;
      height: 100%;
      .download-type{
        width: 100%;
        height: 62px;
        margin-bottom: 36px;
        text-align: center;
        a{
          display: inline-block;
          width: 170px;
          height: 100%;
          line-height: 62px;
          border: 1px solid #999;
          font-size: 24px;
          color: #fff;
          &.App{
            margin-right: 50px;
          }
        }
      }
      p{
        text-align: center;
        font-size: 24px;
        color: #999;
      }
    }
  }
 
</style>
