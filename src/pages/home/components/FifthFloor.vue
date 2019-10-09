<template>
  <div class="fifth-floor">
    <header class="fifth-floor-header">
      <div class="header-left">人气推荐</div>
      <div class="header-right">
        <span>更多</span>
        <i class="more"></i>
      </div>
    </header>
    <div class="fifth-floor-content">
      <div class="contetn-left">
        <img src="../../../../static/images/first-view/fifthFloor/fifth_floor_big.png">
      </div>
      <div class="content-right">
        <p class="name">95%白鹅绒保暖羽绒被 升dshkjhdhf</p>
        <p class="sales">热销5万+条，洁净舒软好睡眠</p>
        <p class="price">￥1149</p>
      </div>
    </div>
    <div class="fifth-floor-list">
      <div class="fifth-floor-item">
        <img src="../../../../static/images/first-view/fifthFloor/fifth_floor_1.png">
        <div class="intro">
          <span class="describe">网易智造蒸汽沐足盆（可单买</span>
          <span class="product-price">￥449</span>
          <div class="special">
            <p>满400减60券</p>
          </div>
        </div>
      </div>
      <div class="fifth-floor-item">
        <img src="../../../../static/images/first-view/fifthFloor/fifth_floor_2.png">
        <div class="intro">
          <span class="describe">网易智造太空舱按摩大师椅</span>
          <span class="product-price">￥9479</span>
          <div class="special">
            <span>抄底特惠</span>
            <span>满赠</span>
          </div>
        </div>
      </div>
      <div class="fifth-floor-item">
        <img src="../../../../static/images/first-view/fifthFloor/fifth_floor_3.png">
        <div class="intro">
          <span class="describe">女士咖啡碳+5℃保暖内衣</span>
          <span class="product-price">￥169</span>
        </div>
      </div>
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
  .fifth-floor{
    width: 100%;
    height: 754px;
    background: #fff;
    padding-bottom: 30px;
    margin-bottom: 20px;
    .fifth-floor-header{
      .more-floor-header();
    }
    .fifth-floor-content{
      height: 280px;
      margin: 0 30px 20px 30px;
      background: #FEF0DF;
      display: flex;
      .contetn-left{
        width: 280px;
        height: 280px;
        margin-right: 30px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .content-right{
        width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name{
          font-size: 28px;
          color: #333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .sales{
          font-size: 24px;
          color: #7f7f7f;
        }
        .price{
          font-size: 28px;
          color: @red;
        }
      }
    }
    .fifth-floor-list{
      padding-left: 10px;
      display: flex;
      .fifth-floor-item{
        width: 216px;
        height: 341px;
        padding-bottom: 13px;
        margin-left: 20px;
        img{
          width: 216px;
          height: 216px;
          background: #F5F5F5;
        }
        .intro{
          margin-top: 8px;
          font-size: 24px;
          .product-price{
            color: @red;
          }
          .special{
            margin-top: 4px;
            p{
              display: inline-block;
              padding: 4px 20px;
              font-size: 20px;
              color: #ce2424;
              background-image: url('../../../../static/images/first-view/fifthFloor/border_left.png'),url('../../../../static/images/first-view/fifthFloor/border_right.png'),url('../../../../static/images/first-view/fifthFloor/border_top.png');
              background-repeat: no-repeat,no-repeat;
              background-position: left 0,right 0,center center;
              background-size: auto 100%,auto 100%,100% 100%;
              transform: scale(.8) translateX(-20px)
            }
            span{
              .special()
            }
          }
        }
      }
    }
  }
 
</style>
