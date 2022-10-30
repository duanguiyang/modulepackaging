<template>
  <div id="app">
   
    <router-link to="/about">about</router-link>
    <router-link to="/dialog">dialog</router-link>
    <router-link to="/input">input</router-link>
    <router-link to="/switch">switch</router-link>
    <router-link to="/radio">radio</router-link>
    <router-link to="/radioGroup">radioGroup</router-link>
    <router-link to="/checkBox">checkBox</router-link>
    <router-link to="/checkBoxGroup">checkBoxGroup</router-link>
    <router-link to="/table">table</router-link>
    <div style="margin-top:50px">
      <router-view/>
    </div>

    
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
   
  },
  computed:{
    getSum(){
      return this.sum
      
    }
  },
  mounted() {
    console.log("挂载后")
  },
  beforeUpdate() {
    console.log("更新前")
  },
  updated() {
    console.log("更新后")
  },
  beforeDestroy() {
    console.log("卸载前")
  },
  destroyed() {
    console.log("卸载后")
  },
}
</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  a{
    margin-right: 20px;
  }
}

#nav {
  padding: 30px;

  .hm-button{
    margin-right: 10px;
  }
}
</style>
