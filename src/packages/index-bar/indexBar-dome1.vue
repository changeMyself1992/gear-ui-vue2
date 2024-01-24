<template>
  <div class="demo-indexBar1">
    <!-- :stickyOffsetTop="20" -->
    <gear-index-bar :indexList="indexList" :options="options" @change="onChage" @select="onSelect" @indexItemClick="indexItemClick"></gear-index-bar>
  </div>
</template>

<script>
function genAlphabet() {
  const indexList = [];
  const charCodeOfA = 'A'.charCodeAt(0);

  for (let i = 0; i < 26; i++) {
    indexList.push({
      name: String.fromCharCode(charCodeOfA + i),
      value: String.fromCharCode(charCodeOfA + i)
    });
  }
  indexList.unshift({
    name: '推荐',
    value: '#'
  });

  return indexList;
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
  name: 'demo-indexBar1',
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
.demo-indexBar1 {
  margin: 0;
  padding: 0;
  .item-text {
  }
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
</style>
