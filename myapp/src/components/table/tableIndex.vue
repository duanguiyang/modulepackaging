<template>
  <div>
    <vxe-table border show-overflow highlight-hover-row :height="height" ref="xTable1" :sort-config="{trigger: 'cell'}">
      <vxe-column type="seq" width="100"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>

  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      height: window.screen.availHeight
    }
  },
  created() {

    console.log(document.body.clientHeight);
  },
  mounted() {
    this.$nextTick(() => {
      const $table = this.$refs.xTable1
      this.mockList(500).then(data => {
        if ($table) {
          $table.loadData(data)
        }
      })
    })
  },
  computed: {
  },
  methods: {
    mockList(size) {
      return new Promise(resolve => {
        const list = []
        for (let index = 0; index < size; index++) {
          list.push({
            name: `名称${index}`,
            sex: '0',
            num: 123,
            age: 18,
            num2: 234,
            rate: 3,
            address: 'shenzhen'
          })
        }
        resolve(list)
      })
    }
  },
}
</script>
<style lang="less" scoped>
body {
  height: 100%;
}

/*滚动条整体部分*/
.mytable-scrollbar ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/*滚动条的轨道*/
.mytable-scrollbar ::-webkit-scrollbar-track {
  background-color: #FFFFFF;
}

/*滚动条里面的小方块，能向上向下移动*/
.mytable-scrollbar ::-webkit-scrollbar-thumb {
  background-color: #bfbfbf;
  border-radius: 5px;
  border: 1px solid #F1F1F1;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
}

.mytable-scrollbar ::-webkit-scrollbar-thumb:hover {
  background-color: #A8A8A8;
}

.mytable-scrollbar ::-webkit-scrollbar-thumb:active {
  background-color: #787878;
}

/*边角，即两个滚动条的交汇处*/
.mytable-scrollbar ::-webkit-scrollbar-corner {
  background-color: #FFFFFF;
}
</style>
