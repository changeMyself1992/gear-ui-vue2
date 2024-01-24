# 分页符

可滑动ICON列表、可滑动卡片、轮播图等使用。

## 引入

```javascript
import Vue from 'vue'

import Swipe from '@ueip/gear-vue/lib/swipe'
import '@ueip/gear-vue/lib/swipe/index.css'
import SwipeItem from '@ueip/gear-vue/lib/swipe-item'
import '@ueip/gear-vue/lib/swipe-item/index.css'
import ScrollView from '@ueip/gear-vue/lib/scroll-view'
import '@ueip/gear-vue/lib/scroll-view/index.css'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(ScrollView)


// joyer
import  {Swipe, SwipeItem, ScrollView}  from '@@ueip-gear-vue/master/index';
```

## vue用法

```javascript
<template>
  <div class="demo-swipe" clstag="C241|126804">
    <div class="demo-swipe-title">整页分页符</div>
    <gear-swipe class="swipe-1" :autoplay="0" indicator-color="#666666">
      <gear-swipe-item v-for="index in array" :key="index" :marginRight="24">
        <div class="white-box">Banner {{ ['One', 'Two', 'Three', 'Four', 'Five'][index - 1] }}</div>
      </gear-swipe-item>
    </gear-swipe>

    <gear-swipe class="swipe-2" :autoplay="4000" indicator-color="white">
      <gear-swipe-item v-for="index in [1, 2, 3, 4]" :key="index" :marginRight="24">
        <div :class="`box box-${index}`">Banner {{ ['One', 'Two', 'Three', 'Four'][index - 1] }}</div>
      </gear-swipe-item>
    </gear-swipe>

    <div class="demo-swipe-title">滑动分页符</div>
    <div class="scroll-view-box">
      <gear-scroll-view :style="`margin-bottom: ${px2vw(10)}; border-radius: ${px2vw(4)}`">
        <div class="child-1" v-for="index in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="index"></div>
      </gear-scroll-view>

      <gear-scroll-view
        :style="`background-color: #f53137; border-radius: ${px2vw(4)}`"
        :progressStyle="{ 'background-color': '#FFFFFF' }"
        :indicatorsStyle="{ 'background-color': 'rgba(255,255,255,0.4)' }"
      >
        <div class="child-2" v-for="index in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="index"></div>
      </gear-scroll-view>
    </div>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  name: 'demo-swipe',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      array: [1, 2, 3, 4]
    };
  },
  mounted() {
    setTimeout(() => {
      this.array = [1, 2, 3];
    }, 3000);
    setTimeout(() => {
      this.array = [1, 2, 3, 4, 5];
    }, 6000);
  },
  methods: {}
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.demo-swipe {
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
  overflow-x: hidden;
  padding: 0 $padding-sm;
  .demo-swipe-title {
    line-height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: #999999;
    width: 100%;
    margin: 30px 0 10px 0;
  }
  .swipe-1 {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
    .white-box {
      width: 100%;
      height: 86px;
      background: #ffffff;
      border-radius: 4px;

      line-height: 86px;
      font-size: 24px;
      font-weight: normal;
      color: #e01119;
      text-align: center;
    }
    .gear-swipe__indicators {
      .gear-swipe__indicator {
        background-color: #666666;
      }
    }
  }

  .swipe-2 {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
    .box {
      width: 100%;
      height: 86px;
      border-radius: 4px;
      line-height: 86px;
      font-size: 24px;
      font-weight: normal;
      color: #ffffff;
      text-align: center;
    }
    .box-1 {
      background: $redTheme;
    }
    .box-2 {
      background: #d7af74;
    }
    .box-3 {
      background: #3e5cd7;
    }
    .box-4 {
      background: #1db270;
    }
  }

  .swipe-box-white {
    position: relative;
    width: 100%;
    height: 78px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .swipe-3 {
      width: 100%;
      .gray-box {
        height: 44px;
        background: rgba(216, 216, 216, 1);
        border-radius: 8px;
        color: #ffffff;
        text-align: center;
        line-height: 44px;
      }
    }
    .custom-indicator {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 6px;
      width: 24px;
      height: 3px;
      background: #d6d6d6;
      border-radius: 2px;
    }
  }
  .scroll-view-box {
    box-sizing: border-box;
    width: 100%;
    .child-1 {
      width: 40px;
      height: 40px;
      background: rgba(216, 216, 216, 1);
      border-radius: 8px;
      margin-right: 16px;
      display: inline-block;
    }
    .child-1:last-child {
      margin-right: 0;
    }
    .child-2 {
      width: 40px;
      height: 40px;
      background: rgba(255, 73, 76, 1);
      border-radius: 8px;
      margin-right: 16px;
      display: inline-block;
    }
    .child-2:last-child {
      margin-right: 0;
    }
  }
}
</style>
```

## Swipe(Props)

| 字段                | 说明                              | 类型               | 默认值     | 是否必要 |
| ----------------- | ------------------------------- | ---------------- | ------- | ---- |
| duration          | 动画时长，单位为 ms                     | [Number, String] | 500     | 否    |
| initialSwipe      | 初始位置索引值                         | [Number, String] | 0       | 否    |
| loop              | 是否开启循环播放                        | Boolean          | true    | 否    |
| autoplay          | 自动轮播间隔，单位为 ms                   | [Number, String] | 0       | 否    |
| stopPropagation   | 是否阻止滑动事件冒泡                      | String           | #1989fa | 否    |
| indicatorRelative | 滑动标记是否要求相对位置,vertical为false才会生效 | Boolean          | false   | 否    |
| indicatorColor    | 指示器颜色                           | String           | #1989fa | 否    |
| vertical          | 是否为纵向滚动                         | Boolean          | false   | 否    |
| isFadeOver        | 自动切换动画的时候是否要淡入淡出效果              | Boolean          | false   | 否    |

## Swipe-item(Props)

| 字段          | 说明       | 类型     | 默认值 | 是否必要 |
| ----------- | -------- | ------ | --- | ---- |
| marginRight | 轮播元素右侧间隔 | Number | 0   | 否    |

## Swipe(Events)

| 事件名    | 说明         | 回调参数             |
| ------ | ---------- | ---------------- |
| change | 每一页轮播结束后触发 | index, 当前轮播元素的索引 |

## ScrollView(Props)

| 字段              | 说明      | 类型     | 默认值 | 是否必要 |
| --------------- | ------- | ------ | --- | ---- |
| indicatorsStyle | 指示器背景样式 | Object | {}  | 否    |
| progressStyle   | 指示器进度样式 | Object | {}  | 否    |