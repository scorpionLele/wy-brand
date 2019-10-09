<template>
  <div class="seventh-floor">
    <ul class="seventh-floor-list">
      <li class="seventh-floor-item">
        <p>福利社</p>
        <p>抢超值神券</p>
        <span>享今日特价</span>
      </li>
      <li class="seventh-floor-item">
        <p>严选一起拼</p>
        <p>超值1元团</p>
        <span>全场包邮</span>
      </li>
      <li class="seventh-floor-item">
        <p>会员俱乐部</p>
        <p>领取每月礼券</p>
      </li>
      <li class="seventh-floor-item">
        <p>积分兑换</p>
        <p>限时限量0元兑</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../../common/stylus/variable.less';
  .seventh-floor{
    width: 100%;
    padding: 30px 26px 26px 30px;
    box-sizing: border-box;
    margin-bottom: 20px;
    background: #fff;
    .seventh-floor-list{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .seventh-floor-item{
        width: 313px;
        height: 200px;
        padding-top: 20px;
        padding-left: 30px;
        margin-right: 4px;
        margin-bottom: 4px;
        border-radius: 4px;
        background-repeat: no-repeat;
        background-size: 200px 200px;
        background-position: 140px center;
        p:nth-child(1){
          font-size: 32px;
          color: #333;
        }
        p:nth-child(2){
          font-size: 24px;
          color: #7f7f7f;
        }
        &:nth-child(1){
          background-color: #EBEFF6;
          background-image: url('../../../../static/images/first-view/seventhFloor/seventh_floor_1.png');
          span{
            font-size: 24px;
            color: @red;
          }
        }
        &:nth-child(2){
          background-color: #EAF3E7;
          background-image: url('../../../../static/images/first-view/seventhFloor/seventh_floor_2.png');
          span{
            padding: 0 10px;
            font-size: 22px;
            color: #fff;
            background: #CBB693;
            border-radius: 4px;
          }
        }
        &:nth-child(3){
          background-color: #F8EFEE;
          background-image: url('../../../../static/images/first-view/seventhFloor/seventh_floor_3.gif');
        }
        &:nth-child(4){
          background-color: #F9F3E4;
          background-image: url('../../../../static/images/first-view/seventhFloor/seventh_floor_4.gif');
        }
      }
    }
  }
 
</style>
