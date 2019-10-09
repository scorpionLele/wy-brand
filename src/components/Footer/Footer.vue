<template>
  <div id="footer" v-if="notShowPath.indexOf($route.path) === -1">
    <ul class="footer-list">
      <li class="footer-item" :class="{active:$route.path === '/home'}" @click="goto('home')">
        <i class="icon"></i>
        <span>首页</span>
      </li>
      <li class="footer-item" :class="{active:$route.path === '/category'}" @click="goto('category')">
        <i class="icon"></i>
        <span>分类</span>
      </li>
      <li class="footer-item" :class="{active:$route.path === '/goods'}" @click="goto('goods')">
        <i class="icon"></i>
        <span>识物</span>
      </li>
      <li class="footer-item" :class="{active:$route.path === '/shopCart'}" @click="goto('shopCart')">
        <i class="icon"></i>
        <span>购物车</span>
      </li>
      <li class="footer-item" :class="{active:$route.path === '/personal'}" @click="goto('personal')">
        <i class="icon"></i>
        <span>个人</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data (){
      return {
        notShowPath:['/personal','/search']
      }
    },
    methods:{
      goto (path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/stylus/mixins.less';
  @import '../../common/stylus/variable.less';
  #footer{
    .border-top-1px(#e4e4e4);
    z-index: 99;
    position :fixed;
    left :0;
    bottom :0;
    width :100%;
    height :98px;
    background :#fff;
    .footer-list{
      width :100%;
      height:100%;
      display :flex;
      align-items :center;
      .footer-item{
        width :20%;
        height:100%;
        display :flex;
        flex-direction :column;
        align-items :center;
        justify-content: center;
        font-size :24px;
        color :#666;
        span{
          margin-top: 4px;
        }
        .icon{
          display :block;
          width :40px;
          height :40px;
          background :url('../../../static/images/first-view/navIco.png') no-repeat;
          background-size :100% auto;
        }
        &:nth-child(1) .icon{
          background-position :center -250px;
        }
        &:nth-child(2) .icon{
          background-position :center -150px;
        }
        &:nth-child(3) .icon{
          background-position :center -350px;
        }
        &:nth-child(4) .icon{
          background-position :center -50px;
        }
        &:nth-child(5) .icon{
          background-position :center -450px;
        }
        &.active{
          color :@red;
        }
        &:nth-child(1).active .icon{
          background-position :center -200px;
        }
        &:nth-child(2).active .icon{
          background-position :center -100px;
        }
        &:nth-child(3).active .icon{
          background-position :center -300px;
        }
        &:nth-child(4).active .icon{
          background-position :center 0;
        }
        &:nth-child(5).active .icon{
          background-position :center -400px;
        }
      }
    }
  }
</style>
