<template>
  <div class="style-one" v-if="topic">
    <div class="style-one-container">
      <div class="name">
        <img :src="topic.avatar" class="avatar">
        <span>{{topic.nickname}}</span>
      </div>
      <div class="title">
        <p>{{topic.title}}</p>
      </div>
      <div class="img">
        <img :src="topic.picUrl">
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
  .style-one{
    width: 100%;
    background: #fff;
    margin-bottom: 20px;
    .style-one-container{
      width: 690px;
      padding: 36px 30px;
      .name{
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        .avatar{
          width: 56px;
          height: 56px;
          border-radius: 50%;
          margin-right: 12px;
        }
        span{
          font-size: 28px;
          color: #333;
        }
      }
      .title{
        margin-bottom: 16px;
        p{
          font-size: 36px;
          color: #333;
        }
      }
      .img{
        width: 100%;
        height: 376px;
        img{
          width: 100%;
          height: 100%;
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
