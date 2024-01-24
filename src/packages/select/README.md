# 表单元素包装器组件

包装一些弹出式的表单元素比如 时间选择器

## 引入

```javascript
import Vue from 'vue'
import Select from '@ueip/gear-vue/lib/select'
import '@ueip/gear-vue/lib/select/index.css'

Vue.use(Select)

// joyer
import  {Select}  from '@@ueip-gear-vue/master/index';
```

## vue用法

```javascript

<template>
  <div class="input-demo">
    <div style="margin-top: 20px">
      <gear-select v-model="val1" :direction="direction" :disabled="disabled" type="text" @get-select="openPicker" title="选择时间" prompt border="bottom"></gear-select>
    </div>

    <div style="margin-top: 20px">
      <gear-select v-model="val1" direction="row" :disabled="disabled" @get-select="openPicker" title="选择时间" :prompt="false" placeholder="请选择时间" border="bottom"></gear-select>
    </div>

    <gear-date-selecter class="jdd-datetime-picker" ref="picker0" @confirm="handleChange" type="YMD" />
  </div>
</template>

<script>
export default {
  name: 'demo-input',
  data() {
    return {
      val1: '',
      direction: 'column',
      disabled: false
    };
  },
  components: {},
  methods: {
    openPicker() {
      this.$refs.picker0.open();
    },
    handleChange(val) {
      this.val1 = val;
    }
  }
};
</script>


```

## Props

| 字段          | 说明                       | 类型      | 默认值    | 是否必要 |
| ----------- | ------------------------ | ------- | ------ | ---- |
| v-model     | 绑定的内容                    | string  | 空字符串   | 是    |
| direction   | 包装器title的方向（row\|column） | string  | row    | 否    |
| title       | 输入框的标题                   | string  | 空字符串   | 否    |
| placeholder | 包装器的                     | string  | 空字符串   | 否    |
| border      | 输入框的分割线（bottom\|top）     | string  | bottom | 否    |
| prompt      | 是否高亮显示包装器文案              | Boolean | false  |      |

## Events

| 事件名        | 说明         | 回调参数 |
| ---------- | ---------- | ---- |
| get-select | 点击包装器的时候回调 | 无    |