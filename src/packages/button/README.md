# 按钮

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
  <div class="button-demo" clstag="815D|126807">
    <gear-button type="short" size="large" @click="handlerClick" style="margin-bottom: 14px">大尺寸</gear-button>
    <gear-button type="white" size="large" @click="handlerClick" style="margin-bottom: 14px">大尺寸</gear-button>
    <gear-button type="white-normal" size="large" @click="handlerClick" style="margin-bottom: 25px">大尺寸</gear-button>

    <div class="box1">
      <gear-button type="short" size="medium" @click="handlerClick" style="width: 160px"> 中尺寸 </gear-button>
      <gear-button type="short" size="small" @click="handlerClick"> 小尺寸 </gear-button>
      <gear-button type="short" size="smallest" @click="handlerClick"> 最小尺寸 </gear-button>
    </div>

    <div class="box1">
      <gear-button type="white" size="medium" @click="handlerClick" style="width: 160px"> 中尺寸 </gear-button>
      <gear-button type="white" size="small" @click="handlerClick"> 小尺寸 </gear-button>
      <gear-button type="white" size="smallest" @click="handlerClick"> 最小尺寸 </gear-button>
    </div>

    <div class="box1">
      <gear-button type="white-normal" size="medium" @click="handlerClick" style="width: 160px"> 中尺寸 </gear-button>
      <gear-button type="white-normal" size="small" @click="handlerClick"> 小尺寸 </gear-button>
      <gear-button type="white-normal" size="smallest" @click="handlerClick"> 最小尺寸 </gear-button>
    </div>

    <div class="button-group">
      <gear-button class="custom-btn1" @click="handlerClick">定制按钮</gear-button>
      <gear-button class="custom-btn2" @click="handlerClick">定制按钮</gear-button>
    </div>

    <div class="box3">
      <gear-button type="short" size="large" @click="handlerClick"> 吸底按钮 </gear-button>
    </div>
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
  methods: {
    handlerClick: function () {
      this.$toast('测试按钮点击');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.button-demo {
  margin: 0;
  padding: 33px 0 0 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;

  .box1 {
    display: flex;
    width: 100%;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
    box-sizing: border-box;
  }

  .button-group {
    width: 280px;
    display: flex;
    margin-bottom: 20px;
    .custom-btn1,
    .custom-btn2 {
      height: 44px;
      font-size: 16px;
      line-height: 44px;
      padding: 0;
    }
    .custom-btn1 {
      background-color: rgb(243, 226, 226);
      color: $redTheme;
      border-radius: 50px 0 0 50px;
    }
    .custom-btn1:active {
      opacity: 0.8;
    }
    .custom-btn2 {
      border-radius: 0 50px 50px 0;
    }
  }

  .box3 {
    background-color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;

    padding-top: 14px;
    padding-bottom: calc(14px + constant(safe-area-inset-bottom)) !important;
    padding-bottom: calc(14px + env(safe-area-inset-bottom)) !important;
  }
}
</style>


```

## Props

| 字段     | 说明                                                                                                       | 类型   | 默认值 | 是否必要 |
|----------|----------------------------------------------------------------------------------------------------------|--------|--------|---------|
| type     | 按钮有四种类型：short（主按钮）、white(线框主按钮)、white-normal(线框次按钮)  text(文本按钮) disabled(禁用按钮) | string | short  | 否       |
| disabled | 是否禁用回调事件                                                                                           | bool   | false  | 否       |
| size     | 按钮大小，large，medium，small，smallest                                                                       | string | large  | 否       |

## Events

| 事件名 | 说明         | 回调参数     |
|--------|------------|----------|
| click  | 按钮点击回调 | 点击事件参数 |