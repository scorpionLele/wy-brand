<template>
  <div class="tenth-floor">
    <header class="tenth-floor-header">
      <div class="header-left">众筹</div>
      <div class="header-right">
        <span>更多</span>
        <i class="more"></i>
      </div>
    </header>
    <div class="tenth-floor-content">
      <a href="javascript:" class="content-item">
        <div class="item-left">
          <img src="../../../../static/images/first-view/tenthFloor/tenth_floor_1.png">
        </div>
        <div class="item-right">
          <p>三朝失传·馆藏级汝官瓷</p>
          <p>￥599<span>起</span></p>
          <p>116%</p>
          <p>82人以支持</p>
        </div>
      </a>
      <a href="javascript:" class="content-item">
        <div class="item-left">
          <img src="../../../../static/images/first-view/tenthFloor/tenth_floor_2.png">
        </div>
        <div class="item-right">
          <p>四天三夜，烧一窑柴烧青花</p>
          <p>￥1088<span>起</span></p>
          <p>215%</p>
          <p>119人以支持</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../../common/stylus/mixins.less';
  @import '../../../common/stylus/variable.less';
  .tenth-floor{
    width: 100%;
    margin-bottom: 20px;
    background: #fff;
    .tenth-floor-header{
      .more-floor-header();
      .border-bottom-1px(#eee)
    }
    .tenth-floor-content{
      width: 100%;
      height: 480px;
      padding-bottom: 30px;
      .content-item{
        display: flex;
        justify-content: space-between;
        padding: 30px 30px 0 30px;
        .item-left{
          width:210px;
          height: 210px;
          background: #F4F4F4;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .item-right{
          display: flex;
          flex-direction: column;
          justify-content: center;
          p{
            margin: 2px 0;
          }
          p:nth-child(1){
            font-size: 28px;
            color: #333;
          }
          p:nth-child(2){
            font-size: 32px;
            color: @red;
            span{
              font-size: 24px;
            }
          }
          p:nth-child(3){
            font-size: 24px;
            color: #7f7f7f;
            &::before{
              content: '';
              display: inline-block;
              width: 360px;
              height: 6px;
              background: #FEA438;
              vertical-align: middle;
            }
          }
          p:nth-child(4){
            font-size: 24px;
            color: #7f7f7f;
          }
        }
      }
    }
  }
</style>
