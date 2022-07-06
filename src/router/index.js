import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from '@/pages/Home/HomePage'
import LoginPage from '@/pages/Login/LoginPage'
import RegisterPage from '@/pages/Register/RegisterPage'
import SearchPage from '@/pages/Search/SearchPage'
Vue.use(VueRouter)

// 重写push和replace方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location,resolve,reject){
  if(resolve &&reject){
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{})
  }
}
VueRouter.prototype.replace = function(location,resolve,reject){
  if(resolve && reject){
    originReplace.call(this,location,resolve,reject)
  }else{
    originReplace.call(this,location,()=>{},()=>{})
  }
}

const router = new VueRouter({
  routes:[
    {
      path:'/home',
      component:HomePage,
      meta:{show:true}
    },
    {
      path:'/login',
      component:LoginPage,
      meta:{show:false}
    },
    {
      path:'/register',
      component:RegisterPage,
      meta:{show:false}
    },
    {
      name:'search',
      path:'/search/:keyWord',
      component:SearchPage,
      meta:{show:true}
    },
    // 重定向，在项目启动的时候让页面定向跳转到home首页
    {
      path:'*',
      redirect:'/home'
    },
  ]
})

export default router