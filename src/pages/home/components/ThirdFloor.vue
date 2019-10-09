<template>
  <div class="third-floor">
    <header class="third-floor-header">
      <div class="header-left">
        <span>限时购</span>
        <div class="count-down">
          <span class="date hours">{{hours}}</span>
          <span class="maohao">:</span>
          <span class="date minutes">{{minutes}}</span>
          <span class="maohao">:</span>
          <span class="date secends">{{secends}}</span>
        </div>
      </div>
      <div class="header-right">
        <span>更多</span>
        <i class="more"></i>
      </div>
    </header>
    <div class="content-list">
      <div class="content-item">
        <img src="../../../../static/images/first-view/thirdFloor/third_floor_1.png">
        <div class="price">
          <span class="discount-price">￥4549</span>
          <span class="original-price">￥6999</span>
        </div>
      </div>
      <div class="content-item">
        <img src="../../../../static/images/first-view/thirdFloor/third_floor_2.png">
        <div class="price">
          <span class="discount-price">￥279</span>
          <span class="original-price">￥299</span>
        </div>
      </div>
      <div class="content-item">
        <img src="../../../../static/images/first-view/thirdFloor/third_floor_3.png">
        <div class="price">
          <span class="discount-price">￥164</span>
          <span class="original-price">￥299</span>
        </div>
      </div>
      <div class="content-item">
        <img src="../../../../static/images/first-view/thirdFloor/third_floor_4.png">
        <div class="price">
          <span class="discount-price">￥39.9</span>
          <span class="original-price">￥49</span>
        </div>
      </div>
      <div class="content-item">
        <img src="../../../../static/images/first-view/thirdFloor/third_floor_5.png">
        <div class="price">
          <span class="discount-price">￥15</span>
          <span class="original-price">￥19</span>
        </div>
      </div>
      <div class="content-item">
        <img src="../../../../static/images/first-view/thirdFloor/third_floor_6.jpg">
        <div class="price">
          <span class="discount-price">￥45</span>
          <span class="original-price">￥59</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data (){
      return {
        date:new Date()
      }
    },
    mounted (){
      setInterval(() => {
        this.date = new Date()
      }, 1000);
    },
    computed:{
      hours (){
        let hours = this.date.getHours()
        if(hours < 10){
          hours = '0' + hours
        }
        return hours
      },
      minutes (){
        let minutes = this.date.getMinutes()
        if(minutes < 10){
          minutes = '0' + minutes
        }
        return minutes
      },
      secends (){
        let secends = this.date.getSeconds()
        if(secends < 10){
          secends = '0' + secends
        }
        return secends
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../../common/stylus/mixins.less';
  @import '../../../common/stylus/variable.less';
  .third-floor{
    width: 100%;
    height: 700px;
    background: #fff;
    margin-bottom: 20px;
    .third-floor-header{
      .floor-header();
      .header-left{
        display: flex;
        align-items: center;
        span{
          font-size: 32px;
          color: #333;
        }
        .count-down{
          height: 100px;
          margin-left: 12px;
          display: flex;
          align-items: center;
          .maohao{
            font-size: 28px;
            font-weight: bold;
            color: #333;
          }
          .date{
            width: 36px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            margin: 0 10px;
            background: #333;
            color: #fff;
            font-size: 24px;
            border-radius:4px;
          }
        }
      }
      .header-right{
        span{
          color: #333;
          font-size: 28px;
        }
        .more{
          display: inline-block;
          width: 13px;
          height: 23px;
          background: url('../../../../static/images/first-view/more_arrows.png') no-repeat;
          background-size: 100% 100%;
          margin-left: 8px;
        }
      }
    }
    .content-list{
      width :710px;
      height: 600px;
      padding: 0 10px 0 30px;
      display: flex;
      flex-wrap: wrap;
      .content-item{
        width: 216px;
        height: 270px;
        padding-bottom: 30px;
        margin-right: 20px;
        img{
          width: 100%;
          background: #F5F5F5;
          margin-bottom: 12px;
        }
        .price{
          padding-left: 10px;
          .discount-price{
            color: @red;
            font-size: 28px;
            margin-right: 10px;
          }
          .original-price{
            font-size: 24px;
            color: #7f7f7f;
            text-decoration: line-through;
          }
        }
      }
    }
  }
 
</style>
