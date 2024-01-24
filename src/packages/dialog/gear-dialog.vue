<template>
  <gear-overlay class="gear-dialog-box" :show="showAlert" @click="shadowBoxClick" :lock-scroll="lockScroll">
    <transition name="fade" appear>
      <div class="gear-dialog" :style="dialogStyle">
        <span v-if="iconClosePro" class="iconfont icon-close-2 iconClose" @click="iconClose"></span>
        <div class="gear-dialog-inner">
          <div v-if="title" :class="['title', title.length >= 14 && 'title-size1']">{{ title }}</div>
          <div v-if="content" class="gear-dialog-content" v-html="content"></div>
        </div>

        <div :class="['gear-dialog-btns', btns.length > 1 && 'gear-dialog-btns--double']" :style="btnBoxStyle">
          <gear-button v-for="(btn, index) in btns" :key="index" :class="['gear-dialog-btn', btns.length > 1 && 'btn-double', btns.length === 1 && 'btn-one']" :type="btn.type" @click="btnsArg(btn)">
            {{btn.text}}
          </gear-button>
        </div>
      </div>
    </transition>
  </gear-overlay>
</template>
<script>
import Button from '../button/index';
import Overlay from '../overlay/index';

export default {
  name: 'gear-dialog',
  components: {
    'gear-button': Button,
    'gear-overlay': Overlay
  },

  props: {
    // 点击背景板能否关闭
    unClickBg: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    // 按钮盒子样式对象
    btnBoxStyle: {
      type: Object,
      default: () => ({})
    },
    // 是否展示关闭图标
    iconClosePro: {
      type: Boolean,
      default: false
    },
    dialogStyle: {
      type: Object,
      default: () => ({})
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showAlert: true,
      btns: []
    };
  },
  computed: {},
  methods: {
    // 关闭整个窗口
    _clearWin() {
      this.showAlert = false;
    },
    btnsArg(btn) {
      this._clearWin();
      if (btn.cbFun) {
        btn.cbFun();
      }
    },
    shadowBoxClick() {
      if (this.unClickBg) {
        this._clearWin();
      }
    },
    iconClose() {
      // 点击关闭图标
      this._clearWin();
    }
  }
};
</script>
