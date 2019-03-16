<template>
  <div class="DOTA">
   		<p v-on:click="changeTitle">dsdasda</p>
   		  
  </div>
</template>

<script>
export default {
  name: 'DOTA',
  props:{
  	users:{
  		type:Array,
  		required:true,
  	},
  	titlea:{
  		type:String,
  		required:true,
  	},
  },
  data () {
    return {
     persons:["小可","ame","chalice","fygod","那个东南亚人"],
     shuju:"绿白绿，什么玩意",
    }
  },
  methods:{
    del:function(){	
//  	this.titlea="sdad";	  
		this.titlea= "555";
    },
    changeTitle:function(){
    	this.$emit("titleChanged","自向父传值");
    }
    
   
    
  }
}
</script>

<style scoped>
		li{
			widows: 20px;
			height: 30px;
			
		}
</style>
