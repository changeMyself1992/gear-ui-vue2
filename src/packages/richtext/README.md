# 富文本组件

`<richtext>`是用于富文本格式数据转换的基础内容组件。

## 引入

```javascript
import Vue from 'vue'
import Richtext from '@ueip/gear-vue/lib/richtext'
import '@ueip/gear-vue/lib/richtext/index.css'

Vue.use(Richtext)

// joyer
import  {Richtext}  from '@@ueip-gear-vue/master/index';
```

## vue用法

```javascript
<template>
  <div class="richtext-demo">
    <div style="margin-top: 20px">
      <gear-richtext class="desc" :richData="richData" />
    </div>

    <div style="margin-top: 20px">
      <gear-richtext class="desc1" :richData="richData1" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-richtext',
  data() {
    return {
      richData: {
        message: '这是一段富文本',
        richMessage: [
          {
            color: 'rgba(0,0,0,0.8)',
            fontSize: '14px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            start: 0,
            end: 3,
            click: false
          },
          {
            color: '#43BE18',
            fontSize: '14px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            click: true,
            start: 4,
            end: 6,
            callback: () => {
              this.clickHandle('点击测试1');
            }
          }
        ]
      },
      richData1: {
        message: '加企微助我得*津贴',
        richMessage: [
          {
            color: 'rgba(0,0,0,0.8)',
            fontSize: '14px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            start: 0,
            end: 5,
            click: false
          },

          {
            textImg: 'https://img13.360buyimg.com/imagetools/jfs/t1/106964/32/27962/74594/625fbc21E0562ff76/c7d270a0c80aa821.jpg',
            width: '40px',
            height: 'auto',

            start: 6,
            end: 6,
            click: true,
            callback: () => {
              this.clickHandle('点击测试2');
            }
          },

          {
            color: '#43BE18',
            fontSize: '14px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            click: true,
            start: 7,
            end: 8,
            callback: () => {
              this.clickHandle('点击测试3');
            }
          }
        ]
      }
    };
  },
  components: {},
  methods: {
    clickHandle(text) {
      this.$toast(text);
    }
  }
};
</script>

<style scoped>
.richtext-demo {
  padding: 20px 0;
}
.desc {
  text-align: center;
}
.desc1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>


```

## Props

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

| 属性名        | 类型       | 必填  | 说明                                   |
| ---------- | -------- | --- | ------------------------------------ |
| start      | Number   | 是   | 属性覆盖起始下标（0开始）                        |
| end        | Number   | 是   | 属性覆盖结束下标                             |
| color      | String   | 否   | 字体颜色                                 |
| fontSize   | Number   | 否   | 字体大小，要加上单位                           |
| fontFamily | String   | 否   | 字体名称，可选系统支持名称，否则降级为系统默认字体           |
| fontWeight | String   | 否   | 文本粗细，可选 bold \| normal，默认 normal     |
| textImg    | String   | 否   | 图片链接                                 |
| width      | String   | 否   | 图片宽，要加上单位                            |
| height     | String   | 否   | 图片高，要加上单位                            |
| click      | Boolean  | 否   | 是否增加事件监听，可选 true \| false ，默认 false |
| callback   | Function | 否   | 事件监听回调，建议使用箭头函数                     |