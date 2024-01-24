# 悬浮运营图标

页面右下方弹出的运营活动入口。

## 引入

```javascript
import Vue from 'vue'
import  BullyScreenIcon from '@ueip/gear-vue/lib/bully-screen-icon'
import '@ueip/gear-vue/lib/bully-screen-icon/index.css'
Vue.use(BullyScreenIcon)

// joyer
import  {BullyScreenIcon}  from '@@ueip-gear-vue/master/index';
```

## vue用法

### 返回顶部

```javascript
<template>
  <div class="bully-screen-icon-demo1">
    <div v-for="index in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]" :key="`box-2-${index}`" class="box-2">
      <div class="banner-1"></div>
      <div class="banner-2"></div>
    </div>
    <gear-bully-screen-icon type="backTop" :paddingRight="px2vw(12)" @goodsClick="handleGoodsClick" />
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    handleGoodsClick() {
      // this.$toast('回到顶部点击');
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.bully-screen-icon-demo1 {
  margin: 0;
  padding: 10px $padding-sm 0 $padding-sm;

  display: flex;
  flex-direction: column;
  align-items: center;

  .box-2 {
    width: 100%;
    height: 70px;
    background: white;
    border-radius: 4px;
    padding-left: $padding-sm;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 10px;
    box-sizing: border-box;
    .banner-1 {
      width: 140px;
      height: 16px;
      background: rgba(244, 245, 247, 1);
    }
    .banner-2 {
      width: 100px;
      height: 16px;
      background: rgba(244, 245, 247, 1);
    }
  }
}
</style>
```

### 运营图标

```javascript
<template>
  <div class="bully-screen-icon-demo2">
    <div class="box-3"></div>
    <div v-for="index in [1, 2, 3, 4, 5, 6, 7]" :key="`box-2-${index}`" class="box-2">
      <div class="banner-1"></div>
      <div class="banner-2"></div>
    </div>
    <gear-bully-screen-icon
      imgStr="https://img10.360buyimg.com/imagetools/jfs/t1/206760/37/32080/19300/6436828aF7cb1fcce/2f27c36852a8ed5b.png"
      @closeClick="handleClose"
      @goodsClick="handleGoodsClick"
    />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    handleClose() {},
    handleGoodsClick() {
      this.$toast('图片点击');
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.bully-screen-icon-demo2 {
  margin: 0;
  padding: 0 $padding-sm;

  display: flex;
  flex-direction: column;
  align-items: center;

  .box-3 {
    border-radius: 4px;
    width: 100%;
    height: 356px;
    background-color: #fff;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .box-2 {
    width: 100%;
    height: 70px;
    background: white;
    border-radius: 4px;
    padding-left: $padding-sm;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 10px;
    box-sizing: border-box;
    .banner-1 {
      width: 140px;
      height: 16px;
      background: rgba(244, 245, 247, 1);
    }
    .banner-2 {
      width: 100px;
      height: 16px;
      background: rgba(244, 245, 247, 1);
    }
  }
}
</style>

```

### 广告运营图标

```javascript
<template>
  <div class="bully-screen-icon-demo2">
    <div class="box-3"></div>
    <div v-for="index in [1, 2, 3, 4, 5, 6, 7]" :key="`box-2-${index}`" class="box-2">
      <div class="banner-1"></div>
      <div class="banner-2"></div>
    </div>
    <gear-bully-screen-icon
      imgStr="https://img10.360buyimg.com/imagetools/jfs/t1/206760/37/32080/19300/6436828aF7cb1fcce/2f27c36852a8ed5b.png"
      @closeClick="handleClose"
      @goodsClick="handleGoodsClick"
      type="advertOperationIcon"
    />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    handleClose() {},
    handleGoodsClick() {
      this.$toast('图片点击');
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.bully-screen-icon-demo2 {
  margin: 0;
  padding: 0 $padding-sm;

  display: flex;
  flex-direction: column;
  align-items: center;

  .box-3 {
    border-radius: 4px;
    width: 100%;
    height: 356px;
    background-color: #fff;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .box-2 {
    width: 100%;
    height: 70px;
    background: white;
    border-radius: 4px;
    padding-left: $padding-sm;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 10px;
    .banner-1 {
      width: 140px;
      height: 16px;
      background: rgba(244, 245, 247, 1);
    }
    .banner-2 {
      width: 100px;
      height: 16px;
      background: rgba(244, 245, 247, 1);
    }
  }
}
</style>
```



## Props

| 字段         | 说明                                                                    | 类型           | 默认值        | 是否必要 |
|--------------|-----------------------------------------------------------------------|----------------|---------------|---------|
| type         | operationIcon运营图标,backTop回到顶部, advertOperationIcon 广告运营图标 | string         | operationIcon | 否       |
| imgStr       | 运营图标url,仅在operationIcon，advertOperationIcon，模式下生效            | string         | 空字符串      | 否       |
| paddingRight | 距离页面右侧的距离，默认单位为 px,仅在backTop模式下生效                  | Number, String |               | 否       |
| bottom       | 距离页面底部的距离，默认单位为 px,仅在backTop模式下生效                  | Number, String | 106px         | 否       |

## Events

| 事件名     | 说明             | 回调参数 |
|------------|----------------|-------|
| closeClick | 关闭图标点击回调 | 无参数   |
| goodsClick | 运营图标点击回调 | 无参数   |