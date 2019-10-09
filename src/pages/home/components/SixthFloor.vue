<template>
  <div class="sixth-flooor">
    <header class="sixth-floor-header">类目热销榜</header>
    <div class="sixth-floor-content">
      <div class="content-top">
        <a href="javascript:" class="hot-sale">
          <div class="text">
            <span>热销榜</span>
          </div>
          <div class="img">
            <img src="../../../../static/images/first-view/sixthFloor/sixth_floor_1.png">
          </div>
        </a>
        <a href="javascript:" class="good-reputation">
          <div class="text">
            <span>好评榜</span>
          </div>
          <div class="img">
            <img src="../../../../static/images/first-view/sixthFloor/sixth_floor_2.png">
          </div>
        </a>
      </div>
      <div class="content-list">
        <a href="javascript:" class="content-item">
          <h2 class="item-title">居家生活榜</h2>
          <img src="../../../../static/images/first-view/sixthFloor/sixth_floor_3.png">
        </a>
        <a href="javascript:" class="content-item">
          <h2 class="item-title">美食酒水榜</h2>
          <img src="../../../../static/images/first-view/sixthFloor/sixth_floor_4.png">
        </a>
        <a href="javascript:" class="content-item">
          <h2 class="item-title">服饰鞋包榜</h2>
          <img src="../../../../static/images/first-view/sixthFloor/sixth_floor_5.png">
        </a>
        <a href="javascript:" class="content-item">
          <h2 class="item-title">个护清洁榜</h2>
          <img src="../../../../static/images/first-view/sixthFloor/sixth_floor_6.png">
        </a>
        <a href="javascript:" class="content-item">
          <h2 class="item-title">数码家电榜</h2>
          <img src="../../../../static/images/first-view/sixthFloor/sixth_floor_7.png">
        </a>
        <a href="javascript:" class="content-item">
          <h2 class="item-title">母婴亲子榜</h2>
          <img src="../../../../static/images/first-view/sixthFloor/sixth_floor_8.png">
        </a>
        <a href="javascript:" class="content-item">
          <h2 class="item-title">运动旅行榜</h2>
          <img src="../../../../static/images/first-view/sixthFloor/sixth_floor_9.png">
        </a>
        <a href="javascript:" class="content-item">
          <h2 class="item-title">全球特色榜</h2>
          <img src="../../../../static/images/first-view/sixthFloor/sixth_floor_10.png">
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .sixth-flooor{
    width: 100%;
    height: 710px;
    margin-bottom: 20px;
    background: #fff;
    .sixth-floor-header{
      width: 100%;
      height: 100px;
      line-height: 100px;
      padding: 0 30px;
      box-sizing: border-box;
      font-size: 32px;
      color: #333;
    }
    .sixth-floor-content{
      width: 100%;
      height: 610px;
      padding: 0 20px 20px 30px;
      box-sizing: border-box;
      .content-top{
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        a{
          width: 340px;
          height: 200px;
          display: flex;
          .text{
            width: 140px;
            position: relative;
            span{
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              margin-left: 20px;
              font-size: 28px;
              color: #333;
              &::after{
                content: '';
                width: 48px;
                height: 4px;
                background: #333;
                position: absolute;
                left: 0;
                bottom: -20px;;
              }
            }
          }
          .img{
            width: 200px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          &.hot-sale{
            background: #F9F3E4;
            margin-right: 10px;
          }
          &.good-reputation{
            background: #EBEFF6;
          }
        }
      }
      .content-list{
        display: flex;
        flex-wrap: wrap;
        .content-item{
          width: 165px;
          height: 170px;
          padding-top: 10px;
          margin-right: 10px;
          margin-bottom: 10px;
          background: #F5F5F5;
          display: flex;
          flex-direction: column;
          align-items: center;
          .item-title{
            font-size: 24px;
            color: #333;
          }
          img{
            width: 120px;
            height: 120px;
          }
        }
      }
    }
  }
 
</style>
