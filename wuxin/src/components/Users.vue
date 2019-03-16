<!--那个类名跟下面尽量起一样把习惯-->

<template>
  <div class="users">
  	 <p>{{hello}}</p>
  		<ul>
 			<li v-for="user in users">

 				  <h2>{{user.name}}</h2>
         	<h3>{{user.email}}</h3>
 			</li>
  		</ul>
    
  </div>
</template>
<!--传值：String number boolean
    传引用：array object 
-->
<script>
export default {
  name: 'users',
  //不标准的写法props:["users"],

  //拿到父组件传来的值
  //标准写法
  props:{
    users:{
    type:Array,
    required:true
    }
  },
  data () {
    return {
      hello:"Hello Users",
     
    }
  },
  methods:{
    deleteUser:function(){
      this.users.pop();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    p{
    color:blue;
    font-size:24px;
    }
		.users{
    width:100%;
    max-width:1200px;
    margin:40px auto;
    padding: 0 20px;
    box-sizing:border-box;
    }
    ul{
    display:flex;
    flex-wrap:wrap;
    list-style-type:none;
    padding:0;
    }
    li{
    flex-gorw:1;
    flex-basis:200px;
    text-align:center;
    padding:30px;
    border:1px solid #222;
    margin:10px;
    }
</style>
