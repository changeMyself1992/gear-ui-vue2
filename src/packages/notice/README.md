# 公告

位于 App 导航区的下方，提示系统公告或产品信息。

## 引入

```javascript
import Vue from 'vue'
import { Notice } from '@ueip/gear-vue'

Vue.use(Notice)
```

## vue用法

```javascript
<template>
  <div class="notice-demo">
    <div class="title">普通公告</div>
    <gear-notice style="margin-bottom: 20px" type="primary" mode="closeable" @iconClick="iconClick" text="12月1日-31日,移动端单笔每还10000元送5元" />
    <div v-show="show">
      <gear-notice style="margin-bottom: 20px" type="primary" mode="link" @iconClick="iconClick" :text="title" />
    </div>

    <gear-notice type="primary" text="12月1日-31日,移动端单笔每还10000元送5元"></gear-notice>

    <div class="title">警告公告</div>
    <gear-notice style="margin-bottom: 20px" type="warning" mode="closeable" @iconClick="iconClick" text="12月1日-31日,移动端单笔每还10000元送5元" />
    <gear-notice style="margin-bottom: 20px" type="warning" mode="link" @iconClick="iconClick" text="12月1日-31日,移动端单笔每还10000元送多重好礼哈哈哈哈" />
    <gear-notice type="warning" text="12月1日-31日,移动端单笔每还10000元送5元" />

    <div class="title">紧急公告</div>
    <gear-notice style="margin-bottom: 20px" type="danger" mode="closeable" @iconClick="iconClick" text="12月1日-31日,移动端单笔每还10000元送5元" />
    <gear-notice style="margin-bottom: 20px" type="danger" mode="link" @iconClick="iconClick" text="12月1日-31日,移动端单笔每还10000元送多重好礼呵呵呵呵呵呵" />
    <gear-notice type="danger" text="12月1日-31日,移动端单笔每还10000元送5元" />

    <div class="title">特殊公告样式</div>
    <div style="margin-bottom: 20px; background-color: #f53137; padding: 16px 0">
      <gear-notice
        mode="closeable"
        @iconClick="iconClick"
        customBackground="rgba(255,255,255,0.16)"
        customTxtColor="#FFFFFF"
        customIconColor="#FFFFFF"
        text="12月1日-31日,移动端单笔每还10000元送5元"
      />
    </div>
    <div style="margin-bottom: 20px; background-color: #ffa61d; padding: 16px 0">
      <gear-notice mode="link" @iconClick="iconClick" customBackground="rgba(255,255,255,0.16)" customTxtColor="#FFFFFF" customIconColor="#FFFFFF" text="12月1日-31日,移动端单笔每还10000元送5元" />
    </div>
    <div style="margin-bottom: 20px; background-color: #2c68ff; padding: 16px 0">
      <gear-notice customBackground="rgba(255,255,255,0.16)" customTxtColor="#FFFFFF" customIconColor="#FFFFFF" text="12月1日-31日,移动端单笔每还10000元送5元" />
    </div>
    <div style="margin-bottom: 60px; background-color: #ffe8d5; padding: 16px 0">
      <gear-notice mode="closeable" @iconClick="iconClick" customBackground="rgba(210,101,0,0.12)" customTxtColor="#CA6D3F" customIconColor="#CA6D3F" text="12月1日-31日,移动端单笔每还10000元送5元" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-notice',
  data() {
    return {
      title: '',
      show: false
    };
  },
  components: {},
  mounted() {
    setTimeout(() => {
      this.show = true;
      this.title = '这个公告很长，一行展示不下，需要滚动才能看完全看完后面';
    }, 500);

    // setTimeout(() => {
    //   this.title = '我要动态的改这个公告内容，公告内容发生改变要重置滚动逻辑，12月1日-31日,移动端单笔每还10000元送5元';
    // }, 8000);
  },
  methods: {
    iconClick: function (item) {
      if (item === 'closeable') {
        this.$toast('关闭图标点击', '#333');
      } else if (item === 'link') {
        this.$toast('跳转图标点击', '#333');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.notice-demo {
  background-color: #fff;
  .title {
    width: 100%;
    height: 53px;
    padding: 24px 0 0 $padding-sm;

    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: rgba(153, 153, 153, 1);
  }
}
</style>
```

## Props

| 字段             | 说明                                                                         | 类型   | 默认值   | 是否必要 |
|------------------|----------------------------------------------------------------------------|--------|----------|---------|
| mode             | 通知栏图标，可选值为 closeable（关闭图标）  link（跳转图标）                      | string | 空字符串 | 否       |
| type             | 主题类型 primary（普通公告） warning（紧高公告） danger（紧急公告）                | string | 空字符串 | 否       |
| customBackground | 自定义滚动条背景色                                                           | string | 空字符串 | 否       |
| customTxtColor   | 自定义通知文本颜色                                                           | string | 空字符串 | 否       |
| customIconColor  | 自定义图标颜色                                                               | string | 空字符串 | 否       |
| speed            | 滚动速率 (px/s)，默认值为0不填的时候会根据视口自动计算滚动速率，10秒滚动完一屏 | number | 0        | 否       |
| delay            | 动画延迟时间 (毫秒)                                                          | number | 2000     | 否       |
| text             | 通知文本内容                                                                 | string |          | 是       |

## Events

| 事件名    | 说明               | 回调参数 |
|-----------|------------------|------|
| iconClick | 通知栏图标点击回调 | 主题类型 |