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
