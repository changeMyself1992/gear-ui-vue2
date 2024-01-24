# 文本省略

文本省略。

## 引入

```javascript
import Vue from 'vue'
import Paragraph from '@ueip/gear-vue/lib/paragraph'
import '@ueip/gear-vue/lib/paragraph/index.css'
Vue.use(Paragraph )
```

## vue用法

```javascript
<template>
  <div class="paragraph-demo">
    <div class="title">尾部省略</div>
    <div class="box1">
      <gear-paragraph :text="text" :max-lines="1" :showUnfoldFold="false" />
    </div>

    <div class="title">多行省略</div>
    <div class="box1">
      <gear-paragraph
        text="设计师提供给开发工程师的资源的命名应该是清晰准确、分类清楚的，方便开发工程师更高效的使用资源。此规范应作为强制约束，统一无线客户端设计师的资源命名，尽量避免让开发者对资源进行二次命名修改。"
        :max-lines="3"
        :showUnfoldFold="false"
      />
    </div>

    <div class="title">展开收起</div>
    <div class="box1">
      <gear-paragraph
        text="设计师提供给开发工程师的资源的命名应该是清晰准确、分类清楚的，方便开发工程师更高效的使用资源。此规范应作为强制约束，统一无线客户端设计师的资源命名，尽量避免让开发者对资源进行二次命名修改。"
        :max-lines="3"
      />
    </div>

    <div class="box1">
      <gear-paragraph
        text="设计师提供给开发工程师的资源的命名应该是清晰准确、分类清楚的，方便开发工程师更高效的使用资源。此规范应作为强制约束，统一无线客户端设计师的资源命名，尽量避免让开发者对资源进行二次命名修改。"
        :max-lines="3"
        :expandedDefault="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-paragraph',
  data() {
    return {
      text: ''
    };
  },
  components: {},
  mounted() {
    setTimeout(() => {
      this.text =
        '设计师提供给开发工程师的资源的命名应该是清晰准确、分类清楚的，方便开发工程师更高效的使用资源。此规范应作为强制约束，统一无线客户端设计师的资源命名，尽量避免让开发者对资源进行二次命名修改。';
    }, 1000);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.paragraph-demo {
  position: relative;
  padding: 0 12px;
  .title {
    line-height: 40px;
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: #999999;
  }
  .box1 {
    background-color: #fff;
    padding: 16px 12px;
    margin-bottom: 10px;
  }
}
</style>
```

## Props

| 字段               | 说明          | 类型     | 默认值   | 是否必要 |
| ---------------- | ----------- | ------ | ----- | ---- |
| text             | 显示的文本       | string | 空字符串  | 是    |
| maxLines         | 最多展示的行数     | number | 3     | 否    |
| showUnfoldFold   | 是否要显示展开收起节点 | bool   | true  | 否    |
| expandedDefault  | 是否默认展开      | bool   | false | 否    |
| textStyleObj     | 文案自定义样式对象   | object | {}    | 否    |
| expandedStyleObj | 展开关闭自定义样式对象 | object | {}    | 否    |

## Events

| 事件名                  | 说明           | 回调参数        |
| -------------------- | ------------ | ----------- |
| expandedStatusChange | 展开，收起 按钮点击回调 | 展开收起状态bool值 |