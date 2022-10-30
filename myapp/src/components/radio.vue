<template>
  <div>
    <label class="hm-radio" :class="{'is-checked': label===model}">
      <span class="hm-radio__input">
        <span class="hm-radio__inner"></span>
        <input class="hm-radio__original" 
        type="radio" 
        :value="label"
        :name="name"
        v-model="model"
        />
      </span>
      <span class="hm-radio__label"> 
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
      </span>
    </label>
  </div>
</template>
<script>
export default {
  name: "HmRadio",
  props:{
    label:{
      type:[String,Boolean,Number],
      default:""
    },
    value:{
      type:String,
      default:""
    },
    name:{
      type:String,
      default:""
    }
  },
  inject:{
    RadioGroup:{
      default:""
    }
  },
  data() {
    return {};
  },
  created() {
    
  },
  mounted() {
    console.log(this.RadioGroup);
  },
  computed: {
    model:{
      get(){
        return this.isGroup?this.RadioGroup.value:this.value;
      },
      set(v){
         this.$emit("input",v); //触发父组件给当前组件注册的input事件
         this.isGroup?this.RadioGroup.$emit("input",v):this.$emit("input",v);
      }
    },
    isGroup(){
      return !!this.RadioGroup
    }
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.hm-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .hm-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hm-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .hm-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .hm-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
/**选中的样式 */
.hm-radio.is-checked {
  .hm-radio__input {
    .hm-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .hm-radio__label {
    color: #409eff;
  }
}
</style>
