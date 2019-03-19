<template>
	 <div id="translateForm" class="row container">
	 	<div class="col-md-6 "></div>
	     <form v-on:submit="formSubmit" class="well form-inline" id="transform">
	        <input type="text" class="form-control" v-model="textToTranslate" name="" id="text" value="" placeholder="输入需要翻译的内容
	"/>
	 		<select v-model="language" class="form-control">
	 			<option value="en">English</option>
	 			<option value="ru">Russian</option>
	 			<option value="ko">Korean</option>
	 			<option value="ja">Janpenese</option>
	 		</select>
	 		<input type="submit" value="翻译" class="btn btn-primary" />
	 		
	     </form>
	     </div>
	 </div>
</template>

<script>
	export default{
		name:'translateForm',
		data:function(){
			return{
				textToTranslate:"",
				language:"English",
			}
		},
		methods:{
			formSubmit:function(e){
//				alert(this.textToTranslate);
//在这个组件中主要负责把这个值传给app.vue  app.vue 进行翻译 然后 传给 output
//              定义一个事件     
          		this.$emit("formSubmit",this.textToTranslate,this.language)
				e.preventDefault();
			}
		},
		created:function(){
			this.language = "en";
		}
	}
</script>

<style>
	transform{
		border-radius: 10px;
		border: 1px #ccc solid;
	}
	form{
		width: 800px;
		margin: 0 auto;
	}
	#text{
		width: 500px;
	}
</style>