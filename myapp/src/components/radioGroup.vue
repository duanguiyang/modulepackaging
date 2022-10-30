<template>
    <div class="radio-group">
        <slot></slot>
      <button @click="bbb">1111</button>
    </div>
</template>
<script>
export default {
name:'HmRadioGroup',
   data() {
      return {
      }
   },
   provide(){
      return{
           RadioGroup:this
      }
   },
   props:{
       //hm-radio-group接收到了value值
       //还要触发当前组件的input事件
       value:null,
       input:{

       },
       aaa:{
           type:String,
           default:''
       }
   },
   created(){
   },
   mounted(){
       console.log(this.aaa);
   },
   computed:{
   },
   methods:{
       bbb(){
           this.$emit('func');
       }
   },
}
</script>
<style lang="less" scoped>

</style>
