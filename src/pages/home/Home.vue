<template>
  <div class="home-container">
    <header class="header">
      <div class="logo">
        <img src="../../../static/images/first-view/logo.png" alt="logo">
      </div>
      <div class="search" @click="$router.push('/search')">
        <i></i>
        <span>搜索商品,共23098款好物</span>
      </div>
      <div class="login" @click="$router.replace('/personal')">登录</div>
    </header>
    <div class="home-nav">
      <div class="nav-list-wrap" v-show="isShowMenu">
        <ul class="nav-list" ref="navRef">
          <li 
            class="nav-item" 
            :class="{active:currentIndex === index}" 
            v-for="(kingKong,index) in kingKongList" 
            :key="index" 
            @click="changeChannel(index)"
          >
            <a href="javascript:">{{kingKong.text}}</a>
          </li>
        </ul>
      </div>
      
      <div class="nav-menu" v-show="!isShowMenu">
        <div class="nav-menu-title">
          全部频道
        </div>
        <div class="nav-menu-content" ref="menuRef">
          <div 
            class="menu-item" 
            :class="{active:currentIndex === index}" 
            v-for="(kingKong,index) in kingKongList" 
            :key="index" 
            @click="changeChannel(index)"
          >{{kingKong.text}}</div>
        </div>
      </div>
      
      <div class="nav-arrows" @click="showMenu">
        <i class="arrows" :class="{scaleArrows:!isShowMenu}"></i>
      </div>
      <div class="liner"></div>
    </div>
    <!-- 阴影遮罩 -->
    <div class="mask" v-show="!isShowMenu"></div>
    <!-- 轮播图 -->
    <div class="swiper-container home-swiper-container">
      <div class="swiper-wrapper home-swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../static/images/first-view/swiper_1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/images/first-view/swiper_2.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/images/first-view/swiper_3.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/images/first-view/swiper_4.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/images/first-view/swiper_5.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/images/first-view/swiper_6.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/images/first-view/swiper_7.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/images/first-view/swiper_8.jpg">
        </div>
      </div>
      <div class="swiper-pagination home-swiper-pagination"></div>
    </div>
    <div class="intro">
      <ul class="intro-list">
        <li class="intro-item" v-for="(policyDesc,index) in policyDescList" :key="index">
          <i class="intro-icon">
            <img v-lazy="policyDesc.icon">
          </i>
          <span>{{policyDesc.desc}}</span>
        </li>
      </ul>
    </div>
    <div class="home-category">
      <div class="home-category-item" v-for="(kingKong,index) in kingKongList" :key="index">
        <img :src="kingKong.picUrl">
        <p>{{kingKong.text}}</p>
      </div>
    </div>
    <img src="../../../static/images/first-view/flash-sale.gif" class="board">
    <FirstFloor></FirstFloor>
    <SecendFloor></SecendFloor>
    <ThirdFloor></ThirdFloor>
    <FourthFloor></FourthFloor>
    <FifthFloor></FifthFloor>
    <SixthFloor></SixthFloor>
    <SeventhFloor></SeventhFloor>
    <EnghthFloor></EnghthFloor>
    <NinthFloor></NinthFloor>
    <TenthFloor></TenthFloor>
    <EleventhFloor></EleventhFloor>
    <TwelfthFloor></TwelfthFloor>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script type="text/ecmascript-6" scoped>
  import Swiper from "swiper"
  import "swiper/css/swiper.min.css"
  import BScroll from '@better-scroll/core'
  import { mapState } from "vuex";
  
  import FirstFloor from "./components/FirstFloor";
  import SecendFloor from "./components/SecendFloor";
  import ThirdFloor from "./components/ThirdFloor";
  import FourthFloor from "./components/FourthFloor";
  import FifthFloor from "./components/FifthFloor";
  import SixthFloor from "./components/SixthFloor";
  import SeventhFloor from "./components/SeventhFloor";
  import EnghthFloor from "./components/EnghthFloor";
  import NinthFloor from "./components/NinthFloor";
  import TenthFloor from "./components/TenthFloor";
  import EleventhFloor from "./components/EleventhFloor";
  import TwelfthFloor from "./components/TwelfthFloor";
  import HomeFooter from "./components/HomeFooter";
  export default {
    data (){
      return {
        currentIndex:0,
        isShowMenu:true
      }
    },
    mounted (){
      new Swiper('.home-swiper-container',{
        loop:true,
        autoplay:true,
        pagination: {
          el: '.home-swiper-pagination'
        }
      })
      this.navScroll = new BScroll('.nav-list-wrap',{
        scrollX:true,
        click:true
      })
      
      this.changeChannel(0)
    },
    computed:{
      ...mapState({
        policyDescList:state => state.home.policyDescList,  //服务策略
        kingKongList:state => state.home.kingKongList, //商品导航
      })
    },
    methods:{
      showMenu (){
        this.isShowMenu = !this.isShowMenu
      },
      changeChannel(index){
        this.currentIndex = index
        const x = 44 + 10*index + 72*(index-1)
        this.navScroll.scrollTo(-x)
      }
    },
    components:{
      FirstFloor,
      SecendFloor,
      ThirdFloor,
      FourthFloor,
      FifthFloor,
      SixthFloor,
      SeventhFloor,
      EnghthFloor,
      NinthFloor,
      TenthFloor,
      EleventhFloor,
      TwelfthFloor,
      HomeFooter
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../common/stylus/variable.less';
  .home-container{
    width :100%;
    padding-bottom :100px;
    padding-top :148px;
    box-sizing: border-box;
    .header{
      z-index :99;
      position :fixed;
      left :0;
      top :0;
      display :flex;
      align-items :center;
      width :100%;
      height :88px;
      background :#fff;
      padding: 16px 30px;
      box-sizing: border-box;
      .logo{
        width :138px;
        height :40px;
        margin-right :20px;
        font-size:0;
        img{
          width :100%;
          height :100%;
        }
      }
      .search{
        width :442px;
        height :56px;
        background-color :#EDEDED;
        border-radius :10px;
        display :flex;
        align-items :center;
        justify-content: center;
        i{
          width :28px;
          height :28px;
          margin-right: 10px;
          background :url('../../../static/images/first-view/home_search.png') no-repeat; 
          background-size :100% 100%; 
        }
        span{
          font-size :28px;
          color :#666;
          margin-bottom: 1px;
        }
      }
      .login{
        width :72px;
        height :38px;
        line-height :44px;
        text-align: center;
        margin-left :16px;
        border :2px solid @red;
        border-radius :5px;
        color :@red;
        font-size :14px;
      }
    }
    .home-nav{
      position :fixed;
      z-index: 99;
      left:0;
      top:88px;
      width :100%;
      height :60px;
      background :#fff;
      .nav-list-wrap{
        width: 650px;
        white-space: nowrap;
        height :60px;
        display: flex;
        .nav-list{
          padding: 0 30px;
          font-size: 0;
          .nav-item{
            display: inline-block;
            position :relative;
            width :144px;
            height :100%;
            text-align :center;
            margin-left :20px;
            &:nth-child(1){
              width :88px;
              margin-left :0;
            }
            a{
              display :block;
              width :100%;
              height :100%;
              line-height :60px;
              font-size :28px;
            }
            &.active a{
              color :@red;
            }
            &.active::after{
              content :'';
              width :100%;
              height :4px;
              position :absolute;
              left :0;
              bottom :0;
              background :@red;
              border-radius :2px;
            }
          }
        }
      }
      
      .nav-menu{
        height: 100%;
        position: relative;
        
        .nav-menu-title{
          height: 100%;
          line-height: 60px;
          padding-left: 30px;
          font-size: 28px;
        }
        .nav-menu-content{
          width: 100%;
          padding-top: 24px;
          background: #fff;
          display: flex;
          flex-wrap: wrap;
          .menu-item{
            width: 148px;
            height: 54px;
            line-height: 54px;
            text-align: center;
            margin-left: 30px;
            margin-bottom: 40px;
            border: 2px solid #ccc;
            border-radius: 5px;
            background: #FAFAFA;
            font-size :24px;
            &.active{
              border-color: @red;
              color:@red;
            }
          }
        }
      }
      .nav-arrows{
        position :absolute; 
        top :0;
        right :0;
        width :100px;
        height :60px;
        text-align: center;
        background: #fff;
        .arrows{
          display: inline-block;
          width: 30px;
          height: 30px;
          margin-top :15px;
          background :url('../../../static/images/first-view/nav_arrows.png') no-repeat;
          background-size :100% 100%;
          transition: .5s;
          &.scaleArrows{
            transform: rotate(180deg)
          }
        }  
      }
      .liner{
        position :absolute; 
        top :0;
        right :100px;
        width: 60px;
        height: 60px;
        background-image: linear-gradient(to right,rgba(255,255,255,0),rgba(255,255,255,1) 90%);;
      }
    }
    .mask{
      z-index: 2;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.5);
    }
    .home-swiper-container{
      width :100%;
      height :370px;
      background :#fff;
      img{
        width :100%;
        height :100%;
      }
      .home-swiper-pagination{
        .swiper-pagination-bullet{
          background-color :#fff;
          opacity :.4;
          width :40px;
          height :4px;
          &.swiper-pagination-bullet-active{
            background-color :#fff;
            opacity :1;
          }
        }
      }
    }
    .intro{
      width :100%;
      height :72px;
      background :#fff;
      .intro-list{
        width :100%;
        height :100%;
        padding :0 30px;
        box-sizing :border-box;
        display :flex;
        align-items :center;
        .intro-item{
          width :33.33%;
          display: flex;
          align-items: center;
          .intro-icon{
            display :inline-block;
            width :32px;
            height :32px;
            background-size :100% 100%;
            margin-top: 2px;
            img{
              width:100%;
              height:100%;
            }
          }
          span{
            margin-left: 8px;
            font-size :24px;
          }
        }
      }
    }
    .home-category{
      width :100%;
      height:341px;
      background :#fff;
      display :flex;
      flex-wrap :wrap;
      padding-bottom :32px;
      .home-category-item{
        width :110px;
        height :156px;
        display :flex;
        flex-direction :column;
        align-items :center;
        margin :10px 20px;
        img{
          width :110px;
          height :110px;
        }
        p{
          height: 36px;
          line-height: 36px;
          text-align :center;
          font-size :24px;
          margin-top :10px;
        }
      }
    }
    .board{
      width :100%;
      height :126.66px;
    }
  }       
</style>
