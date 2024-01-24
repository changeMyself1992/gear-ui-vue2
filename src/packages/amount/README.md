# 金额输入框组件

## 引入

```javascript
import Vue from 'vue'
import  Amount  from '@ueip/gear-vue/lib/amount'
import '@ueip/gear-vue/lib/address/index.css'
Vue.use(Amount)


// joyer
import  {Amount}  from '@@ueip-gear-vue/master/index';
```

## vue用法

```javascript
<template>
  <div class="input-demo">
    <div class="gear-input-wrap">
      <gear-list title="金额输入框(卡片)">
        <gear-amount v-model="val8" :disabled="false" title="转入金额" placeholder="建议转入200元以上" border="bottom" :options="options8" :validateOption="validate8"></gear-amount>
      </gear-list>
    </div>

    <gear-list :titleStyle="{ 'margin-left': '12px' }" title="金额输入框(通栏)">
      <gear-amount v-model="val9" :disabled="false" placeholder="1000元起投" border="none" itemType="banner" shortcutBtnLabel="全部赎回" @on-shortcutBtn-click="shortcutBtnClick9"></gear-amount>
    </gear-list>

    <gear-list :titleStyle="{ 'margin-left': '12px' }" title="金额输入框(通栏)">
      <gear-amount
        v-model="val10"
        :disabled="false"
        placeholder="1000元起投"
        border="bottom"
        :validateOption="validate10"
        itemType="banner"
        shortcutBtnLabel="全部借出"
        @on-shortcutBtn-click="shortcutBtnClick10"
      ></gear-amount>
    </gear-list>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      val8: '',
      options8: [
        {
          id: 0,
          value: 2000
        },
        {
          id: 1,
          value: 5000
        },
        {
          id: 2,
          value: 10000
        }
      ],
      validate8: {
        type: 'id',
        pattern: currentVal => {
          if (Number(currentVal) > 10000) return false;
          return true;
        },
        errorText: '最多输入10000'
      },

      val9: '',

      val10: '300000',
      validate10: {
        type: 'id',
        pattern: currentVal => {
          if (Number(currentVal) > 300000) return false;
          return true;
        },
        errorText: '最多输入300000'
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {
    shortcutBtnClick9() {
      this.val9 = '2000';
    },
    shortcutBtnClick10() {
      this.val10 = '300000';
    }
  }
};
</script>

<style lang="scss">
.input-demo {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;
  .gear-input-wrap {
    padding: 0 12px 20px 12px;
    width: 100%;
  }
  .gear-input-wrap-banner {
    padding: 0 0 20px 0;
    width: 100%;
  }
}
</style>

<style>
.input-demo .gear-list-title {
  padding-left: 0;
}
</style>
```

## Props

| 字段               | 说明                                                                              | 类型      | 默认值    | 是否必要 |
| ---------------- | ------------------------------------------------------------------------------- | ------- | ------ | ---- |
| v-model          | 绑定当前金额输入框的内容                                                                    | string  | 空字符串   | 是    |
| max              | 原生的maxlength                                                                    | string  | 空字符串   | 否    |
| title            | 金额输入框的标题                                                                        | string  | 空字符串   | 否    |
| disabled         | 原生的disabled                                                                     | Boolean | true   | 否    |
| placeholder      | 原生的placeholder                                                                  | string  | 空字符串   | 否    |
| border           | 输入框的分割线（bottom\|top）                                                            | string  | bottom | 否    |
| validateOption   | 金额输入框的验证对象<br/>{<br/>errorText: '检测不通过时输出的提示',<br/> pattern: '自定义匹配正则对象'<br/> } | object  | 空对象    | 否    |
| options          | 金额选项列表（单位默认是元）<br/>{id:选项的唯一id，value：金额值}                                       | Array   | 空数组    | 否    |
| shortcutBtnLabel | 右侧快捷按钮文案                                                                        | string  | 空字符串   | 否    |
| itemType         | 样式类型，card卡片 banner通栏                                                            | string  | card   | 否    |

## Events

| 事件名                  | 说明          | 回调参数  |
| -------------------- | ----------- | ----- |
| input                | 通知栏图标点击回调   | 输入的内容 |
| on-clean-value       | 输入框清除按钮点击回调 | 无参数   |
| on-shortcutBtn-click | 快捷按钮点击回掉    | 无参数   |