<!--1模板 html结构 只能包含根节点在 2.x之后-->
<template>
  <div id="app">
  	<ul>
  				<li><router-link to="/">Home</router-link></li>
  				<li><router-link to="/helloworld">helloworld</router-link></li>
  				
  				<!--
  							<li><a href="/">Home</a></li>
  							<li><a href="/helloworld">hello</a></li>
                a 标签不管运行多少次项目都会重新进行加载 不利于项目的运行
                  -->
  			</ul>	
  			<router-view></router-view>
  			
	</div>

</template>
<!--2行为： 处理逻辑-->
<script>
export default ({
  name: 'app',
  data(){
    return{
   
    }
  },
  methods:{
     
  },
  components:{
   
  }
  //局部起名上面调用 但是不能起跟系统标签一样的名字  可以不起名
 
})


</script>
<!--3样式 ：解决样式-->
<style scoped>
    h3{
    color:red;
    }
    li{
    
    background:pink;
    list-style:none;
    }
</style>
