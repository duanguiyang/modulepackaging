<template>
    <div class="box">
       <hm-input placeholder="请输入用户名" type="password" disabled></hm-input><br>
       <hm-input placeholder="请输入用户名" v-model="name" ></hm-input><br>
       <hm-input placeholder="请输入用户名" v-model="name" clearable ></hm-input><br>
       <hm-input placeholder="请输入用户名" v-model="name" showPassword></hm-input><br>
       <hm-input placeholder="请输入用户名" type="password" v-model="name" showPassword></hm-input><br>
  
    </div>
</template>
<script>
export default {
name:'',
   data() {
      return {
          name:""
      }
   },
   created(){
   },
mounted(){
},
   computed:{
   },
   methods:{
   },
}
</script>
<style lang="less" scoped>
    .box{
        margin-top: 20px;
        .hm-input{
            width: 200px;
        }
    }
    
</style>

