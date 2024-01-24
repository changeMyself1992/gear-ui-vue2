# 轻提示
一种轻量级反馈/提示，用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

## 引入

```javascript
import Vue from 'vue'
import Toast '@ueip/gear-vue/lib/toast'
import '@ueip/gear-vue/lib/toast/index.css'
Vue.use(Toast)

// joyer
import  {Toast}  from '@@ueip-gear-vue/master/index';
```

## vue用法

```javascript
<template>
  <div class="demo-toast" clstag="07VC|126786">
    <div v-for="(section, index) in source" :key="'section' + index" style="display: flex; flex-direction: column">
      <div :style="index !== 0 ? { 'margin-top': '3px' } : ''" class="section-title">{{ section.section }}</div>
      <gear-button v-for="(item, i) in section.data" :key="'item' + i" @click="buttonClick(item)" class="btn1">
        {{ item.text }}
      </gear-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo-toast',
  data() {
    const source = [
      {
        section: '单行结构（常用）',
        data: [
          {
            text: '警告提示',
            title: '最长文案内容不超过18个字',
            type: 'warn'
          },
          {
            text: '成功提示',
            title: '最长文案内容不超过18个字',
            type: 'success'
          },
          {
            text: '成功提示（有附加信息）',
            title: '签到成功',
            type: 'success',
            message: '今日积分+10'
          },
          {
            text: '失败提示',
            title: '最长文案内容不超过18个字',
            type: 'fail'
          },
          {
            text: '纯文本提示',
            title: '最长文案内容不超过18个字',
            type: 'normal'
          }
        ]
      },
      {
        section: '上下结构（不常用）',
        data: [
          {
            text: '警告提示',
            title: '警告提示',
            size: 'large',
            type: 'warn'
          },
          {
            text: '成功提示',
            title: '成功提示',
            size: 'large',
            type: 'success'
          },
          {
            text: '失败提示',
            title: '失败提示',
            size: 'large',
            type: 'fail'
          },
          {
            text: '加载中',
            title: '加载中…',
            size: 'large',
            type: 'loading'
          }
        ]
      }
    ];
    return {
      headerTitle: 'Toast',
      source
    };
  },
  mounted() {},
  components: {},
  methods: {
    buttonClick: function (item) {
      this.$Toast({
        title: item.title,
        type: item.type,
        message: item.message,
        size: item.size || 'normal',
        duration: 3000
      });
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/demo';
.demo-toast {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
}
</style>
```

## Props

| 字段     | 说明                                      | 类型   | 默认值   | 是否必要 |
|----------|-----------------------------------------|--------|----------|----------|
| title    | 标题文案                                  | string | 空字符串 | 否       |
| type     | 提示类型 warn success fail normal loading | string | 'normal' | 否       |
| message  | 提示文案                                  | string | 空字符串 | 否       |
| size     | 图标大小，large，normal                     | string | 'normal' | 否       |
| bgcolor  | toast背景颜色                             | string | 空字符串 | 否       |
| duration | 动画时间，毫秒                             | number | 2000     |          |
