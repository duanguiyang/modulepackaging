<template>
    <div>
        <div>我是子组件</div>
        <div>{{pop}}</div>
            <button @click="but">1111</button>
            <button @click="sync">sync</button>
            <slot name="Slot1"></slot>
            <slot name="Slot2" class="Slot2"></slot>
    </div>
</template>
<script>
export default {
    props:{
        pop:{
            type:String,
            default:""
        },
        visable:{
            type:Boolean,
            default:false
        },
        Sync:{
            type:String,
            default:""
        }
    },
name:'',
   data() {
      return {
      }
   },
   created(){
   },
   mounted(){
       console.log(this.pop);
       console.log(this.visable);
       console.log(this.Sync);
   },
   computed:{
   },
   methods:{
       but(){
           this.$emit("check","哈哈哈哈");
       },
       sync(){
           this.$emit("update:fn10","我是改变后的sync");
       }
   },
   
}
</script>
<style lang="less" scoped>


</style>
