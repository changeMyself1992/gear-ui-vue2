<template>
  <div class="demo-overlay" clstag="V4C7|126802">
    <gear-button style="margin-top: 16px; font-weight: 600" class="btn1" @click="itemClick('1')"> 查看样式 </gear-button>

    <gear-overlay :show="show" @click="itemClick('2')">
      <!-- <div class="contents" @click.stop>这是内容</div> -->
    </gear-overlay>
  </div>
</template>

<script>
export default {
  name: 'demo-overlay',
  components: {},
  data() {
    return {
      show: false
    };
  },
  methods: {
    itemClick(inx) {
      if (inx === '1') {
        this.show = true;
        if (typeof window.parent.window.setShowMask === 'function') {
          window.parent.window.setShowMask(true);
        }
      } else {
        this.show = false;
        if (typeof window.parent.window.setShowMask === 'function') {
          window.parent.window.setShowMask(false);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.demo-overlay {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;

  .contents {
    width: 315px;
    height: 127px;
    background: white;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 127px;
    font-size: 16px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
}
</style>
