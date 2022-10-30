<template>
 <transition name="dialog-fade">
  <div class="hm-dialog__wrapper" v-show="visable" @click.self="handClick">
    <div class="hm-dialog" :style="{width,marginTop:top}">
      <div class="hm-dialog__header">
       <slot name="title">
            <span class="hm-dialog__title" >{{title}}</span>
       </slot>
        <button class="hm-dialog__headerbtn">
          <i class="hm-icon-close"></i>
        </button>
      </div>
      <div class="hm-dialog__body">
        <slot name="content">
            <span>这是一段信息</span>
        </slot>
      </div>
      <div class="hm-dialog__footer">
        <slot name="fotter">

        </slot>
      </div>
    </div>
  </div>
  </transition>
</template>
<script>
export default {
  name: "HmDialog",
  props:{
      title:{
          type:String,
          default:"提示"
      },
      content:{
          type:String,
          default:"这是内容"
      },
      width:{
          type:String,
          default:"30%"
      },
      top:{
          type:String,
          default:"10%"
      },
      visable:{
          type:Boolean,
          default:false
      }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    handClick(){
      
      this.$emit("update:visable",false);
    }
  },
};
</script>
<style lang="less" >
.hm-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .hm-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .hm-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .hm-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .hm-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.hm-dialog__footer{
  .hm-button{
   margin-right: 50px;
}

}
/**进入前的状态 */
.dialog-fade-enter-active{
   animation: run 0.5s;
}
/**结束后的状态 */
.dialog-fade-leave-active{
   animation: run 0.5s reverse;
}
@keyframes run {
   0%{
      opacity: 0;
      transform: translateY(-20px);
   }
   100%{
      opacity: 1;
      transform: translateY(0px);
   }
}
</style>
