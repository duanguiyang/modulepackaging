<template>
    <div>
        <hm-check-box-group v-model="active">
            <hm-check-box label="抽烟"></hm-check-box>
            <hm-check-box label="喝酒"></hm-check-box>
            <hm-check-box label="烫头"></hm-check-box>
        </hm-check-box-group>
        <demo1 :pop='date' visable @check="getCheck"  :Sync="isSync" :fn10.sync="isSync">
            <template v-slot:Slot1>
                10000
            </template>
            <template #Slot2>
                20000
            </template>
        </demo1>
    </div>
</template>
<script>
import demo1 from "@/components/demo/demo1.vue"
export default {
    
name:'',
   data() {
      return {
          active:['抽烟','喝酒','烫头'],
          date:"传递给子组件",
          isSync:"我是初始化的sync"
      }
   },
   created(){
   },
   mounted(){
   },
   computed:{
   },
   methods:{
       getCheck(v){
           console.log(v);
       },
       fn1(v){
           console.log(v);
       }
   },
   updated() {
       console.log(this.isSync);
   },
   components:{
       demo1
   }
}
</script>
<style lang="less" scoped>

</style>
