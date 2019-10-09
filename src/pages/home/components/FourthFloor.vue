<template>
  <div class="fourth-floor">
    <header class="fourth-floor-header">
      <div class="header-left">新品首发</div>
      <div class="header-right">
        <span>更多</span>
        <i class="more"></i>
      </div>
    </header>
    <div class="content-list">
      <div class="content-item">
        <img src="../../../../static/images/first-view/fourthFloor/fourth_floor_1.png">
        <div class="product-intro">
          <span class="product-name">柔润护唇膏</span>
          <span class="product-price">￥24.9</span>
          <div class="new">
            <p>新品尝鲜价</p>
          </div>
        </div>
      </div>
      <div class="content-item">
        <img src="../../../../static/images/first-view/fourthFloor/fourth_floor_2.png">
        <div class="product-intro">
          <span class="product-name">女士荔纹牛皮英伦马丁靴</span>
          <span class="product-price">￥399</span>
        </div>
      </div>
      <div class="content-item">
        <img src="../../../../static/images/first-view/fourthFloor/fourth_floor_3.png">
        <div class="product-intro">
          <span class="product-name">地表强温 男士毛领鹅绒羽绒</span>
          <span class="product-price">￥1299</span>
        </div>
      </div>
      <div class="content-item">
        <img src="../../../../static/images/first-view/fourthFloor/fourth_floor_4.png">
        <div class="product-intro">
          <span class="product-name">踢脚线取暖器</span>
          <span class="product-price">￥899</span>
        </div>
      </div>
      <div class="content-item">
        <img src="../../../../static/images/first-view/fourthFloor/fourth_floor_5.png">
        <div class="product-intro">
          <span class="product-name">衣物除螨除菌液1L/3L</span>
          <span class="product-price">￥59.9</span>
        </div>
      </div>
      <div class="content-item">
        <img src="../../../../static/images/first-view/fourthFloor/fourth_floor_6.png">
        <div class="product-intro">
          <span class="product-name">地表强温 女士收腰派克大毛</span>
          <span class="product-price">￥1099</span>
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
  .fourth-floor{
    width: 100%;
    height: 735px;
    padding-bottom: 26px;
    margin-bottom: 20px;
    background: #fff;
    .fourth-floor-header{
      .more-floor-header();
    }
    .content-list{
      width: 100%;
      padding-left: 10px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      .content-item{
        width: 216px;
        height: 305px;
        padding-bottom: 13px;
        margin-left: 20px;
        img{
          width: 216px;
          height: 216px;
          background: #f5f5f5;
        }
        .product-intro{
          width: 100%;
          font-size: 24px;
          margin-top: 8px;
          .product-name{
            color: #333;
          }
          .product-price{
            color: @red;
          }
          .new{
            margin-bottom: 4px;
            p{
              .special()
            }
          }
        }
      }
    }
  }
 
</style>
