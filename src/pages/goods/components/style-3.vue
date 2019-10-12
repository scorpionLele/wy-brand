<template>
  <div class="style-three" v-if="topic">
    <div class="style-three-container">
      <div class="title">
        <p>{{topic.title}}</p>
      </div>
      <div class="subTitle">
        <p>{{topic.subTitle}}</p>
      </div>
      <div class="imgList">
        <div class="img" v-for="(item,index) in topic.itemList" :key="item.itemId">
          <img :src="item.itemUrl">
        </div>
      </div>
      <div class="readCount">
        <i class="icon"></i>
        <span>{{topic.readCount}}人看过</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      topic:Object
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .style-three{
    width: 100%;
    background: #fff;
    margin-bottom: 20px;
    .style-three-container{
      width: 100%;
      padding: 36px 30px;
      box-sizing: border-box;
      .title{
        p{
          font-size: 36px;
          color: #333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .subTitle{
        padding-top: 8px;
        p{
          font-size: 28px;
          color: #7f7f7f;
        }
      }
      .imgList{
        margin: 24px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .img{
          width: 166px;
          height: 166px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .readCount{
        margin-top: 18px;
        display: flex;
        align-items: center;
        .icon{
          width: 28px;
          height: 20px;
          margin-right: 8px;
          background: url('../../../../static/images/goods/read.png') no-repeat;
          background-size: 100% 100%;
        }
        span{
          font-size: 24px;
          color: #999;
        }
      }
    }
  }
 
</style>
