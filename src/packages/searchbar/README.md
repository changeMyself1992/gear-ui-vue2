# 搜索框

常用的搜索框样式

## 引入

```javascript
import Vue from 'vue'
import Searchbar from '@ueip/gear-vue/lib/searchbar'
import '@ueip/gear-vue/lib/searchbar/index.css'
Vue.use(Searchbar)
```

## vue用法

```javascript

<template>
  <div class="demo-searchbar">
    <gear-searchbar class="marginBottom20" placeholder="引导搜索的文案" @click="onClick" />

    <gear-searchbar class="marginBottom20" placeholder="引导搜索的文案" @click="onClick">
      <template slot="hot">
        <div class="hot1"></div>
      </template>
    </gear-searchbar>

    <gear-searchbar class="marginBottom20" placeholder="引导搜索的文案" @click="onClick">
      <template slot="hot">
        <div class="hot2"></div>
      </template>
    </gear-searchbar>

    <gear-searchbar class="marginBottom20" placeholder="引导搜索的文案，文案长度如果很长就打打打打打打打打打打打打打打" @click="onClick">
      <template slot="hot">
        <div class="hot1"></div>
      </template>
    </gear-searchbar>

    <gear-searchbar class="marginBottom20" placeholder="引导搜索的文案，文案长度如果很长就打打打打打打打打打打打打打打" @click="onClick">
      <template slot="hot">
        <div class="hot2"></div>
      </template>
    </gear-searchbar>

    <gear-searchbar class="marginBottom20 searchbar1" placeholder="引导搜索的文案，文案文案文案文案文案文案文案" @click="onClick">
      <template slot="hot">
        <div class="hot2"></div>
      </template>
    </gear-searchbar>

    <div class="searchbar-box0">
      <gear-searchbar
        placeholder="引导搜索的文案"
        @click="onClick"
        :searchbarStyle="{
          background: '#FFFFFF',
          border: '1px solid #FFFFFF'
        }"
      />

      <gear-searchbar
        placeholder="引导搜索的文案"
        @click="onClick"
        :searchbarStyle="{
          background: '#FFFFFF',
          border: '1px solid #FFFFFF'
        }"
      >
        <template slot="hot">
          <div class="hot1"></div>
        </template>
      </gear-searchbar>
    </div>

    <div class="searchbar-box1">
      <gear-searchbar
        placeholder="搜索股票/板块/指数/ETF"
        @click="onClick"
        :searchbarStyle="{
          background: 'rgba(255,255,255,0.16)',
          border: '1px solid rgba(255,255,255,0.24)'
        }"
        :searchIconStyle="{
          color: 'rgba(255,255,255,0.9)'
        }"
        :placeholderStyle="{
          color: 'rgba(255,255,255,0.8)'
        }"
        :lineStyle="{
          background: 'rgba(255,255,255,0.24)'
        }"
        :textStyle="{
          color: '#FFFFFF'
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-searchbar',
  components: {},
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$toast('搜索框点击，具体功能使用者去实现');
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-searchbar {
  padding: 20px 12px 0 12px;
  min-height: 100vh;
  .marginBottom20 {
    margin-bottom: 20px;
  }
  .hot1 {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    background-image: url(https://img11.360buyimg.com/imagetools/jfs/t1/219935/40/31583/1727/64897605Fed028212/19fcab4165473048.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .hot2 {
    width: 26px;
    height: 16px;
    margin-right: 5px;
    background-image: url(https://img14.360buyimg.com/imagetools/jfs/t1/133734/10/39165/3203/64897605F4190e24c/201614035d50b611.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .searchbar1 {
    width: 270px;
  }

  .searchbar-box0 {
    width: 100vw;
    position: relative;
    left: -12px;
    height: 124px;
    padding: 12px;
    margin-bottom: 20px;
    background-image: url(https://img10.360buyimg.com/imagetools/jfs/t1/221871/27/18877/61552/62b179b7E05f1f4f8/bfdc017043f687bb.jpg);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .searchbar-box1 {
    width: 100vw;
    position: relative;
    left: -12px;
    height: 72px;
    background: rgba(245, 49, 55, 1);
    display: flex;
    align-items: center;
    padding: 12px;
  }
}
</style>


```

## Searchbox(Props)

| 字段               | 说明             | 类型     | 默认值 | 是否必要 |
| ---------------- | -------------- | ------ | --- | ---- |
| placeholder      | 占位文案           | string |     | 否    |
| searchbarStyle   | 搜索栏自定义样式       | object | {}  | 否    |
| searchIconStyle  | 搜索图标自定义样式      | object | {}  | 否    |
| placeholderStyle | 占位文案显示自定义样式    | object | {}  | 否    |
| lineStyle        | 搜索文案左边 线 自定义样式 | object | {}  | 否    |
| textStyle        | 搜索文案自定义样式      | object | {}  | 否    |

## Events

| 事件名   | 说明      | 回调参数 |
| ----- | ------- | ---- |
| click | 点击搜索框回调 | 无参数  |