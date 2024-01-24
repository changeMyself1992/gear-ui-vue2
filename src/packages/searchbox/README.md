# 搜索框

常用的搜索框样式

## 引入

```javascript
import Vue from 'vue'
import Searchbox from '@ueip/gear-vue/lib/searchbox'
import '@ueip/gear-vue/lib/searchbox/index.css'
Vue.use(Searchbox)
```

## vue用法

```javascript
<template>
  <div class="container">
    <div class="title">搜索框</div>
    <gear-searchbox type="search" :backColor="whiteColor" :textColor="greyColor" @click="onClick"></gear-searchbox>
    <div class="title">搜索框+1图标</div>
    <gear-searchbox type="search-one-icon" :icon="iconArr1" @click="onClick"></gear-searchbox>
    <div class="title">搜索框+2图标</div>
    <gear-searchbox type="search-two-icon" :icon="iconArr2" @click="onClick"></gear-searchbox>
    <div class="title">彩色背景搜索框</div>
    <gear-searchbox type="search" :backColor="redColor" :textColor="whiteColor" @click="onClick"></gear-searchbox>
    <div class="title">彩色背景搜索框+1图标</div>
    <gear-searchbox type="search-one-icon" :backColor="redColor" :textColor="whiteColor" :icon="iconArr3" @click="onClick"></gear-searchbox>
    <div class="title">彩色背景搜索框+2图标</div>
    <gear-searchbox type="search-two-icon" :backColor="redColor" :textColor="whiteColor" :icon="iconArr4" @click="onClick"></gear-searchbox>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      whiteColor: '#ffffff',
      redColor: '#EF4034',
      greyColor: '#999999',
      icon0: '',
      icon1: '',
      icon2: '',
      icon00: '',
      icon11: '',
      icon22: '',
      iconArr1: ['https://img10.360buyimg.com/imagetools/jfs/t1/4373/2/20180/329/63a170e1E2f0419cb/bdb417f6050a56cd.png'],
      iconArr2: [
        'https://img12.360buyimg.com/imagetools/jfs/t1/49051/31/22435/330/63a17059Ea9fa5650/0fcf4cd9da986ac7.png',
        'https://img12.360buyimg.com/imagetools/jfs/t1/129424/5/33429/507/63a17092Ed35d9c7d/7a5620f029647f42.png'
      ],
      iconArr3: ['https://img10.360buyimg.com/imagetools/jfs/t1/161124/3/33742/337/63a170c0E3a073ddb/adca623f0694a860.png'],
      iconArr4: [
        'https://img12.360buyimg.com/imagetools/jfs/t1/35486/1/19970/341/63a17042E338bddde/13903a3e0419f55f.png',
        'https://img14.360buyimg.com/imagetools/jfs/t1/100197/14/19948/519/63a1707cE09ade305/fdc6a6720118d7ac.png'
      ]
    };
  },
  methods: {
    onClick() {
      this.$toast('搜索框点击，具体功能使用者去实现');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  // padding: 0 12px;

  .title {
    line-height: 20px;
    margin: 10px 0;
    padding: 0 12px;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 600;
    color: rgba(153, 153, 153, 1);
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 55px;
    margin: 10px 0;
    border-radius: 4px;
    background: rgba(255, 255, 255, 1);
  }
}
</style>
```

## Searchbox(Props)

| 字段              | 说明                                                                 | 类型     | 默认值 | 是否必要 |
| --------------- | ------------------------------------------------------------------ | ------ | --- | ---- |
| type            | 搜索框类型枚举，search无图标搜索框，search-one-icon一个图标搜索框，search-two-icon俩个图标搜索框 | string | 空字符 | 是    |
| backColor       | 搜索框背景颜色                                                            | string | 空字符 | 否    |
| textColor       | 文案颜色                                                               | string | 空字符 | 否    |
| icon            | 图标链接数组                                                             | array  | []  | 否    |
| searchIconStyle | 搜索图标样式对象                                                           | object | {}  | 否    |

## Events

| 事件名   | 说明      | 回调参数 |
| ----- | ------- | ---- |
| click | 点击搜索框回调 | 无参数  |