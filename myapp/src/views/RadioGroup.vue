<template>
    <div>
        <hm-radio-group v-model="gender" :aaa='gender' @func="AAA">
            <hm-button>
                <hm-radio label="1"  >男</hm-radio>
                <hm-radio label="0"  >女</hm-radio>
            </hm-button>
        </hm-radio-group>
    </div>
</template>
<script>
export default {
name:'',
   data() {
      return {
          gender:"1",
          
      }
   },
   
   
   created(){
   },
   mounted(){
   },
   computed:{
   },
   methods:{
       AAA(){
           console.log('父组件的方法');
       }
   },
}
</script>
<style lang="less" scoped>

    [v-cloak]{
        display: none;
    }

</style>
