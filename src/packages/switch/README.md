# switch切换组件

```javascript
import Vue from 'vue'
import Switch  from '@ueip/gear-vue/lib/switch'
import '@ueip/gear-vue/lib/switch/index.css'
Vue.use(Switch)

// joyer
import  {Swipe}  from '@@ueip-gear-vue/master/index';
```

## vue用法

```javascript
<template>
  <div class="demo-switch">
    <div class="title">基础用法</div>
    <div class="box1">
      <gear-switch v-model="val1" :isSuccinct="true" size="large" @change="test" style="margin-right: 40px"></gear-switch>
      <gear-switch v-model="val2" :isSuccinct="true" size="small" @change="test"></gear-switch>
    </div>
    <div class="title">有默认值</div>
    <div class="box1">
      <gear-switch v-model="val3" :isSuccinct="true" size="large" @change="test" style="margin-right: 40px"></gear-switch>
      <gear-switch v-model="val4" :isSuccinct="true" size="small" @change="test"></gear-switch>
    </div>
    <div class="title">自定义样式</div>
    <div class="box2">
      <div class="box2-1">
        <gear-switch v-model="val5" :isSuccinct="true" size="large" @change="test" style="margin-right: 34px" />
        <gear-switch v-model="val6" :isSuccinct="true" size="large" @change="test" themeColor="#EB9654" style="margin-right: 34px" />
        <gear-switch v-model="val7" :isSuccinct="true" size="large" @change="test" themeColor="#F75C38" style="margin-right: 34px" />
        <gear-switch v-model="val8" :isSuccinct="true" size="large" @change="test" themeColor="#1DB270" />
      </div>
      <div class="box2-2">
        <gear-switch v-model="val9" :isSuccinct="true" size="small" @change="test" style="margin-right: 55px" />
        <gear-switch v-model="val10" :isSuccinct="true" size="small" @change="test" themeColor="#EB9654" style="margin-right: 55px" />
        <gear-switch v-model="val11" :isSuccinct="true" size="small" @change="test" themeColor="#F75C38" style="margin-right: 55px" />
        <gear-switch v-model="val12" :isSuccinct="true" size="small" @change="test" themeColor="#1DB270" />
      </div>
    </div>
    <div class="title">禁用状态</div>
    <div class="box1">
      <gear-switch v-model="val13" :isSuccinct="true" size="large" @change="test" :disabled="true" style="margin-right: 40px"></gear-switch>
      <gear-switch v-model="val13" :isSuccinct="true" size="small" @change="test" :disabled="true" style="margin-right: 40px"></gear-switch>
      <gear-switch v-model="val14" :isSuccinct="true" size="large" @change="test" :disabled="true" style="margin-right: 40px"></gear-switch>
      <gear-switch v-model="val14" :isSuccinct="true" size="small" @change="test" :disabled="true"></gear-switch>
    </div>

    <div class="title">异步</div>
    <div class="box1">
      <gear-switch :value="val15" :isSuccinct="true" size="large" @change="onChange1" style="margin-right: 40px" :loading="loading1"></gear-switch>
      <gear-switch :value="val16" :isSuccinct="true" size="small" @change="onChange2" :loading="loading2"></gear-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-switch',
  data() {
    return {
      val1: false,
      val2: false,
      val3: true,
      val4: true,
      val5: true,
      val6: true,
      val7: true,
      val8: true,
      val9: true,
      val10: true,
      val11: true,
      val12: true,
      val13: false,
      val14: true,
      val15: false,
      val16: false,
      loading1: false,
      loading2: false
    };
  },
  components: {},
  methods: {
    test(val) {
      console.log('11111', val);
    },
    onChange1(checked) {
      this.val15 = checked;
      this.loading1 = true;
      setTimeout(() => {
        this.loading1 = false;
      }, 2000);
    },
    onChange2(checked) {
      this.val16 = checked;
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-switch {
  padding: 30px 12px 0 12px;
  width: 100%;
  min-height: 100vh;
  .title {
    margin-bottom: 4px;
    line-height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: #999999;
  }
  .box1 {
    width: 100%;
    height: 52px;
    background: linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 4px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  .box2 {
    width: 100%;
    height: 110px;
    background: linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 4px;
    padding-top: 12px;
    margin-bottom: 21px;
    .box2-1 {
      padding-left: 12px;
      margin-bottom: 20px;
    }
    .box2-2 {
      padding-left: 23px;
    }
  }
}
</style>
```

## Props

| 字段         | 说明                                                          | 类型      | 默认值    | 是否必要 |
| ---------- | ----------------------------------------------------------- | ------- | ------ | ---- |
| v-model    | 绑定当前switch的内容                                               | Boolean | false  | 是    |
| isSuccinct | 是否要返回一个简洁的开关组件（不被field包裹）                                   | Boolean | false  | 否    |
| title      | 作为表单开关形式使用时展示的标题，isSuccinct为true时生效                         | string  | 空字符串   | 否    |
| border     | 作为表单开关形式使用时（isSuccinct为true时）,要显示的边框位置，空字符串，bottom，top，三种类型 | string  | 空字符串   | 否    |
| title      | switch的标题，isSuccinct为true生效                                 | string  | 空字符串   | 否    |
| border     | 开关内容区域的分割线（bottom\|top），isSuccinct为true生效                   | string  | bottom | 否    |
| disabled   | 是否禁用                                                        | Boolean | false  | 否    |
| size       | 开关大小，large大  small小                                         | string  | large  | 否    |
| themeColor | 开关主题色，不传的话默认是主题红                                            | string  | 空字符串   | 否    |
| loading    | 是否为加载状态                                                     | Boolean | false  | 否    |

## Events

| 事件名    | 说明            | 回调参数           |
| ------ | ------------- | -------------- |
| change | switch内容改变时回调 | 输入的内容(Boolean) |