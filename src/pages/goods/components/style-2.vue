<template>
  <div class="style-two" v-if="topic">
    <div class="style-two-container">
      <div class="container-left">
        <div class="name">
          <img :src="topic.avatar" class="avatar">
          <span>{{topic.nickname}}</span>
        </div>
        <div class="title">
          <p>{{topic.title}}</p>
        </div>
        <div class="subTitle">
          <p>{{topic.subTitle}}</p>
        </div>
        <div class="readCount">
          <i class="icon"></i>
          <span>{{topic.readCount}}人看过</span>
        </div>
      </div>
      <div class="container-right">
        <img :src="topic.picUrl">
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
  .style-two{
    width: 690px;
    height: 272px;
    padding: 32px 30px;
    background: #fff;
    margin-bottom: 20px;
    .style-two-container{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .container-left{
        width: 400px;
        height: 100%;
        .name{
          display: flex;
          align-items: center;
          .avatar{
            width: 56px;
            height: 56px;
            border: 1px solid #d9d9d9;
            border-radius: 50%;
            margin-right: 12px;
          }
          span{
            font-size: 28px;
            color: #333;
          }
        }
        .title{
          padding-top: 32px;
          p{
            font-size: 36px;
            color: #333;
          }
        }
        .subTitle{
          padding-top: 8px;
          p{
            font-size: 28px;
            color: #7f7f7f;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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
      .container-right{
        width: 272px;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
 
</style>
