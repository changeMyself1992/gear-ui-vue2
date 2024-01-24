# 索引栏

索引导航栏。

## 引入

```javascript
import Vue from 'vue'
import IndexBar from '@ueip/gear-vue/lib/index-bar'
import '@ueip/gear-vue/lib/index-bar/index.css'
Vue.use(IndexBar)

```

## vue用法

### 基础用法

```javascript
1
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

```

### 自定义用法

```javascript
2
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

```

## Props

| 字段              | 说明                                                                                                                                               | 类型               | 默认值                                                                                                | 是否必要 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- | -------------------------------------------------------------------------------------------------- | ---- |
| indexList       | 索引对象列表 [{"name":"A","value":"A"}] name是让索引柱显示的，value是让索引右侧边栏显示的,并且要确保value的唯一性                                                                   | array            | 26个英文字母对象 [{"name":"A","value":"A"},{"name":"B","value":"B"}...]                                   | 否    |
| options         | 索引选项列表 [[{"name":"A-0","value":"A-0","index":0},{"name":"A-1","value":"A-1","index":1}]....] name是让索引元素显示的文案，value表示该索引元素的唯一标识，index用来记录该元素的当前索引 | [array,array...] | 26个英文字母组合的对象,[[{"name":"A-0","value":"A-0","index":0},{"name":"A-1","value":"A-1","index":1}]....] | 否    |
| sticky          | 是否开启锚点自动吸顶                                                                                                                                       | bool             | true                                                                                               | 否    |
| stickyOffsetTop | 锚点自动吸顶时与顶部的距离                                                                                                                                    | number           | 0                                                                                                  | 否    |
| highlightColor  | 索引柱字符高亮颜色                                                                                                                                        | string           | #999999                                                                                            | 否    |



## Events

| 事件名            | 说明            | 回调参数                                            |
| -------------- | ------------- | ----------------------------------------------- |
| indexItemClick | 索引元素被点击时候触发   | 索引选项对象-例如{"name":"A-0","value":"A-0","index":0} |
| select         | 点击右侧索引栏的字符时触发 | 索引对象-例如{"name":"A","value":"A"}                 |
| change         | 选中的索引发生变化时触发  | 索引对象-例如{"name":"A","value":"A"}                 |
|                |               |                                                 |