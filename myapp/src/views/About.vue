<template>
    <div>
     <div id="nav">
    
      <hm-button type="primary">按钮组件</hm-button>
      <hm-button type="success">按钮</hm-button>
      <hm-button type="info">按钮</hm-button>
      <hm-button type="warning">按钮</hm-button>
      <hm-button type="danger">按钮</hm-button>
    </div>
    <div id="nav">
    
      <hm-button plain type="primary">按钮组件</hm-button>
      <hm-button plain type="success">按钮</hm-button>
      <hm-button plain type="info">按钮</hm-button>
      <hm-button plain type="warning">按钮</hm-button>
      <hm-button plain type="danger">按钮</hm-button>
    </div>
    <div id="nav">
    
      <hm-button plain round type="primary">按钮组件</hm-button>
      <hm-button plain round type="success">按钮</hm-button>
      <hm-button plain round type="info">按钮</hm-button>
      <hm-button plain round type="warning">按钮</hm-button>
      <hm-button plain round type="danger">按钮</hm-button>
    </div>
     <div id="nav">
    
      <hm-button plain  circle type="primary">按</hm-button>
      <hm-button plain  circle type="success">按</hm-button>
      <hm-button plain  circle type="info">按</hm-button>
      <hm-button plain  circle type="warning">按</hm-button>
      <hm-button plain  circle type="danger">按</hm-button>
    </div>
     <div id="nav">
    
      <hm-button plain icon circle type="primary">按</hm-button>
      <hm-button plain icon circle type="success">按</hm-button>
      <hm-button plain icon circle type="info">按</hm-button>
      <hm-button plain icon circle type="warning">按</hm-button>
      <hm-button plain icon circle type="danger" @click="fn">按1</hm-button>
    </div>
   
    </div>
</template>
<script>
export default {
name:'',
   data() {
      return {
        name:"哈哈",
        
      }
   },
  mounted(){
  },
   created(){
   },
   computed:{
   },
   methods:{
     logs(){
       console.log("11111111111");
     },
     con(){
       console.log("log方法");
        this.logs();
        console.log(this);
        return false
     },
     but(){
        // let that=this;
       if(!this.con()){
         return
       }
       console.log("00000000000000");

     },
      fn(){
      console.log("111111");
    }
   },
}
</script>
<style lang="less" scoped>

</style>
