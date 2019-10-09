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
          <li class="nav-item" v-for="(channel,index) in channels" :key="index" @click="changeChannel(index)">
            <a href="javascript:">{{channel}}</a>
          </li>
        </ul>
      </div>
      
      <div class="nav-menu" v-show="!isShowMenu">
        <div class="nav-menu-title">
          全部频道
        </div>
        <div class="nav-menu-content" ref="menuRef">
          <div class="menu-item" v-for="(channel,index) in channels" :key="index" @click="changeChannel(index)">{{channel}}</div>
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
        <li class="intro-item">
          <i class="intro-icon"></i>
          <span>网易自营品牌</span>
        </li>
        <li class="intro-item">
          <i class="intro-icon"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="intro-item">
          <i class="intro-icon"></i>
          <span>48小时快速退款</span>
        </li>
      </ul>
    </div>
    <div class="home-category">
      <div class="home-category-item">
        <img src="../../../static/images/first-view/category_1.png">
        <p>新品首发</p>
      </div>
      <div class="home-category-item">
        <img src="../../../static/images/first-view/category_2.png">
        <p>居家生活</p>
      </div>
      <div class="home-category-item">
        <img src="../../../static/images/first-view/category_3.png">
        <p>服饰鞋包</p>
      </div>
      <div class="home-category-item">
        <img src="../../../static/images/first-view/category_4.png">
        <p>美食酒水</p>
      </div>
      <div class="home-category-item">
        <img src="../../../static/images/first-view/category_5.png">
        <p>个护清洁</p>
      </div>
      <div class="home-category-item">
        <img src="../../../static/images/first-view/category_6.png">
        <p>母婴亲子</p>
      </div>
      <div class="home-category-item">
        <img src="../../../static/images/first-view/category_7.png">
        <p>运动旅行</p>
      </div>
      <div class="home-category-item">
        <img src="../../../static/images/first-view/category_8.png">
        <p>家电数码</p>
      </div>
      <div class="home-category-item">
        <img src="../../../static/images/first-view/category_9.png">
        <p>全球特色</p>
      </div>
      <div class="home-category-item">
        <img src="../../../static/images/first-view/category_10.gif">
        <p>好货抄底</p>
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
        isShowMenu:true,
        channels:['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色']
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
    methods:{
      showMenu (){
        this.isShowMenu = !this.isShowMenu
      },
      changeChannel(index){
        this.toggleActive(Array.from(this.$refs.navRef.children),index)
        this.toggleActive(Array.from(this.$refs.menuRef.children),index)
        const x = 44 + 10*index + 72*(index-1)
        this.navScroll.scrollTo(-x)
      },
      toggleActive (nodeArr,index){
        nodeArr.forEach(item => {
          item.classList.remove('active')
        })
        nodeArr[index].classList.add('active')
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
            background :url('../../../static/images/first-view/yi.png');
            background-size :100% 100%;
            margin-top: 2px;
          }
          &:nth-child(2) .intro-icon{
            background-image :url('../../../static/images/first-view/dunpai.png');
          }
          &:nth-child(3) .intro-icon{
            background-image :url('../../../static/images/first-view/qian.png');
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
