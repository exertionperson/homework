
<template>
  <div id="app" class="container row">
  	 <h1 class="col-md-4  col-md-offset-6">在线翻译</h1>
  	 <h5 class="text-muted col-md-4  col-md-offset-9">简单/易用/便捷</h5>
  	 <translateForm v-on:formSubmit="translateText" class="text-muted col-md-4  col-md-offset-6"></translateForm>
  	 <translateOutput v-text="TranslatedText" class="answer"></translateOutput>
  
	</div>
</template>

<script>
import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'
export default ({
  name: 'app',
  data(){
    return{
   			TranslatedText:"",
    }
  },
  methods:{
     translateText:function(text,language){
//   		alert(text)
				this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190319T073526Z.e62a308fee515955.5bb1cbfb690bf01d24272bf9873099c116f10582&lang='+language+'&text='+text)
				.then((response)=>{
					console.log(response.body.text[0]);
   			this.TranslatedText = response.body.text[0];
				})
     }
     
  },
  components:{
	 "translateForm":TranslateForm ,
	 "translateOutput":TranslateOutput,
  },
})


</script>
<!--3样式 ：解决样式-->
<style scoped>
   h5{
    	font-size: 20px;
    	padding: 20px 0;
    }
   .answer{
   	position: absolute;
   	top: 310px;
   	left: 700px;
   	font-size: 20px;
   	color: darkblue;
   }
</style>
