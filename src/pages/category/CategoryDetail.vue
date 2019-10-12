<template>
  <div class="detail-wrapper">
    <div class="category-detail">
      <div class="detail-swiper">
        <div class="swiper-container detail-swiper-container">
          <div class="swiper-wrapper detail-swiper-wrapper">
            <div class="swiper-slide detail-swiper-slide">
              <img v-lazy="category.bannerUrl">
            </div>
            <div class="swiper-slide detail-swiper-slide">
              <img v-lazy="category.wapBannerUrl">
            </div>
          </div>
          <div class="swiper-pagination detail-swiper-pagination"></div>
        </div>
      </div>
      <div class="detail-list">
        <ul>
          <li class="detail--item" v-for="(subCate,index) in category.subCateList" :key="index">
            <img v-lazy="subCate.bannerUrl">
            <p>{{subCate.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core'
  import Swiper from "swiper"
  export default {
    props:["categorys"],
    data (){
      return {
        category:{}
      }
    },
    mounted (){
      this.showDetail(this.$route.params.id*1)
      
    },
    watch :{
      $route (value){
        this.showDetail(value.params.id*1)
      },
      category (){
        this.$nextTick(()=>{
          new Swiper('.detail-swiper-container',{
            loop:true,
            autoplay:true,
            pagination: {
              el: '.detail-swiper-pagination'
            }
          })
        })
      }
    },
    methods:{
      showDetail (id){
        const category = this.categorys.find(category=>category.id===id)
        this.category = category
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .detail-wrapper{
    width: 588px;
    height: 1145px;
    .category-detail{
      width: 588px;
      height:100%;
      padding: 30px 30px 21px 30px;
      box-sizing: border-box;
      .detail-swiper{
        width: 100%;
        height: 192px;
        margin-bottom: 32px;
        .detail-swiper-container{
          width: 100%;
          height: 100%;
          .detail-swiper-wrapper{
            width: 100%;
            height: 100%;
            .detail-swiper-slide{
              width: 100%;
              height: 100%;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
          .detail-swiper-pagination{
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
      }
      .detail-list{
        width: 100%;
        ul{
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          .detail--item{
            width: 144px;
            height: 216px;
            margin-right: 32px;
            img{
              width: 144px;
              height: 144px;
            }
            p{
              width: 100%;
              font-size: 24px;
              color: #333;
              text-align: center;
            }
          }
        }
      }
    }
  }
 
</style>
