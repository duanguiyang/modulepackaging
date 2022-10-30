<template>
   <div class="hm-switch" :class="value?'is-checked':''" @click="handelClick">
    <span class="hm-switch__core" ref="core">
      <span class="hm-switch__button"></span>
    </span>
    <input
      class="hm-switch__input"
      type="checkbox"
      :name='name'
      ref='input'
    >
  </div>
</template>
<script>
export default {
name:'HmSwitch',
    props:{
      value:{
        type:Boolean,
        default:false
      },
      activeClass:{
        type:String,
        default:''
      },
      inactiveColor:{
        type:String,
        default:''
      },
      name: {
        type: String,
        default: ''
      }
    },
   data() {
      return {
      }
   },
   created(){
   },
    mounted(){
        this.changeColor();
        this.$refs.input.checked=this.value;
    },
    computed:{
   },
   methods:{
    async handelClick(){
       this.$emit("input",!this.value);
      await this.$nextTick()
       this.changeColor();
       this.$refs.input.checked=this.value;
     },
     changeColor(){
       if(this.activeClass||this.inactiveColor){
        let color=this.value?this.activeClass:this.inactiveColor;
        this.$refs.core.style.borderColor=color;
        this.$refs.core.style.backgroundColor=color;
      }
     }
   },
}
</script>
<style lang="less" scoped>
.hm-switch {
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .hm-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .hm-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
//   .hm-switch__input {
//   position: absolute;
//   width: 0;
//   height: 0;
//   opacity: 0;
//   margin: 0;
// }
}
.hm-switch.is-checked {
  .hm-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .hm-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
