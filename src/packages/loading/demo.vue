<template>
  <div class="gear-loading-demo" clstag="0GE6|126789">
    <div class="section-title"></div>
    <gear-button @click="btn1Click" :class="btn1.class">{{ btn1.name }}</gear-button>
    <gear-button @click="btn2Click" :class="btn2.class">{{ btn2.name }}</gear-button>
  </div>
</template>

<script>
export default {
  name: 'LoadingDemo',
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
        this.count -= 1;
        this.btn1.name = `还剩${this.count}秒消失`;
        if (this.count === 0) {
          this.btn1.class = 'btn1';
          this.btn1.name = '有文字信息';
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
        this.count -= 1;
        this.btn2.name = `还剩${this.count}秒消失`;
        if (this.count === 0) {
          this.btn2.class = 'btn1';
          this.btn2.name = '无文字信息';
          this.$loading.close();
          this.timer && clearTimeout(this.timer);
        }
      }, 1000);
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/demo';
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
