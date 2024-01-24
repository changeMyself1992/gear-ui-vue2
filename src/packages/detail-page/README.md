# DetailPage详情页

一种用于显示某个产品或信息的详细信息的页面。

```javascript
import Vue from 'vue'
import DetailPage  from '@ueip/gear-vue/lib/detail-page'
import '@ueip/gear-vue/lib/detail-page/index.css'
Vue.use(DetailPage)
```

## vue用法

```javascript
<template>
  <div class="demo-DetailPage">
    <gear-detail-page :configList="configList" />
  </div>
</template>


<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  name: 'demo-DetailPage',
  mixins: [Px2VwMixin],
  data() {
    return {
      configList: [
        {
          title: '一、活动时间',
          paragraphs: ['2022年2月7日—2022年3月31日']
        },
        {
          title: '二、活动对象',
          paragraphs: ['京东金融APP的实名用户（以下简称“用户”）']
        },
        {
          title: '三、活动内容',
          paragraphs: [
            '活动期间，用户通过指数进化论活动页面有机会领取1张最高减1元的财运优惠券和1张最高减6.66元的财运优惠券，具体以用户点击活动页面上优惠券楼层后，用户实际可领取成功并到账的面额为准。券的使用详情及有效期请至【我的-优惠券】中查看，并以页面显示为准，请在优惠券有效期内使用，逾期作废。优惠券数量有限，先到先得。',
            '最高减1元的财运优惠券，每个用户在活动期间内最多可获得一张，请在优惠券有效期内使用，逾期作废。',
            '最高减6.66元的财运优惠券，每个用户在活动期间内每天最多可获得1张，请在优惠券有效期内使用，逾期作废。'
          ]
        },
        {
          title: '四、活动奖励',
          paragraphs: [
            '1）同一手机号、身份证号、京东账户、银行卡号、终端设备等与用户身份相关的信息，其中任意一项或者多项存在相同、相似或非真实有效等情况的，均可能被认定为同一用户，按照营销活动规则中的同一用户处理；',
            '2）本活动不可与其他优惠同时享受，同一订单只能享受一种优惠，如同时满足多个优惠活动条件，则优先享受活动力度大的；',
            '3）活动期间若发现用户存在刷奖、非法行为及其他违反诚实信用原则的行为，京东金融有权收回相关奖励；'
          ],
          paragraphMarginBottom: this.px2vw(9)
        }
      ]
    };
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.demo-DetailPage {
  width: 100%;
  min-height: 100vh;
}
</style>
```

## Props

| 字段         | 说明       | 类型    | 默认值 | 是否必要 |
| ---------- | -------- | ----- | --- | ---- |
| configList | 页面详情配置列表 | array | []  | 否    |

#### configList[index]

| 属性名                   | 说明           | 类型     | 默认值  | 是否必要 |
| --------------------- | ------------ | ------ | ---- | ---- |
| title                 | 标题           | string | 空字符串 | 是    |
| paragraphs            | 段落数组         | array  | []   | 是    |
| paragraphMarginBottom | 段落下边距，需要定义单位 | string |      | 否    |