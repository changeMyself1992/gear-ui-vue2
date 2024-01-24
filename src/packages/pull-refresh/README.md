# 下拉刷新
页面有实时数据加载的页面使用。

## 引入

```javascript
本地需要安装lottie-web：^5.9.6
import Vue from 'vue'
import PullRefresh from '@ueip/gear-vue/lib/pull-refresh'
import '@ueip/gear-vue/lib/pull-refresh/index.css'

Vue.use(PullRefresh)

// joyer
import  {PullRefresh}  from '@@ueip-gear-vue/master/index';
```

## vue用法

深色背景在这仅仅只是模拟，我们写页面的肯定管不了人家浏览器，到金融app里还是要自己去配jrbridge

```javascript
<template>
  <div :class="['pull-refresh', this.type == 1 && 'pull-refresh-gray']">
    <gear-pull-refresh @refresh="handleRefresh" :head-text-color="this.type == 1 ? '#666666' : '#ffffff'">
      <PageContent></PageContent>
    </gear-pull-refresh>
  </div>
</template>

<script>
import PageContent from './PageContent.vue';

export default {
  data() {
    return {
      type: 0
    };
  },
  methods: {
    handleRefresh(done) {
      console.log('refresh');
      setTimeout(() => {
        done();
      }, 3000);
    }
  },
  mounted() {},
  components: {
    PageContent
  }
};
</script>

<style lang="scss">
.pull-refresh {
  text-align: center;
  color: #2c3e50;
  background: #df5645;
  background: linear-gradient(180deg, rgba(239, 64, 52, 1) 0%, rgba(244, 245, 247, 1) 30%);

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  &__item {
    margin: 0;
    padding: 0;
    background: #fff;
    line-height: 30px;
    border-bottom: 1px solid #eee;
  }
}
.pull-refresh-gray {
  background: #f4f5f7;
}
</style>
```

## react用法(不支持react hook的版本暂不支持此组件)

```javascript
  function App() {
    const refresh = done => {
      console.log('refresh')
      setTimeout(() => {
        done && done()
      }, 3000)
    }

    const renderChild = () => {
      const list = new Array(50).fill('')

      const aaa = list.map((l, index) => (<p className="list" key={index}>{index + 1}</p>))
      return aaa
    }
    return (
      <div className="App">
        <PullRefresh onRefresh={refresh} headTextColor="#ffffff">
          {renderChild()}
        </PullRefresh>
      </div>
    );
  }
```

## Props

| 字段                | 说明        | 类型      | 默认值       |
| ----------------- | --------- | ------- | --------- |
| disabled          | 是否禁用      | Boolean | false     |
| animationDuration | 动画时长      | Number  | 300       |
| headHeight        | 头部高度      | Number  | 80        |
| headTextColor     | 头部文字颜色    | String  | #666666   |
| pullDistance      | 触发下拉刷新的距离 | Number  | 默认和头部高度一致 |
| pullingText       | 下拉显示文字    | String  | 下拉刷新      |
| loosingText       | 释放显示文字    | String  | 松开刷新      |
| loadingText       | 加载显示文字    | String  | 正在刷新      |

## Events

| 事件名     | 说明      | 回调参数         |
| ------- | ------- | ------------ |
| refresh | 下拉刷新是触发 | done 触发关闭的方法 |