<template>
  <div
    class="swap"
    :class="{
      hasPadding: heightSlot > 400
    }"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
  >
    <div
      class="eidt-box"
      :class="{
        show: isShow,
        hide: isHide
      }"
    >
      <slot></slot>
    </div>
    <div v-show="showBtn" class="bar">
      <div @click="copyClick" title="点击复制" class="copy-btn"></div>
      <div :title="titleMsg" v-if="heightSlot > 400" :class="['swap-arrow', isShow ? 'swap-arrow-up' : 'swap-arrow-down']" @click="showall"></div>
      <!-- <svg width="20" viewBox="0,0 20,10">
        <path
          v-if="isShow"
          d="M 0,5 
                            L10,10 
                            L 20,5"
          fill="none"
          stroke="#000"
        />
        <path
          v-if="!isShow"
          d="M 0,5 
                            L10,0 
                            L 20,5"
          fill="none"
          stroke="#000"
        />
      </svg> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'HiddenBox',
  data() {
    return {
      siteHeight: {
        height: ''
      },
      isShow: true,
      isHide: false,
      //  盒子高度
      heightSlot: 0,
      titleMsg: '点击展开',
      showBtn: false
    };
  },
  props: {
    str: {
      type: String
    }
  },

  methods: {
    showall() {
      this.isShow = !this.isShow;
      this.isHide = !this.isHide;
      if (this.isHide) {
        this.siteHeight = { height: `${this.heightSlot}px` };
        this.titleMsg = '点击收起';
      } else {
        this.siteHeight = {
          height: '400px'
        };
        this.titleMsg = '点击展开';
      }
    },
    mouseenter() {
      // console.log('mouseenter');
      this.showBtn = true;
    },
    mouseleave() {
      // console.log('mouseleave');
      this.showBtn = false;
    },
    async copyClick() {
      const text = decodeURIComponent(this.str);
      if (navigator.clipboard) {
        // clipboard api 复制
        navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        // 隐藏此输入框
        textarea.style.position = 'fixed';
        textarea.style.clip = 'rect(0 0 0 0)';
        textarea.style.top = '10px';
        // 赋值
        textarea.value = text;
        // 选中
        textarea.select();
        // 复制
        document.execCommand('copy', true);
        // 移除输入框
        document.body.removeChild(textarea);
      }

      // console.log('复制')
      // window.copy && window.copy(decodeURIComponent(this.str));
      // console.log(decodeURIComponent(this.str));
      // const input = document.createElement('input');
      // input.setAttribute('readonly', 'readonly');
      // input.setAttribute('value', decodeURIComponent(this.str));
      // document.body.appendChild(input);
      // input.setSelectionRange(0, 99999);
      // input.focus()
      // input.select()
      // debugger
      // if (document.execCommand('copy')) {
      //   document.execCommand('copy');
      //   console.log('复制成功');
      // }
      // document.body.removeChild(input);
    }
  },
  mounted() {
    this.heightSlot = this.$slots.default[0].elm.offsetHeight;
    // console.log('code is');
    // console.log(decodeURIComponent(this.str));
    if (this.heightSlot < 400) {
      this.siteHeight = { height: '' };
    } else {
      this.siteHeight = { height: '300px' };
    }
  }
};
</script>
<style lang="scss" scoped>
.eidt-box {
  transition: all 0.5s;
}

.swap {
  position: relative;
  border-radius: 4px;
  background: #f2f4f5;
  margin: 16px 0;
}

.hasPadding {
  padding-bottom: 30px;
}

.show {
  overflow: hidden;
  position: relative;
  max-height: 400px;
}

.hide {
  position: relative;
  //   max-height: 10000px;
}

.bar {
  height: 60px;
  width: 100%;
  bottom: 0;
  background: linear-gradient(rgba(255, 255, 255, 0), #fafafa);
  position: absolute;
  z-index: 1;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    vertical-align: bottom;
  }

  margin-top: -60px;
}

.swap-arrow {
  width: 28px;
  height: 28px;
  background-image: url(https://img10.360buyimg.com/imagetools/jfs/t1/176960/33/29450/3146/636240e5Ed278d7f9/cc63ce22480264e0.png);
  margin: 8px;
  background-size: 100% 100%;
}

.copy-btn {
  width: 28px;
  height: 28px;
  background-image: url(https://img10.360buyimg.com/imagetools/jfs/t1/76634/4/22841/2545/636240e5Eebb3df91/faa87049311ed63a.png);
  margin: 8px;
  background-size: 100% 100%;
}

.swap-arrow-up {
  // background-color: green;
}

.swap-arrow-down {
  // background-color: black;
  transform: rotate(180deg);
}

</style>
