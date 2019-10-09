import Home from "../pages/home/Home.vue";
import Category from "../pages/category/Category.vue";
import Goods from "../pages/goods/Goods.vue";
import ShopCart from "../pages/shopCart/ShopCart.vue";
import Personal from "../pages/personal/Personal.vue";
import Search from "../pages/home/Search.vue";


export default [
  {
    path:'/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/goods',
    component: Goods
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