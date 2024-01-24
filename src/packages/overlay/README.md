# 遮罩层

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

## 引入

```javascript
import Vue from 'vue'
import Overlay from '@ueip/gear-vue/lib/overlay'
import '@ueip/gear-vue/lib/overlay/index.css'
Vue.use(Overlay)
```

## vue用法

```javascript

<template>
  <div class="demo-overlay" clstag="V4C7|126802">
    <gear-button style="margin-top: 16px; font-weight: 600" class="btn1" @click="itemClick('1')"> 查看样式 </gear-button>

    <gear-overlay :show="show" @click="itemClick('2')"> </gear-overlay>
  </div>
</template>

<script>
export default {
  name: 'demo-overlay',
  components: {},
  data() {
    return {
      show: false
    };
  },
  methods: {
    itemClick(inx) {
      if (inx === '1') {
        this.show = true;
        if (typeof window.parent.window.setShowMask === 'function') {
          window.parent.window.setShowMask(true);
        }
      } else {
        this.show = false;
        if (typeof window.parent.window.setShowMask === 'function') {
          window.parent.window.setShowMask(false);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.demo-overlay {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;

  .contents {
    width: 315px;
    height: 127px;
    background: white;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 127px;
    font-size: 16px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
}
</style>


```

## Overlay(Props)

| 字段         | 说明                                            | 类型             | 默认值 | 是否必要 |
|--------------|-----------------------------------------------|------------------|--------|----------|
| show         | 是否展示遮罩层                                  | boolean          | false  | true     |
| z-index      | z-index 层级                                    | number \| string | 1      | false    |
| duration     | 动画时长，单位秒                                 | number \| string | 0.3    | false    |
| class-name   | 自定义类名                                      | string           | 空     | false    |
| custom-style | 自定义样式                                      | object           | 空     | false    |
| lock-scroll  | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | boolean          | true   | false    |

## Overlay(Slots)

| 名称    | 说明                              |
|---------|---------------------------------|
| default | 默认插槽，用于在遮罩层上方嵌入内容 |

## Events

| 事件名 | 说明       | 回调参数     |
|--------|----------|--------------|
| click  | 点击时触发 | event: Event |