# 信息流加载
Feed流上推加载样式。

## 引入

```javascript
import Vue from 'vue'
import Loading  from '@ueip/gear-vue/lib/loading'
import '@ueip/gear-vue/lib/loading/index.css'

Vue.use(Loading)

// joyer
import  {Loading}  from '@@ueip-gear-vue/master/index';

```

## vue用法

```javascript

<!--  -->
<template>
  <div class="gear-loading-demo">
    <div class="section-title">2种Loading样式</div>
    <gear-button @click="btn1Click" :class="btn1.class">{{ btn1.name }}</gear-button>
    <gear-button @click="btn2Click" :class="btn2.class">{{ btn2.name }}</gear-button>
  </div>
</template>

<script>
let timer = null;
export default {
  data() {
    return {
      count: 0,
      timer: null,
      btn1: {
        name: '有文字信息',
        class: 'btn1'
      },
      btn2: {
        name: '无文字信息',
        class: 'btn1'
      }
    };
  },
  props: {},
  methods: {
    btn1Click() {
      if (this.count != 0) return;
      this.count = 5;
      this.$loading.show();
      this.btn1.class = 'btnCount';
      this.btn1.name = `还剩${this.count}秒消失`;
      this.timer = setInterval(() => {
        this.count = this.count - 1;
        this.btn1.name = `还剩${this.count}秒消失`;
        if (this.count === 0) {
          this.btn1.class = 'btn1';
          this.btn1.name = `有文字信息`;
          this.$loading.close();
          this.timer && clearTimeout(this.timer);
        }
      }, 1000);
    },
    btn2Click() {
      if (this.count != 0) return;
      this.count = 5;
      this.$loading.show({
        showMsg: false
      });
      this.btn2.class = 'btnCount';
      this.btn2.name = `还剩${this.count}秒消失`;
      this.timer = setInterval(() => {
        this.count = this.count - 1;
        this.btn2.name = `还剩${this.count}秒消失`;
        if (this.count === 0) {
          this.btn2.class = 'btn1';
          this.btn2.name = `有文字信息`;
          this.$loading.close();
          this.timer && clearTimeout(this.timer);
        }
      }, 1000);
    }
  }
};
</script>

<style lang='scss' scoped>
.gear-loading-demo {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);
  
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btnCount {
  width: 318px !important;
  height: 50px !important;
  background: white !important;
  border-radius: 25px !important;
  font-size: 16px !important;
  font-family: PingFangSC-Semibold !important;
  font-weight: bold !important;
  color: #999999 !important;
  margin-bottom: 16px;
}
</style>


```

## show方法options

| 字段      | 说明                              | 类型      | 默认值  |
| ------- | ------------------------------- | ------- | ---- |
| showMsg | 是否显示文字                          | Boolean | true |
| message | 要显示的文字（如果showMsg设置为false,此字段失效） | string  | 正在加载 |

## method

| 事件名   | 说明        | 参数                   |
| ----- | --------- | -------------------- |
| show  | 展示loading | options详见上面(options) |
| close | 关闭loading |                      |