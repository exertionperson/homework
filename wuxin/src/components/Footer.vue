<template>
  <footer>
    <p>{{Copyright}}</p>
     <p>{{title}}</p>
   </footer>
</template>
<script>
export default {
  name: 'app-footer',
   props:{
    title:{
      type:String,

    }
  },
  data () {
    return {
      Copyright:"Copyright 2017 Vue Demo",
    }
  }
}
</script>


<style scoped>
    footer{
      background:#222;
      padding:6px;
    }
    footer p{
    color:lightgreen;
    text-align:center;
        }
</style>
