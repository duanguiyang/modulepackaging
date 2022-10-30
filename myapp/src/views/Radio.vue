<template>
    <div>
        <hm-radio label="0" v-model="gender" >男</hm-radio>
        <hm-radio label="1" v-model="gender" >女</hm-radio>
        <hm-radio label="0" v-model="gender" ></hm-radio>
        <hm-radio label="1" v-model="gender" ></hm-radio>
    </div>
</template>
<script>
export default {
name:'',
   data() {
      return {
          gender:"1"
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
