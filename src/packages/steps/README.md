# 步骤条

用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。

## 引入

```javascript
import Vue from 'vue'
import Steps from '@ueip/gear-vue/lib/steps'
import Step from '@ueip/gear-vue/lib/step'
import '@ueip/gear-vue/lib/steps/index.css'
import '@ueip/gear-vue/lib/step/index.css'
Vue.use(Steps)
Vue.use(Step)
```

## vue用法

### 竖向样式

```javascript
<template>
  <div class="demo-steps1">
    <div class="demo-swipe-title">状态1</div>
    <gear-steps :active="active1" direction="vertical" style="margin-bottom: 28px">
      <gear-step v-for="(item, index) in steps1" :key="index" :title="item.title" :description="item.description" :index="index" :status="item.status" />
    </gear-steps>

    <div class="demo-swipe-title">状态2</div>
    <gear-steps :active="active2" direction="vertical" style="margin-bottom: 28px">
      <gear-step v-for="(item, index) in steps2" :key="index" :title="item.title" :description="item.description" :index="index" :status="item.status" />
    </gear-steps>

    <div class="demo-swipe-title">状态3</div>
    <gear-steps :active="active3" direction="vertical">
      <gear-step v-for="(item, index) in steps3" :key="index" :title="item.title" :description="item.description" :index="index" :status="item.status" />
    </gear-steps>
  </div>
</template>

<script>
export default {
  name: 'demo-steps2',
  components: {},
  data() {
    return {
      active1: 0,
      steps1: [
        {
          title: '提现申请已提交',
          description: '中国工商银行储蓄卡(8766)',
          status: 'finish'
        },
        {
          title: '2016-10-23 开始产生收益',
          description: '到账情况视银行速度而定，请注意查收；剩余额度：5000元',
          status: 'wait'
        },
        {
          title: '2016-11-23 到期, 待收利息122元',
          status: 'wait'
        }
      ],

      active2: 1,
      steps2: [
        {
          title: '提现申请已提交',
          description: '中国工商银行储蓄卡(8766)',
          status: 'finish'
        },
        {
          title: '2016-10-23 开始产生收益',
          description: '到账情况视银行速度而定，请注意查收；剩余额度：5000元',
          status: 'process'
        },
        {
          title: '2016-11-23 到期, 待收利息122元',
          status: 'wait'
        }
      ],

      active3: 2,
      steps3: [
        {
          title: '提现申请已提交',
          description: '中国工商银行储蓄卡(8766)',
          status: 'finish'
        },
        {
          title: '2016-10-23 开始产生收益',
          description: '到账情况视银行速度而定，请注意查收；剩余额度：5000元',
          status: 'finish'
        },
        {
          title: '由于网络问题，收益暂未到账',
          status: 'error'
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.demo-steps1 {
  margin: 0;
  padding: 10px $padding-sm 57px $padding-sm;
  .demo-swipe-title {
    line-height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: #999999;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
</style>


```

### 横向样式

```javascript

<template>
  <div class="demo-steps2">
    <gear-steps :active="active" :processStatus="processStatus">
      <gear-step v-for="(item, index) in steps" :key="index" :title="item.title" :description="item.description" :index="index" :status="item.status" />
    </gear-steps>
    <gear-button type="short" size="large" style="margin-top: 20px" @click="onclick">下一步</gear-button>
  </div>
</template>

<script>
export default {
  name: 'demo-steps2',
  components: {},
  data() {
    return {
      active: -1,
      steps: [
        {
          title: '登录/注册',
          status: ''
        },
        {
          title: '申请征信报告',
          status: ''
        },
        {
          title: '提取征信报告',
          status: ''
        }
        // {
        //   title: '提取征信报告,提取征信报告',
        //   status: ''
        // },
        // {
        //   title: '提取征信报告',
        //   status: ''
        // }
      ],
      // wait未开始 process处理中 finish完成,error失败
      processStatus: 'finish'
    };
  },
  mounted() {},
  methods: {
    onclick() {
      if (this.active < this.steps.length - 1) {
        this.active += 1;
        // if (this.active === 0) this.steps[0].status = 'process';
        // if (this.active === 1) this.steps[1].status = 'error';
      } else {
        this.active = -1;
        this.steps = this.steps.map(item => {
          item.status = '';
          return item;
        });
      }
    }
  }
};
</script>

<style lang="scss">
.demo-steps2 {
  margin: 0;
  padding: 20px 10px 0 10px;
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
</style>


```

## Steps(Props)

| 字段          | 说明                                                                                                | 类型   | 默认值     | 是否必要 |
|---------------|---------------------------------------------------------------------------------------------------|--------|------------|---------|
| active        | 设置当前激活步骤索引                                                                                | number | -1         | 是       |
| direction     | 显示方向 vertical/horizontal                                                                        | string | horizontal | 否       |
| processStatus | 当前步骤的状态(如果子组件step设置了状态，那么以它优先) wait未开始 process处理中 finish完成,error失败 | string | finish     | 否       |

## Step(Props)

| 字段        | 说明                                           | 类型   | 默认值   | 是否必要 |
|-------------|----------------------------------------------|--------|----------|---------|
| title       | 步骤标题                                       | string | 空字符串 | 否       |
| description | 步骤描述，仅在 steps显示方向为vertical时生效    | string | 空字符串 | 否       |
| index       | 步骤索引值                                     | number | 0        | 是       |
| status      | 设置当前步骤的状态，不设置则根据 steps 确定状态 | string | 空字符串 | 否       |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
|        |      |          |