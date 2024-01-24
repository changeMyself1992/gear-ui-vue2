# Feed流上滑加载样式

## 引入

```javascript
import Vue from 'vue'
import SlideLoad from '@ueip/gear-vue/lib/slide-load'
import '@ueip/gear-vue/lib/slide-load/index.css'
Vue.use(SlideLoad)

// joyer
import  {SlideLoad}  from '@@ueip-gear-vue/master/index';
```

## vue用法

```javascript

<!--  -->
<template>
  <gear-slide-load v-model="loading" @load="handleLoad" :error.sync="error" :finished="finished" :immediateCheck="false">
    <div class="slide-load-head"></div>
    <div class="page-content-item" v-for="(item, i) in list" :key="i">
      <div v-if="item" class="page-content-item-text">{{ item }}</div>
      <div v-else>
        <div class="page-content-item-line1"></div>
        <div class="page-content-item-line2"></div>
      </div>
    </div>
  </gear-slide-load>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      list: ['', '', '拖拽上拉查看效果', ''],
      finished: false,
      error: false,
      count: 0
    };
  },
  methods: {
    handleLoad() {
      if (this.count === 0) {
        setTimeout(() => {
          this.loading = false;
          this.list = ['', '', '', '', '', '', '', '再次拖拽上拉查看加载失败效果', ''];
        }, 2000);
      } else if (this.count === 1) {
        setTimeout(() => {
          this.loading = false;
          this.error = true;
          this.list = ['', '', '', '', '', '', '', '点击“点击重试”查看加载到底效果', ''];
        }, 2000);
      } else if (this.count === 2) {
        setTimeout(() => {
          this.loading = false;
          this.finished = true;
          this.list = ['', '', '', '', '', '', '', '', ''];
        }, 2000);
      }
      this.count += 1;
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/demo';
p {
  text-align: center;
}
.slide-load-head {
  margin: 10px $padding-sm 10px $padding-sm;
  height: 400px;
  background-color: #ffffff;
  border-radius: 4px;
}
.page-content-item {
  border-radius: 4px;
  margin: 0 $padding-sm 10px $padding-sm;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .page-content-item-line1 {
    margin-left: $padding-sm;
    width: 140px;
    height: 16px;
    background-color: #f4f5f7;
    margin-bottom: 10px;
    border-radius: 4px;
  }
  .page-content-item-line2 {
    margin-left: $padding-sm;
    width: 100px;
    height: 16px;
    background-color: #f4f5f7;
    border-radius: 4px;
  }
  .page-content-item-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
}
</style>


```

## Props

| 字段           | 说明                                                 | 类型    | 默认值            |
|----------------|----------------------------------------------------|---------|-------------------|
| disabled       | 是否禁用 （如果设置为true将不在显示底部loading和文字） | Boolean | false             |
| loading        | 是否正在加载                                         | Boolean | false             |
| finished       | 是否完成                                             | Boolean | false             |
| error          | 是否显示错误                                         | Boolean | false             |
| immediateCheck | 是否立即监测                                         | Boolean | true              |
| offset         | 距离底部多少距离开始检测                             | Number  | 100               |
| loadingText    | 加载中显示的文字                                     | String  | 正在加载...       |
| finishedText   | 加载完成显示的文字                                   | String  | 没有更多了        |
| errorText      | 出错显示的文字                                       | String  | 请求失败，点击重试 |

## Events

| 事件名 | 说明           | 回调参数 |
|--------|--------------|-------|
| load   | 上拉触底时触发 | 无参数   |