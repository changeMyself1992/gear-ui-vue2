# 文本域组件

## 引入

```javascript
import Vue from 'vue'
import Textarea from '@ueip/gear-vue/lib/textarea'
import '@ueip/gear-vue/lib/textarea/index.css'

Vue.use(Textarea)

// joyer
import  {Textarea}  from '@@ueip-gear-vue/master/index';
```

## vue用法

```javascript
<template>
  <div class="textarea-demo">
    <gear-textarea
      v-model="val2"
      :direction="direction"
      :disabled="disabled"
      type="text"
      @change="test"
      title="备注"
      placeholder="请输入备注"
      border="bottom"
    ></gear-textarea>

    <gear-textarea v-model="val2" direction="row" :disabled="disabled" type="text" @change="test" :validateOption="validate" title="备注" placeholder="请输入备注" border="bottom"></gear-textarea>
  </div>
</template>

<script>
export default {
  name: 'demo-textarea',
  data() {
    return {
      val2: '',
      direction: 'column',
      disabled: false,
    }
  },
  components: {},
  methods: {
    test(val) {
      console.log('11111', val)
    }
  }
}
</script>
```

## Props

| 字段          | 说明                        | 类型      | 默认值    | 是否必要 |
| ----------- | ------------------------- | ------- | ------ | ---- |
| v-model     | 绑定当前文本域的内容                | string  | 空字符串   | 是    |
| direction   | 文本域和title的方向（row\|column） | string  | row    | 否    |
| title       | 文本域的标题                    | string  | 空字符串   | 否    |
| disabled    | 原生的disabled               | Boolean | true   | 否    |
| placeholder | 原生的placeholder            | string  | 空字符串   | 否    |
| border      | 文本域的分割线（bottom\|top）      | string  | bottom | 否    |

       

## Events

| 事件名    | 说明         | 回调参数  |
| ------ | ---------- | ----- |
| change | 文本域内容改变时回调 | 输入的内容 |