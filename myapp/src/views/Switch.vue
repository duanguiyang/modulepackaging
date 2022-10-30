<template>
    <div>
        <hm-switch v-model="active"></hm-switch>
        <hm-switch v-model="active" active-class="black" inactive-color="green"></hm-switch>
        <hm-switch v-model="active" 
        active-class="#13ce66" 
        inactive-color="#ff4949"
        name></hm-switch>

    </div>
</template>
<script>
export default {
name:'',
   data() {
      return {
         active:false
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
