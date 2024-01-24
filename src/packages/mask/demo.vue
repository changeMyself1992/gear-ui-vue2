<template>
  <div class="mask-demo">
    <gear-button style="margin-top: 16px; font-weight: 600" class="btn1" @click="itemClick('1')"> 查看样式 </gear-button>

    <div v-if="maskDemo">
      <transition name="fade-mask" appear>
        <gear-mask @onClick="itemClick('3')">
          <div class="contents">这是内容</div>
        </gear-mask>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-mask',
  data() {
    return {
      maskDemo: false
    };
  },
  components: {},
  methods: {
    itemClick(inx) {
      if (inx === '1') {
        this.maskDemo = true;
        if (typeof window.parent.window.setShowMask === 'function') {
          window.parent.window.setShowMask(true);
        }
      } else {
        this.maskDemo = false;
        if (typeof window.parent.window.setShowMask === 'function') {
          window.parent.window.setShowMask(false);
        }
      }
    }
  }
};
</script>


<style scoped>
.mask-demo {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;
}
.mask-demo .contents {
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

.mask-demo .fade-mask-enter-active {
  animation: gear-dialogBgIn 0.3s 0s ease both;
}

@-webkit-keyframes gear-dialogBgIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
