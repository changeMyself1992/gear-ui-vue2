<template>
  <gear-slide-load v-model="loading" @load="handleLoad" :error.sync="error" :finished="finished" :immediateCheck="false" clstag="R7W8|126787">
    <div class="slide-load-head"></div>
    <div class="page-content-item" v-for="(item, i) in list" :key="i">
      <div v-if="item" class="page-content-item-text">{{ item }}</div>
      <div v-else>
        <div class="page-content-item-line1"></div>
        <div class="page-content-item-line2"></div>
      </div>
    </div>
  </gear-slide-load>
</template>

<script>
export default {
  name: 'SlideLoad',
  data() {
    return {
      loading: false,
      list: ['', '', '拖拽上拉查看效果', ''],
      finished: false,
      error: false,
      count: 0
    };
  },
  methods: {
    handleLoad() {
      if (this.count === 0) {
        setTimeout(() => {
          this.loading = false;
          this.list = ['', '', '', '', '', '', '', '再次拖拽上拉查看加载失败效果', ''];
        }, 2000);
      } else if (this.count === 1) {
        setTimeout(() => {
          this.loading = false;
          this.error = true;
          this.list = ['', '', '', '', '', '', '', '点击“点击重试”查看加载到底效果', ''];
        }, 2000);
      } else if (this.count === 2) {
        setTimeout(() => {
          this.loading = false;
          this.finished = true;
          this.list = ['', '', '', '', '', '', '', '', ''];
        }, 2000);
      }
      this.count += 1;
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/demo';
p {
  text-align: center;
}
.slide-load-head {
  margin: 10px $padding-sm 10px $padding-sm;
  height: 400px;
  background-color: #ffffff;
  border-radius: 4px;
}
.page-content-item {
  border-radius: 4px;
  margin: 0 $padding-sm 10px $padding-sm;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .page-content-item-line1 {
    margin-left: $padding-sm;
    width: 140px;
    height: 16px;
    background-color: #f4f5f7;
    margin-bottom: 10px;
    border-radius: 4px;
  }
  .page-content-item-line2 {
    margin-left: $padding-sm;
    width: 100px;
    height: 16px;
    background-color: #f4f5f7;
    border-radius: 4px;
  }
  .page-content-item-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
}
</style>
