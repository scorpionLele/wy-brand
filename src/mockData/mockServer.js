import Mock from "mockjs";
import homeData from "./homeData.json";
import categoryData from "./category.json";

Mock.mock('/mock/home',{
  code:0,
  data: homeData
})

Mock.mock('/mock/category', {
  code: 0,
  data: categoryData
})