# 组件名

点击后会触发一个操作。

## 引入

```javascript
import Vue from 'vue'
import Button from '@ueip/gear-vue/lib/button'
import '@ueip/gear-vue/lib/button/index.css'

Vue.use(Button)

// joyer
import  {Button}  from '@@ueip-gear-vue/master/index';
```

## vue用法

```javascript

<template>
  <div class="button-demo">
    <gear-button type="short" size="large" @click="handlerClick" style="margin-bottom: 14px">大尺寸</gear-button>
  </div>
</template>
<script>
export default {
  name: 'demo-button',
  data() {
    return {
      headerTitle: 'Button'
    };
  },
  components: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>


```

## Props

| 字段       | 说明                                                                             | 类型     | 默认值   | 是否必要 |
| -------- | ------------------------------------------------------------------------------ | ------ | ----- | ---- |
| type     | 按钮有四种类型：short（主按钮）、white(线框主按钮)、white-normal(线框次按钮)  text(文本按钮) disabled(禁用按钮) | string | short | 否    |
| disabled | 是否禁用回调事件                                                                       | bool   | false | 否    |
| size     | 按钮大小，large，medium，small，smallest                                               | string | large | 否    |

## Events

| 事件名 | 说明        | 回调参数    |
| ----- | ---------- | ---------- |
| click | 按钮点击回调 | 点击事件参数 |