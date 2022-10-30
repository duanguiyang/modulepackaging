<template>
    <div>
       <hm-button type="primary" @click="visable=true">弹出框</hm-button>
         <hm-dialog width="35%" top="10%" :visable.sync="visable">
         <template v-slot:title>
            <h3>温馨提示</h3>
         </template>
         <template v-slot:content>
            <div>哈哈哈哈哈</div>
         </template>
         <template v-slot:fotter>
            <hm-button @click="visable=false">取消</hm-button>
            <hm-button type="primary" @click="visable=false">确定</hm-button>
         </template>
         </hm-dialog>
       
    </div>
</template>
<script>
export default {
name:'',
   data() {
      return {
         visable:false
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


</style>
