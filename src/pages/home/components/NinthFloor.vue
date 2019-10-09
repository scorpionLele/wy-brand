<template>
  <div class="ninth-floor">
    <header class="ninth-floor-header">
      <div class="header-left">专题精选</div>
      <div class="header-right">
        <span>更多</span>
        <i class="more"></i>
      </div>
    </header>
    <div class="ninth-floor-content">
      <div class="scrollWrapper">
        <ul class="content-list">
          <li class="content-item">
            <img src="../../../../static/images/first-view/ninthFloor/ninth_floor_1.jpg">
            <p>边睡觉边按摩，乳胶枕的好睡过就知道</p>
            <span>严选明星商品泰国天然乳胶枕</span>
          </li>
          <li class="content-item">
            <img src="../../../../static/images/first-view/ninthFloor/ninth_floor_2.jpg">
            <p>石榴、猕猴桃、榴莲、黑猪肉，都是假的</p>
            <span>金秋九月必吃美食</span>
          </li>
          <li class="content-item">
            <img src="../../../../static/images/first-view/ninthFloor/ninth_floor_3.jpg">
            <p>献礼祖国70周年华诞，严选品类hfkjfkj</p>
            <span>超值国货特惠中......</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core'
  export default {
    mounted (){
      new BScroll('.scrollWrapper',{
        click:true,
        scrollX:true
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../../common/stylus/mixins.less';
  .ninth-floor{
    width: 100%;
    height: 508px;
    background: #fff;
    margin-bottom: 20px;
    .ninth-floor-header{
      .more-floor-header()
    }
    .ninth-floor-content{
      width: 100%;
      padding:0 30px 30px 30px;
      box-sizing: border-box;
      .scrollWrapper{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        .content-list{
          display: inline-block;
          .content-item{
            display: inline-block;
            width: 480px;
            padding-bottom: 24px;
            margin-right: 31.25px;
            background: #F5F5F5;
            img{
              width: 100%;
              margin-bottom: 20px;
            }
            p{
              width: 420px;
              padding-left: 20px;
              font-size: 28px;
              color: #333;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            span{
              padding-left: 20px;
              color: #7f7f7f;
              font-size: 24px;
            }
          }
        }
      }
    }
  }
</style>
