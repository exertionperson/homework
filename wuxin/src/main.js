// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

// import Users from './components/Users.vue'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'

//el：“#app”要跟html一致
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

//配置路由
const router = new VueRouter({
		routes:[
				{path:"/",component:Home},
				{path:"/helloworld",component:HelloWorld},
		],
		mode:"history"  //干掉路径上的#号
})

//全局注册组件  前面是自己起的名 后面是组件名
  
// Vue.component("users",Users);
/* eslint-disable no-new */
new Vue({
	router,
  el: '#app',//目的地
  components: { App }, //App包含template/script/style,最终生成DOM结构
  // render:function (creater) {
  // 	return creater(App)
  // }  黑马的写法
  template: '<App/>'
})
//index.html -> main.js -> App.vue