<template>
  <div class="secend-floor">
    <h2 class="title">私人定制</h2>
    <div class="content">
      <div class="swiper-container secend-floor-swiper-container">
        <div class="swiper-wrapper secend-floor-swiper-wrapper">
          <div class="swiper-slide secend-floor-swiper-slide">
            <ul class="slide-list">
              <li class="slide-item">
                <img src="../../../../static/images/first-view/secendFloor/secend_floor_1.png">
                <p>泰国制造 天然乳胶枕<span>￥199</span></p>
              </li>
              <li class="slide-item">
                <img src="../../../../static/images/first-view/secendFloor/secend_floor_2.png">
                <p>专业除尘 网易制造N520除螨吸尘<span>￥349</span></p>
              </li>
              <li class="slide-item">
                <img src="../../../../static/images/first-view/secendFloor/secend_floor_3.png">
                <p>全棉针织条纹四件套<span>￥299</span></p>
              </li>
            </ul>
          </div>
          <div class="swiper-slide secend-floor-swiper-slide">
            <ul class="slide-list">
              <li class="slide-item">
                <img src="../../../../static/images/first-view/secendFloor/secend_floor_4.png">
                <p>泰国制造 天然乳胶枕<span>￥199</span></p>
              </li>
              <li class="slide-item">
                <img src="../../../../static/images/first-view/secendFloor/secend_floor_5.png">
                <p>专业除尘 网易制造N520除螨吸尘<span>￥349</span></p>
              </li>
              <li class="slide-item">
                <img src="../../../../static/images/first-view/secendFloor/secend_floor_6.png">
                <p>全棉针织条纹四件套<span>￥299</span></p>
              </li>
            </ul>
          </div>
          <div class="swiper-slide secend-floor-swiper-slide">
            <ul class="slide-list">
              <li class="slide-item">
                <img src="../../../../static/images/first-view/secendFloor/secend_floor_7.png">
                <p>泰国制造 天然乳胶枕<span>￥199</span></p>
              </li>
              <li class="slide-item">
                <img src="../../../../static/images/first-view/secendFloor/secend_floor_8.png">
                <p>专业除尘 网易制造N520除螨吸尘<span>￥349</span></p>
              </li>
              <li class="slide-item">
                <img src="../../../../static/images/first-view/secendFloor/secend_floor_9.png">
                <p>全棉针织条纹四件套<span>￥299</span></p>
              </li>
            </ul>
          </div>
          <div class="swiper-slide secend-floor-swiper-slide">
            <ul class="slide-list">
              <li class="slide-item">
                <img src="../../../../static/images/first-view/secendFloor/secend_floor_10.png">
                <p>泰国制造 天然乳胶枕<span>￥199</span></p>
              </li>
              <li class="slide-item">
                <img src="../../../../static/images/first-view/secendFloor/secend_floor_11.png">
                <p>专业除尘 网易制造N520除螨吸尘<span>￥349</span></p>
              </li>
              <li class="slide-item">
                <img src="../../../../static/images/first-view/secendFloor/secend_floor_12.png">
                <p>全棉针织条纹四件套<span>￥299</span></p>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-pagination secend-floor-swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from "swiper"
  export default {
    mounted (){
      new Swiper('.secend-floor-swiper-container',{
        loop:true,
        autoplay:true,
        pagination: {
          el: '.secend-floor-swiper-pagination'
        }
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../../common/stylus/variable.less';
  .secend-floor{
    width: 100%;
    height: 506px;
    background: #fff;
    margin-bottom: 20px;
    .title{
      width: 100%;
      height: 100px;
      line-height: 100px;
      padding: 0 30px;
      box-sizing: border-box;
      font-size: 32px;
      color: #333;
    }
    .content{
      width: 100%;
      height: 406px;
      padding-bottom:60px;
      .secend-floor-swiper-container{
        height: 100%;
        .secend-floor-swiper-wrapper{
          .secend-floor-swiper-slide{
            .slide-list{
              display: flex;
              .slide-item{
                width: 216px;
                height: 310px;
                margin-left: 20px;
                img{
                  width: 216px;
                  height: 216px;
                  background: #F5F5F5;
                  margin-bottom: 12px;
                }
                p{
                  font-size: 24px;
                  color: #333;
                  span{
                    color:@red;
                  }
                }
              }
            }
          }
        }
        .secend-floor-swiper-pagination{
          .swiper-pagination-bullet{
            width: 12px;
            height: 12px;
            background: #666;
            &.swiper-pagination-bullet-active{
              background-color: @red;
            }
          }
        }
      }
    }
  }
 
</style>
