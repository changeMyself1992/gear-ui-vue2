<template>
  <div class="notice-demo" clstag="8TAB|126798">
    <div class="title">普通公告</div>
    <gear-notice style="margin-bottom: 20px" type="primary" mode="closeable" @iconClick="iconClick" text="12月1日-31日,移动端单笔每还10000元送5元" >111111111111</gear-notice>
    <div v-show="show">
      <gear-notice style="margin-bottom: 20px" type="primary" mode="link" @iconClick="iconClick" :text="title" />
    </div>

    <gear-notice type="primary" text="12月1日-31日,移动端单笔每还10000元送5元"></gear-notice>

    <div class="title">警告公告</div>
    <gear-notice style="margin-bottom: 20px" type="warning" mode="closeable" @iconClick="iconClick" text="12月1日-31日,移动端单笔每还10000元送5元" />
    <gear-notice style="margin-bottom: 20px" type="warning" mode="link" @iconClick="iconClick" text="速率10秒钟滚动一屏，最后一个文字滚动到屏幕中央时下一遍从右侧开始滚入" />
    <gear-notice type="warning" text="12月1日-31日,移动端单笔每还10000元送5元" />

    <div class="title">紧急公告</div>
    <gear-notice style="margin-bottom: 20px" type="danger" mode="closeable" @iconClick="iconClick" text="12月1日-31日,移动端单笔每还10000元送5元" />
    <gear-notice style="margin-bottom: 20px" type="danger" mode="link" @iconClick="iconClick" text="速率10秒钟滚动一屏，最后一个文字滚动到屏幕中央时下一遍从右侧开始滚入" />
    <gear-notice type="danger" text="12月1日-31日,移动端单笔每还10000元送5元" />

    <div class="title">特殊公告样式</div>
    <div style="margin-bottom: 20px; background-color: #f53137; padding: 16px 0">
      <gear-notice
        mode="closeable"
        @iconClick="iconClick"
        customBackground="rgba(255,255,255,0.16)"
        customTxtColor="#FFFFFF"
        customIconColor="#FFFFFF"
        text="12月1日-31日,移动端单笔每还10000元送5元"
      />
    </div>
    <div style="margin-bottom: 20px; background-color: #ffa61d; padding: 16px 0">
      <gear-notice mode="link" @iconClick="iconClick" customBackground="rgba(255,255,255,0.16)" customTxtColor="#FFFFFF" customIconColor="#FFFFFF" text="12月1日-31日,移动端单笔每还10000元送5元" />
    </div>
    <div style="margin-bottom: 20px; background-color: #2c68ff; padding: 16px 0">
      <gear-notice customBackground="rgba(255,255,255,0.16)" customTxtColor="#FFFFFF" customIconColor="#FFFFFF" text="12月1日-31日,移动端单笔每还10000元送5元" />
    </div>
    <div style="margin-bottom: 60px; background-color: #ffe8d5; padding: 16px 0">
      <gear-notice mode="closeable" @iconClick="iconClick" customBackground="rgba(210,101,0,0.12)" customTxtColor="#CA6D3F" customIconColor="#CA6D3F" text="12月1日-31日,移动端单笔每还10000元送5元" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-notice',
  data() {
    return {
      title: '',
      show: false
    };
  },
  components: {},
  mounted() {
    setTimeout(() => {
      this.show = true;
      this.title = '速率10秒钟滚动一屏，最后一个文字滚动到屏幕中央时下一遍从右侧开始滚入';
    }, 500);

    // setTimeout(() => {
    //   this.title = '我要动态的改这个公告内容，公告内容发生改变要重置滚动逻辑，12月1日-31日,移动端单笔每还10000元送5元';
    // }, 8000);
  },
  methods: {
    iconClick(item) {
      if (item === 'closeable') {
        this.$toast('关闭图标点击', '#333');
      } else if (item === 'link') {
        this.$toast('跳转图标点击', '#333');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.notice-demo {
  background-color: #fff;
  .title {
    width: 100%;
    height: 53px;
    padding: 24px 0 0 $padding-sm;

    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: rgba(153, 153, 153, 1);
    box-sizing: border-box;
  }
}
</style>
