import Home from "../pages/home/Home.vue";
import Category from "../pages/category/Category.vue";
import CategoryDetail from "../pages/category/CategoryDetail.vue";
import Goods from "../pages/goods/Goods.vue";
import ShopCart from "../pages/shopCart/ShopCart.vue";
import Personal from "../pages/personal/Personal.vue";
import Search from "../pages/home/Search.vue";
import Find from "../pages/goods/Find";
import ZhenXJ from "../pages/goods/ZhenXJ";

export default [
  {
    path:'/home',
    component: Home
  },
  {
    path: '/category',
    component: Category,
    children:[
      {
        path: '/category/category_detail/:id',
        component: CategoryDetail
      },
      {
        path: '/category',
        redirect: '/category/category_detail/1022001'
      }
    ]
  },
  {
    path: '/goods',
    component: Goods,
    children:[
      {
        path: '/goods/find',
        component: Find
      },
      {
        path: '/goods/zhenxuanjia',
        component: ZhenXJ
      },
      {
        path: '/goods',
        redirect: '/goods/find'
      }
    ]
  },
  {
    path: '/shopCart',
    component: ShopCart
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/search',
    component: Search
  },
  {
    path:'/',
    redirect:'/home'
  }
]