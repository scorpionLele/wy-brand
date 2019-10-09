<template>
  <div class="enghth-floor">
    <header class="enghth-floor-header">
      <div class="header-left">品牌制造商直供</div>
      <div class="header-right">
        <span>更多</span>
        <i class="more"></i>
      </div>
    </header>
    <div class="enghth-floor-content">
      <a href="javascript:" class="content-item">
        <h2>海外制造商</h2>
        <p>9.9元起<span>上新</span></p>
      </a>
      <a href="javascript:" class="content-item">
        <h2>CK造商</h2>
        <p>29.9元起</p>
      </a>
      <a href="javascript:" class="content-item">
        <h2>新秀丽制造商</h2>
        <p>159元起</p>
      </a>
      <a href="javascript:" class="content-item">
        <h2>Armani制造商</h2>
        <p>199元起</p>
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
  .enghth-floor{
    width: 100%;
    height: 654px;
    background: #fff;
    margin-bottom: 20px;
    .enghth-floor-header{
      .more-floor-header()
    }
    .enghth-floor-content{
      width: 100%;
      padding: 0 26px 26px 30px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      .content-item{
        width: 343px;
        height: 260px;
        margin-right: 4px;
        margin-bottom: 4px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: bottom center;
        h2{
          font-size: 28px;
          color: #333;
          padding-top: 23px;
        }
        p{
          font-size: 24px;
          color: #7f7f7f;
          span{
            font-size: 24px;
            color: #fff;
            background: #CBB693;
            margin-left: 10px;
            padding: 4px;
            border-radius: 4px;
          }
        }
        &:nth-child(1){
          background-color: #F4FAFA;
          background-image: url('../../../../static/images/first-view/enghthFloor/enghth_floor_1.png');
        }
        &:nth-child(2){
          background-color: #F2F9F9;
          background-image: url('../../../../static/images/first-view/enghthFloor/enghth_floor_2.png');
        }
        &:nth-child(3){
          background-color: #F6F7F9;
          background-image: url('../../../../static/images/first-view/enghthFloor/enghth_floor_3.png');
        }
        &:nth-child(4){
          background-color: #FBF7F7;
          background-image: url('../../../../static/images/first-view/enghthFloor/enghth_floor_4.png');
        }
      }
    }
  }
 
</style>
