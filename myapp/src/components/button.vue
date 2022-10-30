<template>
    
        <button class="hm-button" :class="[`hm-button--${type}`
        ,{'is-plain':plain,
        'is-round':round,
        'is-circle':circle},
        `${icon}`]" 
        @click="handClick"
        >
        <span>
            <i :class="icon"></i>
            <slot></slot>
        </span>
    </button>
  
     

</template>
<script>
export default {
name:'HmButton',
props:{
    //props校验
    type:{
        type: String,
        default:"default"
    },
    plain:{
        type:Boolean,
        default:false
    },
    round:{
        type:Boolean,
        default:false
    },
    circle:{
        type:Boolean,
        default:false
    },
    icon:{
        type:String,
        default:''
    }


},
   data() {
      return {
         
      }
    },
    created(){
        console.log(this.type);
   },
    mounted(){
    },
   
   computed:{
   },
   methods:{
       handClick(e){
           this.$emit("click",e)
       }
   },
}
</script>
<style lang="less" scoped>
.icon{
    width: 10px;
    height: 10px;
    display: inline-block;
   background: url("../assets/logo.png");
   background-size: 10px 10px;
}
    .hm-button{
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: 0.1s;
        font-weight: 500;
        //禁止元素的文字被选中
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        &:hover,
        &:focus{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
    }
    .hm-button--primary{
        background-color: #409eff;
        border-color: #409eff;
        color: #fff;
        &:hover,
        &:focus{
            background-color: #66b1ff;
            color: #fff;
            border-color: #66b1ff;
        }
    }
    .hm-button--success{
        background-color: #67c23a;
        border-color: #67c23a;
        color: #fff;
        &:hover,
        &:focus{
            background-color: #7ddd4d;
            color: #fff;
            border-color: #67c23a;
        }
    }
    .hm-button--info{
        background-color: #909399;
        border-color: #909399;
        color: #fff;
        &:hover,
        &:focus{
            background-color: #acaeb1;
            color: #fff;
            border-color: #909399;
        }
    }
    .hm-button--warning{
        background-color: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
        &:hover,
        &:focus{
            background-color: #ebb86d;
            color: #fff;
            border-color: #e6a23c;
        }
    }
    .hm-button--danger{
        background-color: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
        &:hover,
        &:focus{
            background-color: #df7979;
            color: #fff;
            border-color: #f56c6c;
        }
    }
    // 朴素的按钮
.hm-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.hm-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.hm-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.hm-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.hm-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.hm-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
//round属性
.hm-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// 原形按钮
.hm-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
</style>
