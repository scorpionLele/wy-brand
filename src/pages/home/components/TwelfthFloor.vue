<template>
  <div class="twelfth-floor">
    <div class="twelfth-floor-content">
      <div class="scroll-wrapper">
        <div class="content-list">
          <div class="content-item">
            <img src="../../../../static/images/first-view/twelfthFloor/twelfth_floor_1.png">
            <div class="product-intro">
              <p class="product-name">阳澄湖牌大闸蟹礼券</p>
              <span class="product-price">￥1100<i>￥1298</i></span>
              <div class="special">
                <p>特价</p>
              </div>
            </div>
          </div>
          <div class="content-item">
            <img src="../../../../static/images/first-view/twelfthFloor/twelfth_floor_2.png">
            <div class="product-intro">
              <p class="product-name">懒人抹布 50节/卷</p>
              <span class="product-price">￥13.99</span>
            </div>
          </div>
          <div class="content-item">
            <img src="../../../../static/images/first-view/twelfthFloor/twelfth_floor_3.png">
            <div class="product-intro">
              <p class="product-name">100年传世珐琅锅22cm</p>
              <span class="product-price">￥268</span>
              <div class="special">
                <p>满赠</p>
              </div>
            </div>
          </div>
          <div class="content-item">
            <img src="../../../../static/images/first-view/twelfthFloor/twelfth_floor_4.png">
            <div class="product-intro">
              <p class="product-name">镁离子滤芯3+1 双效功能</p>
              <span class="product-price">￥169</span>
            </div>
          </div>
          <div class="content-item">
            <img src="../../../../static/images/first-view/twelfthFloor/twelfth_floor_5.png">
            <div class="product-intro">
              <p class="product-name">抽绳式垃圾袋</p>
              <span class="product-price">￥1100<i>￥1298</i></span>
              <div class="special">
                <p>特价</p>
              </div>
            </div>
          </div>
          <div class="content-item">
            <img src="../../../../static/images/first-view/twelfthFloor/twelfth_floor_6.png">
            <div class="product-intro">
              <p class="product-name">阳澄湖牌大闸蟹礼券</p>
              <span class="product-price">￥1100<i>￥1298</i></span>
              <div class="special">
                <p>特价</p>
              </div>
            </div>
          </div>
          <div class="content-item">
            <img src="../../../../static/images/first-view/twelfthFloor/twelfth_floor_7.png">
            <div class="product-intro">
              <p class="product-name">阳澄湖牌大闸蟹礼券</p>
              <span class="product-price">￥1100<i>￥1298</i></span>
              <div class="special">
                <p>特价</p>
              </div>
            </div>
          </div>
          <div class="content-item">
            <img src="../../../../static/images/first-view/twelfthFloor/twelfth_floor_8.png">
            <div class="product-intro">
              <p class="product-name">阳澄湖牌大闸蟹礼券</p>
              <span class="product-price">￥1100<i>￥1298</i></span>
              <div class="special">
                <p>特价</p>
              </div>
            </div>
          </div>
          <div class="see-more">查看更多></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core'
  export default {
    mounted (){
      new BScroll('.scroll-wrapper',{
        click:true,
        scrollX:true
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../../common/stylus/mixins.less';
  @import '../../../common/stylus/variable.less';
  .twelfth-floor{
    width: 100%;
    background: #fff;
    margin-bottom: 20px;
    .twelfth-floor-content{
      width: 100%;
      padding: 20px 0 30px 0;
      .scroll-wrapper{
        white-space: nowrap;
        overflow: hidden;
        .content-list{
          display: inline-block;
          .content-item{
            display: inline-block;
            vertical-align: top;
            width: 200px;
            margin-left: 20px;
            img{
              width: 200px;
              height: 200px;
              background: #f5f5f5;
              margin-bottom: 12px;
            }
            .product-intro{
              width: 100%;
              font-size: 24px;
              margin-top: 8px;
              .product-name{
                color: #333;
                white-space: pre-wrap;
              }
              .product-price{
                color: @red;
                i{
                  color: #999;
                  text-decoration: line-through;
                }
              }
              .special{
                margin-bottom: 4px;
                p{
                  .special()
                }
              }
            }
          }
          .see-more{
            display: inline-block;
            width: 200px;
            height: 200px;
            line-height: 200px;
            background: #f5f5f5;
            margin-left: 20px;
            font-size: 28px;
            color: #333;
            text-align: center;
          }
        }
      }
    }
  }
 
</style>
