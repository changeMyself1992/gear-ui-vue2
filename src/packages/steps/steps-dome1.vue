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
