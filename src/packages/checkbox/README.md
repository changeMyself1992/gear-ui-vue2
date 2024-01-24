# 单选框组件

## 引入

```javascript
import Vue from 'vue'
import { Radio} from '@ueip/gear-vue'
import '@ueip/gear-vue/lib/radio/index.css'

Vue.use(Radio)
```

## vue用法

```javascript
<template>
  <div class="radio-demo">
    <gear-list class="form-item" title="单选框">
      <gear-radio :options="todos" v-model="radioSelect" select-field="value" @select-item="handleSelect">
        <template slot-scope="{ slotProps }">
          <gear-list-item :title="slotProps.title" :desc="slotProps.desc" border="bottom" :disabled="slotProps.disabled"></gear-list-item>
        </template>
      </gear-radio>
    </gear-list>

    <gear-list class="form-item" title="单选框">
      <gear-radio :options="todos1" v-model="radioSelect1" select-field="value" @select-item="handleSelect" radioType="circle">
        <template slot-scope="{ slotProps }">
          <gear-list-item :title="slotProps.title" :desc="slotProps.desc" border="none" :disabled="slotProps.disabled"></gear-list-item>
        </template>
      </gear-radio>
    </gear-list>
  </div>
</template>

<script>
export default {
  name: 'demo-textarea',
  data() {
    return {
      todos: [
        {
          title: '按月计息，按月还款',
          value: 1,
          disabled: false,
          desc: {
            message: '月利率 0.51%，提前还款正常还息',
            richMessage: [
              {
                color: '#999999',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',

                start: 0,
                end: 3,
                click: false
              },
              {
                color: '#EF4034',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',

                click: true,
                start: 4,
                end: 8,
                click: false
              },
              {
                color: '#999999',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',

                start: 9,
                end: 17,
                click: false
              }
            ]
          }
        },
        { title: '按日计息，随时还款', value: 2, disabled: false, desc: '月利率 0.4%，提前还款未还息费不再收取' },
        { title: '不可选择状态', value: 3, disabled: true, desc: '月利率 0.4%，提前还款未还息费不再收取' }
      ],
      radioSelect: 1,
      todos1: [
        { title: '立减100元', value: 1, disabled: false, desc: '有效期 : 2015.11.30-2016.01.30' },
        { title: '立减100元', value: 2, disabled: false, desc: '有效期 : 2015.11.30-2016.01.30' }
      ],
      radioSelect1: 1
    };
  },
  components: {},
  methods: {
    handleSelect(item) {
      this.$toast(`选择的值：${item.value}`);
    }
  }
};
</script>


```

## Props

| 字段          | 说明                            | 类型          | 默认值   | 是否必要 |
| ----------- | ----------------------------- | ----------- | ----- | ---- |
| v-model     | 绑定单选框的值                       | string\|num | 空字符串  | 是    |
| options     | 单选框选项列表                       | Array       | []    | 是    |
| selectField | 要进行选择的字段名称,要求是options元素中的一个字段 | string      | value | 否    |
| radioType   | 单选框样式类型，tick对勾，circle圆圈       | string      | tick  | 否    |

## Events

| 事件名         | 说明          | 回调参数         |
| ----------- | ----------- | ------------ |
| select-item | 选择元素的时候进行回调 | options里面的元素 |