<template>
  <div class="category">
    <div class="category-container">
      <header class="header">
        <div class="search" @click="$router.push('/search')">
          <i></i>
          <span>搜索商品,共23098款好物</span>
        </div>
      </header>
      <div class="content">
        <div class="list-wrapper">
          <ul class="category-list">
            <li class="category-item" 
              :class="{active:currentIndex === index}" 
              v-for="(category,index) in categorys" 
              :key="index" 
              @click="currentIndex = index"
            >
              <router-link :to="`/category/category_detail/${category.id}`">{{category.name}}</router-link>
            </li>
          </ul>
        </div>
        <router-view :categorys="categorys" v-if="categorys.length > 0"></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core'
  import Swiper from "swiper"
  import { mapState } from "vuex";

  export default {
    data (){
      return {
        currentIndex:0
      }
    },
    mounted (){
      this.$store.dispatch('getCategorys')
    },
    computed:{
      ...mapState({
        categorys: state => state.category.categorys
      })
    },
    watch:{
      categorys (value){
        this.$nextTick(()=>{
          new BScroll('.list-wrapper',{
            click:true
          })
          // this.$router.replace(`/category/category_detail/${value[0].id}`)
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins.less';

  .category{
    width: 100%;
    height: 1334px;
    .category-container{
      width: 100%;
      height: 100%;
      background: #fff;
      padding-bottom: 100px;
      box-sizing: border-box;
      .header{
        .border-bottom-1px(#e4e4e4);
        position: fixed;
        z-index: 99;
        background: #fff;
        width: 100%;
        height: 88px;
        padding: 0 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        .search{
          width :690px;
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
      }
      .content{
        overflow: hidden;
        width: 100%;
        height: 1145px;
        padding-top: 88.5px;
        padding-bottom: 100.5px;
        background: #fff;
        display: flex;
        .category-list{
          width: 162px;
          padding-top: 40px;
          .category-item{
            position: relative;
            width: 100%;
            height: 50px;
            line-height: 50px;
            margin-bottom: 40px;
            font-size: 28px;
            color: #333;
            text-align: center;
            &.active a{
              color: #ab2b2b;
            }
            &.active::before{
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 6px;
              height: 100%;
              background: #ab2b2b;
            }
          }
        }
      }
    }
  }
</style>
