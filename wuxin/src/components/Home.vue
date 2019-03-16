<template>
  <div id="Home">
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
  <!--局部标签 -->
  <users v-bind:users="users"></users>
   <users v-bind:users="users"></users>
  <!--向子组件绑定属性-->
  <app-footer v-bind:title="title"></app-footer>
  </div>
</template>
<!--2行为： 处理逻辑-->
<script>
//局部注册组件 
import Users from './Users'
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'Home',
  data(){
    return{
    title:"这是我的第一个Vue脚手架项目！",
    users:[
//    {name:"Henry",position:"Web开发",show:false},
//    {name:"Henry",position:"Web开发",show:false},
//    {name:"Henry",position:"Web开发",show:false},
//    {name:"Henry",position:"Web开发",show:false},
//    {name:"Henry",position:"Web开发",show:false},
//    {name:"Henry",position:"Web开发",show:false},
//    {name:"Henry",position:"Web开发",show:false},
//    {name:"Henry",position:"Web开发",show:false},
//    {name:"Henry",position:"Web开发",show:false},
//   
      ],
      title:"传递的是一个值,(number,string,boolean)"
    }
  },
  methods:{
      updateTitle(title){
          this.title = title;
      }
  },
  components:{
    "users":Users,
    "app-header": Header,
    "app-footer": Footer,
  },
  //局部起名上面调用 但是不能起跟系统标签一样的名字  可以不起名
 	created(){
 		this.$http.get("http://jsonplaceholder.typicode.com/users")
 			.then((data) => {
// 			console.log(data);
 				this.users = data.body;
 		})
 	}
}
</script>


<style>
	  h3{
    color:red;
    }
    li{
    
    background:pink;
    list-style:none;
    }
</style>