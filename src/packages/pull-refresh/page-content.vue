<template>
  <div class="page-content">
    <div class="page-content-head" @click="onClick">拖拽下拉查看效果</div>
    <div class="page-content-item" v-for="(item, i) in new Array(4).fill('')" :key="i">
      <div class="page-content-item-line1"></div>
      <div class="page-content-item-line2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageContent',
  methods: {
    onClick() {
      console.log('子元素点击事件');
    }
  }
};
</script>

<style lang="scss" scope>
@import '../../assets/css/demo';
.page-content {
  padding: 0 $padding-sm 10px $padding-sm;
  .page-content-head {
    height: 400px;
    background-color: #ffffff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .page-content-item {
    height: 70px;
    margin-bottom: 10px;
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
  }
}
</style>
