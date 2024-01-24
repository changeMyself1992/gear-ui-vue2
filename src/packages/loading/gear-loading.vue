<!--  -->
<template>
  <div v-show="visible" class="gear-loading">
    <div class="gear-loading__wrap" :class="{'gear-loading__con': !showMsg}">
      <div class="gear-loading__animation" ref="lottie">
        <div class="gear-loading__joy--box">
          <div class="gear-loading__joy--icon"></div>
          <div class="gear-loading__joy--body">
            <div class="gear-loading__joy--other">
              <div class="gear-loading__joy--eye gear-loading__joy--eye-l"></div>
              <div class="gear-loading__joy--eye gear-loading__joy--eye-r"></div>
              <div class="gear-loading__joy--nose"></div>
              <div class="gear-loading__joy--mouth"></div>
            </div>
          </div>
        </div>
      </div>
      <p v-if="showMsg" class="gear-loading__text">{{message}}</p>
    </div>
  </div>
</template>

<script>
// import lottie from 'lottie-web'
// import joyJson from './joy-animation.json'
export default {
  name: 'Loading',
  data () {
    return {
      visible: false
    }
  },
  props: {
    message: {
      type: String,
      default: '正在加载'
    },
    showMsg: {
      type: Boolean
    }
  },
  mounted () {
    // lottie.loadAnimation({
    //   container: this.$refs.lottie,
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   animationData: joyJson
    // })
  }
}
</script>
