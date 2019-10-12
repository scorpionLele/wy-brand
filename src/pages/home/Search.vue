<template>
  <div class="search-container">
    <header class="header">
      <form action="">
        <div class="input-wrap">
          <i class="icon"></i>
          <input type="text" :placeholder="inputData.keyword" @input="searchAutoComplete" v-model="keyword">
        </div>
      </form>
      <div class="cancle" @click="$router.back()">取消</div>
    </header>
    <div class="search-content" v-if="showMenu">
      <h2 class="search-title">热门搜索</h2>
      <div class="search-menu">
        <a href="javascript:" :class="{active:item.highlight === 1}" v-for="(item,index) in menuList">{{item.keyword}}</a>
      </div>
    </div>
    <ul class="searchList" v-else>
      <li class="searchItem" v-for="(searchItem,index) in searchList">{{searchItem}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { reqSearchData,reqSearchAutoComplete } from "../../api";
  export default {
    data (){
      return {
        keyword:'',
        inputData:{},
        menuList:[],
        showMenu:true,
        searchList:[]
      }
    },
    async mounted (){
      const result = await reqSearchData()
      this.inputData = result.data.defaultKeyword
      this.menuList = result.data.hotKeywordVOList
    },
    methods:{
      searchAutoComplete (event){
        if(event.target.value){
          this.showMenu = false
        }else{
          this.showMenu = true
        }
        if(this.timer){
          clearTimeout(this.timer)
        }
        
        this.timer = setTimeout(async ()=>{
          const result = await reqSearchAutoComplete(event.target.value)
          if(result.code === "200"){
            this.searchList = result.data
          }
        },1000)
        
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .search-container{
    background: #fff;
    .header{
      width: 100%;
      height: 87px;
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      form{
        .input-wrap{
          width: 564px;
          height: 56px;
          padding: 0 20px;
          background: #F4F4F4;
          display: flex;
          align-items: center;
          i{
            width: 28px;
            height: 28px;
            background: url('../../../static/images/first-view/home_search.png') no-repeat;
            background-size: 100% 100%;
            margin-right: 18px;
          }
          input{
            width: 520px;
            height: 39px;
            border: none;
            background: #F4F4F4;
            margin-top: 2px;
            &::-webkit-input-placeholder {
              color: rgba(0,0,0,.5);
              font-size: 28px;
            }
          }
        }
      }
      .cancle{
        font-size: 28px;
        column-count: #333;
      }
    }
    .search-content{
      width: 100%;
      padding: 0 30px 30px 30px;
      box-sizing: border-box;
      .search-title{
        height: 90px;
        line-height: 90px;
        color: #999;
        font-size: 28px;
      }
      .search-menu{
        display: flex;
        flex-wrap: wrap;
        a{
          height: 45px;
          line-height: 45px;
          padding: 0 10px;
          margin-right: 25px;
          margin-bottom: 32px;
          border: 2px solid #999;
          border-radius: 6px;
          color: #333;
          font-size: 24px;
          &.active{
            border-color: #b4282d;
            color: #b4282d;
          }
        }
      }
    }
    .searchList{
      width: 100%;
      padding-left: 30px;
      box-sizing: border-box;
      .searchItem{
        width: 100%;
        height: 90px;
        line-height: 90px;
        font-size: 28px;
        color: #333;
      }
    }
  }
 
</style>
