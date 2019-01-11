// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import customers from './components/customers'
import about from './components/about'
import VueResource from 'vue-resource'
import add from './components/add'
import contenters from './components/contenters'
import Edit from './components/Edit'
import '../static/css/pcreset.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter);                                  //使用路由
const router = new VueRouter({             //配置路由 设置路由名称 传递一个对象
  mode:"history",
  base:__dirname,              //设置当前路径
  routes:[                                                     //固定参数 routes
    {path:"/",component:customers},                  //path：路由的地址 component：跳转到的组件
    {path:"/about",component:about},
    {path:"/add",component:add},
    {path:"/contenters/:id",component:contenters},
    {path:"/edit/:id",component:Edit}
  ]
});

new Vue({
  router,
  template: `
  <div id="app">
  <nav class="navs">
  <div class="center clearfix">
  <div class="nav_left">
  <span class="logo">用户管理系统</span>
  <ul>
  <li class="on"><router-link to="/">主页</router-link></li>
   <li><router-link to="/about">关于我们</router-link></li>
</ul>
</div>
<div class="nav_right"><router-link to="/add">添加用户</router-link></div>
</div>
</nav>
  <router-view></router-view>
</div>
  `
}).$mount("#app")
