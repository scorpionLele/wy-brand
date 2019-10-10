import ajax from "./ajax";

export const reqHomeData = () => ajax('/mock/home')

export const reqCategoryData = () => ajax('/mock/category')