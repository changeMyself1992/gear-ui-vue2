# 同意协议

用于需要与复选框 富文本 组件搭配使用。

## 引入

```javascript
import Vue from 'vue'
import Checkbox from '@ueip/gear-vue/checkbox'
import '@ueip/gear-vue/lib/checkbox/index.css'

import Richtext from '@ueip/gear-vue/lib/richtext'
import '@ueip/gear-vue/lib/richtext/index.css'

import Button from '@ueip/gear-vue/lib/button'
import '@ueip/gear-vue/lib/button/index.css'

Vue.use(Checkbox)
Vue.use(Richtext
Vue.use(Button)
```

## vue用法

```javascript
<template>
  <div class="demo-agreement" clstag="1WM3|126796">
    <div class="title">未选中状态</div>
    <gear-checkbox style="margin-bottom: 20px" :options="todos1" v-model="checkboxSelect1" @select-item="item => this.handleSelect(item, 1)" checkboxType="circle">
      <template slot-scope="">
        <gear-richtext class="desc" :richData="richData1" />
      </template>
    </gear-checkbox>

    <div class="title">选中状态</div>
    <gear-checkbox style="margin-bottom: 20px" :options="todos1" v-model="checkboxSelect2" @select-item="item => this.handleSelect(item, 2)" checkboxType="circle">
      <template slot-scope="">
        <gear-richtext class="desc" :richData="richData1" />
      </template>
    </gear-checkbox>

    <div class="title">文案多行</div>
    <gear-checkbox style="margin-bottom: 20px" :options="todos1" v-model="checkboxSelect3" @select-item="item => this.handleSelect(item, 3)" checkboxType="circle">
      <template slot-scope="">
        <gear-richtext class="desc" :richData="richData3" />
      </template>
    </gear-checkbox>

    <div class="title">使用场景-页面中</div>
    <div class="checkboxSelect-box4">
      <gear-checkbox style="margin-bottom: 16px; margin-left: 6px" :options="todos1" v-model="checkboxSelect4" @select-item="item => this.handleSelect(item, 4)" checkboxType="circle">
        <template slot-scope="">
          <gear-richtext class="desc" :richData="richData1" />
        </template>
      </gear-checkbox>
      <gear-button type="short" size="large" style="width: 100%" @click="onClick" :disabled="checkboxSelect4.length > 0 ? false : true">同意协议并继续</gear-button>
    </div>

    <div class="bottom-suction">
      <div class="title">使用场景-吸底</div>
      <div class="checkboxSelect-box5">
        <gear-checkbox style="margin-bottom: 16px; margin-left: 6px" :options="todos1" v-model="checkboxSelect5" @select-item="item => this.handleSelect(item, 5)" checkboxType="circle">
          <template slot-scope="">
            <gear-richtext class="desc" :richData="richData1" />
          </template>
        </gear-checkbox>
        <gear-button type="short" size="large" style="width: 100%" @click="onClick" :disabled="checkboxSelect5.length > 0 ? false : true">同意协议并继续</gear-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-agreement',
  data() {
    return {
      todos1: [{ value: 1 }],
      checkboxSelect1: [],
      richData1: {
        message: '我已阅读并同意签署《平台协议》 《借款协议》',
        richMessage: [
          {
            color: '#999999',
            fontSize: '12px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            start: 0,
            end: 8,
            click: false
          },
          {
            color: '#CC8C4E',
            fontSize: '12px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            click: true,
            start: 9,
            end: 14,
            callback: () => {
              this.$toast('平台协议点击');
            }
          },
          {
            color: '#CC8C4E',
            fontSize: '12px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            click: true,
            start: 15,
            end: 21,
            callback: () => {
              this.$toast('借款协议点击');
            }
          }
        ]
      },
      checkboxSelect2: [1],
      checkboxSelect3: [1],
      richData3: {
        message: '我已阅读并同意签署《平台安全协议》 《京东金融委托协议》 《借款协议》',
        richMessage: [
          {
            color: '#999999',
            fontSize: '12px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            start: 0,
            end: 8,
            click: false
          },
          {
            color: '#CC8C4E',
            fontSize: '12px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            click: true,
            start: 9,
            end: 16,
            callback: () => {
              this.$toast('平台安全协议');
            }
          },
          {
            color: '#CC8C4E',
            fontSize: '12px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            click: true,
            start: 17,
            end: 27,
            callback: () => {
              this.$toast('京东金融委托协议');
            }
          },
          {
            color: '#CC8C4E',
            fontSize: '12px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            click: true,
            start: 28,
            end: 34,
            callback: () => {
              this.$toast('借款协议');
            }
          }
        ]
      },
      checkboxSelect4: [],
      checkboxSelect5: [1]
    };
  },
  components: {},
  mounted() {},
  methods: {
    handleSelect(item, idx) {
      const index = this[`checkboxSelect${idx}`].findIndex(value => value === item.value);
      if (index === -1) {
        this[`checkboxSelect${idx}`].push(item.value);
      } else {
        this[`checkboxSelect${idx}`].splice(index, 1);
      }
    },
    onClick() {
      this.$toast('具体按钮点击逻辑使用者去实现');
    }
  }
};
</script>
<style lang="scss">
@import '../../assets/css/demo';
.demo-agreement {
  position: relative;
  padding: 10px $padding-sm 0 $padding-sm;
  .title {
    line-height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: #999999;
    margin-bottom: 10px;
  }
  .checkboxSelect-box4 {
    padding: 0 $padding-sm;
  }
  .bottom-suction {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0px;

    .title {
      padding: 0 $padding-sm;
    }
    .checkboxSelect-box5 {
      padding: 16px 24px 0 24px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      padding-bottom: calc(16px + constant(safe-area-inset-bottom)) !important;
      padding-bottom: calc(16px + env(safe-area-inset-bottom)) !important;
    }
  }
}
</style>

<style lang="scss">
/* 为了兼容设计图专门又写的覆盖样式***********start */
.demo-agreement .gear-checkbox-item {
  align-items: start;
}
.demo-agreement .gear-checkbox-item .circle {
  width: 15px;
  height: 15px;
  margin: 0 6px 0 0;
}
.demo-agreement .gear-checkbox-item .circle-selected {
  width: 15px;
  height: 15px;
  margin: 0 6px 0 0;
}
.demo-agreement .gear-checkbox-item .circle-selected.icon-select::before {
  transform: scale(0.7);
}

.demo-agreement .gear-checkbox-item .circle-slot-box {
  position: relative;
  bottom: 0.5px;
}
/* 为了兼容设计图专门又写的覆盖样式***********end */
</style>
```

## Props(Checkbox)

| 字段           | 说明                            | 类型     | 默认值   | 是否必要 |
| ------------ | ----------------------------- | ------ | ----- | ---- |
| v-model      | 绑定复选框的值                       | Array  | []    | 是    |
| options      | 复选框选项列表                       | Array  | []    | 是    |
| selectField  | 要进行选择的字段名称,要求是options元素中的一个字段 | string | value | 否    |
| checkboxType | 复选框样式类型，tick对勾，circle圆圈       | string | tick  | 否    |

## Events(Checkbox)

| 事件名         | 说明          | 回调参数         |
| ----------- | ----------- | ------------ |
| select-item | 选择元素的时候进行回调 | options里面的元素 |

## Props(Richtext)

| 属性名      | 类型     | 必填  | 说明                               |
| -------- | ------ | --- | -------------------------------- |
| richData | Object | 是   | 富文本数据，格式为：{message, richMessage} |

#### richData.message

| 属性名     | 类型     | 必填  | 说明   |
| ------- | ------ | --- | ---- |
| message | String | 是   | 文本内容 |

#### richData.richMessage

| 属性名         | 类型    | 必填  | 说明                            |
| ----------- | ----- | --- | ----------------------------- |
| richMessage | Array | 是   | 富文本处理信息，richMessage[index]为对象 |

#### richMessage[index]

| 属性名        | 类型       | 必填  | 说明                         |
| ---------- | -------- | --- | -------------------------- |
| start      | Number   | 是   | 属性覆盖起始下标（0开始）              |
| end        | Number   | 是   | 属性覆盖结束下标                   |
| color      | String   | 否   | 字体颜色                       |
| fontSize   | Number   | 否   | 字体大小，要加上单位                 |
| fontFamily | String   | 否   | 字体名称，可选系统支持名称，否则降级为系统默认字体 |
| fontWeight | String   | 否   | 文本粗细，可选 bold \             |
| textImg    | String   | 否   | 图片链接                       |
| width      | String   | 否   | 图片宽，要加上单位                  |
| height     | String   | 否   | 图片高，要加上单位                  |
| click      | Boolean  | 否   | 是否增加事件监听，可选 true \        |
| callback   | Function | 否   | 事件监听回调，建议使用箭头函数           |