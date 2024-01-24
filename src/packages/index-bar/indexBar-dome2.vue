<template>
  <div class="demo-indexBar2">
    <gear-index-bar :indexList="indexList" :options="options" @change="onChage" @select="onSelect" @indexItemClick="indexItemClick"></gear-index-bar>
  </div>
</template>

<script>
function genAlphabet() {
  return [
    {
      name: '自定义一',
      value: '一'
    },
    {
      name: '自定义二',
      value: '二'
    },
    {
      name: '自定义三',
      value: '三'
    },
    {
      name: '自定义四',
      value: '四'
    },
    {
      name: '自定义五',
      value: '五'
    }
  ];
}
function letterGeneratingElement() {
  const indexList = genAlphabet();
  const options = [];
  for (let i = 0; i < indexList.length; i++) {
    const { name, value } = indexList[i];
    const array = [];
    for (let j = 0; j < 5; j++) {
      array.push({
        name: `${name}-${j}`,
        value: `${value}-${j}`,
        index: j
      });
    }
    options.push(array);
  }
  return options;
}
export default {
  name: 'demo-indexBar2',
  components: {},
  data() {
    return {
      indexList: genAlphabet(),
      options: letterGeneratingElement()
    };
  },
  mounted() {},
  methods: {
    onChage(item) {
      console.log('当前高亮的索引字符变化时触发：', item);
    },
    onSelect(item) {
      console.log('点击索引栏的字符时触发:', item);
    },
    indexItemClick(item) {
      console.log('索引元素被点击时候触发:', item);
    }
  }
};
</script>

<style lang="scss">
.demo-indexBar2 {
  margin: 0;
  padding: 0;
  .item-text {
  }
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
</style>
