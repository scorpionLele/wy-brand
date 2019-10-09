<template>
  <div class="search-container">
    <header class="header">
      <form action="">
        <div class="input-wrap">
          <i class="icon"></i>
          <input type="text" placeholder="网易味央黑猪肉礼盒 限时85折">
        </div>
      </form>
      <div class="cancle" @click="$router.back()">取消</div>
    </header>
    <div class="search-content">
      <h2 class="search-title">热门搜索</h2>
      <div class="search-menu">
        <a href="javascript:">免洗面膜仅49.9</a>
        <a href="javascript:" class="active">早秋服饰</a>
        <a href="javascript:">超薄纸尿裤</a>
        <a href="javascript:" class="active">金秋大闸蟹</a>
        <a href="javascript:">爆款 行李箱</a>
        <a href="javascript:">床垫</a>
        <a href="javascript:">996五宝茶</a>
        <a href="javascript:">内裤</a>
        <a href="javascript:">女鞋</a>
        <a href="javascript:">锅</a>
        <a href="javascript:">耳机</a>
        <a href="javascript:">手机壳</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
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
          padding: 0 15px;
          margin-right: 32px;
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
  }
 
</style>
