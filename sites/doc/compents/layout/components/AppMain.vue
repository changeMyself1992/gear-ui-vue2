<template>
  <el-scrollbar :class="['app-main']" wrap-class="scrollbar-main" ref="scrollbar">
    <section>
      <transition name="fade-transform" mode="out-in">
        <keep-alive :max="15">
          <router-view :key="key" :class="['doc-cont', showDemo && 'doc-cont__showDemo', designLanguageClass, updateLogClass]" />
        </keep-alive>
      </transition>
      <div v-if="showFoot" class="foot">
        Copyright © {{ stratYear }}~{{ endYear }}
        <span>京东金融 UDC & 平台研发部</span>
      </div>

      <div v-if="showDemo" class="showPhone">
        <div class="ph">
          <div class="bg" :style="bgStyle">
            <img class="img1" :src="img1Url" alt />
            <div class="router-name" :style="chnNameStyle">{{ chnName }}</div>
            <div class="img2" :style="backStyle" @click="backClick"></div>
            <div v-if="showMask" class="mask"></div>
          </div>
          <iframe style="border: none" :src="demourl + '/' + routerName + '?ver=' + version" name="childrenName"></iframe>
        </div>
        <img class="ph-img" src="https://img13.360buyimg.com/imagetools/jfs/t1/219460/19/29170/5719/64536c35Fc00ee902/b494dc475811d63b.png" />
        <div class="qr-code">
          <img :class="demoReload ? 'refresh' : ''" :src="'https://img12.360buyimg.com/imagetools/jfs/t1/138992/28/29864/2057/63369bd5E57af3293/084c694289c4609b.png'" @click="reloadClick" />
          <img
            class="total-qrcode"
            :src="'https://img13.360buyimg.com/imagetools/jfs/t1/75653/23/22342/883/63369c7dEe0276816/e8c461916d9bbb2c.png'"
            @mouseover="
              event => {
                this.handleMouseover('1');
              }
            "
            @mouseleave="handleMouseleave"
          />
          <img
            class="cur-qrcode"
            :src="'https://img13.360buyimg.com/imagetools/jfs/t1/119718/36/20054/495/63369c7dE234e53e6/942479e1bddf7fbd.png'"
            @mouseover="
              event => {
                this.handleMouseover('2');
              }
            "
            @mouseleave="handleMouseleave"
          />
          <div class="show-qr-code">
            <span>{{ mode === '1' ? '手机端总码' : '手机端当前组件码' }}</span>
            <img :src="mode === '1' ? codeurl : curCodeurl" alt="" />
          </div>
        </div>
      </div>
    </section>
  </el-scrollbar>
</template>

<script>
import { demoUrl } from '../../../asset/js/utils';
import { version } from '../../../../../package.json';

export default {
  name: 'AppMain',
  data() {
    return {
      version,

      codeurl: '', // 总码
      curCodeurl: '', // 当前组件二维码，
      mode: '',
      demourl: demoUrl,
      stratYear: new Date().getFullYear() - 1,
      endYear: new Date().getFullYear(),

      chnName: '',
      backStyle: {
        display: 'none'
      },
      bgStyle: {},
      chnNameStyle: {},
      img1Url: 'https://img11.360buyimg.com/imagetools/jfs/t1/69271/24/19791/5016/62bbef12E1b507183/de5f160d9901fbba.png',
      showMask: false,
      // 是否正在刷新demo
      demoReload: false,
      // 点击demo时记录时间戳
      startReloadTime: 0
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
    showDemo() {
      if (this.$route && this.$route.meta && this.$route.meta.showDemo) return true;

      return false;
    },
    // 是否是设计语言路由（设计文档要求定制样式..）
    designLanguageClass() {
      if (this.$route && this.$route.path.includes('design-language')) return `design-language-doc ${this.$route.name}`;
      return '';
    },
    // 更新日志 按设计要求也要定制样式....
    updateLogClass() {
      if (this.$route && this.$route.path.includes('update-log')) return 'updateLog';
      return '';
    },

    showFoot() {
      if (this.$route && this.$route.meta && this.$route.meta.showFoot) return true;

      return false;
    },
    routerName() {
      if (this.$route && this.$route.name) return this.$route.name;
      return '';
    }
  },
  watch: {
    $route: {
      handler(newVal, oldVal) {
        if (this.showDemo) {
          this.fetchData(newVal);
        }
      },
      immediate: true
    },

    key() {
      // 路由切换完成后 Y轴滚动条重新计算一下
      if (this.$refs && this.$refs.scrollbar && typeof this.$refs.scrollbar.update === 'function') {
        setTimeout(() => {
          this.$refs.scrollbar.update();
        }, 600);
      }
    }
  },
  created() {
    window.setChnName = name => {
      this.chnName = name;
    };
    window.setBackStyle = style => {
      this.backStyle = style;
    };
    window.setBgStyle = style => {
      this.bgStyle = style;
    };
    window.setChnNameStyle = style => {
      this.chnNameStyle = style;
    };
    window.setImg1Url = url => {
      this.img1Url = url;
    };
    window.setShowMask = show => {
      this.showMask = show;
    };
    window.initStyle = () => {
      this.backStyle = {
        display: 'none',
        'background-image': 'url(\'https://img10.360buyimg.com/imagetools/jfs/t1/182863/9/26795/1612/62bbc0e5E693912c9/cd5bd4ea86ad8b82.png\')'
      };
      this.bgStyle = {};
      this.chnNameStyle = {};
      this.img1Url = 'https://img11.360buyimg.com/imagetools/jfs/t1/69271/24/19791/5016/62bbef12E1b507183/de5f160d9901fbba.png';
      this.showMask = false;
    };
    //  监听demo 加载结束事件
    window.demoWindowOnload = () => {
      if (this.demoReload) {
        console.log('demo 加载完成');
        const curTime = new Date().getTime();
        const timeDifference = curTime - this.startReloadTime;
        if (timeDifference >= 1000) {
          this.demoReload = false;
        } else {
          setTimeout(() => {
            this.demoReload = false;
          }, 1000 - timeDifference);
        }
      }
    };

    // 监听拷贝事件，进行埋点上报
    document.addEventListener('copy', e => {
      console.log('监听到copy事件', this);
      if (this.$route && this.$route.meta && this.$route.meta.showDemo) { /* empty */ }
    });
  },
  methods: {
    reloadClick() {
      this.demoReload = true;
      this.startReloadTime = new Date().getTime();
      window.childrenName.window.location.reload();
    },
    handleMouseover(mode) {
      this.mode = mode;
    },
    handleMouseleave(event) {
      this.mode = '';
    },

    fetchData(obj) {
      const that = this;
      this.qrcode.toDataURL(`${demoUrl}/index`, { width: 240 }, (err, url) => {
        console.log('codeurl:', `${demoUrl}/index`);
        that.codeurl = url;
      });
      this.qrcode.toDataURL(`${demoUrl}/${obj.name}`, { width: 240 }, (err, url) => {
        console.log('curCodeurl:', `${demoUrl}/${obj.name}`);
        that.curCodeurl = url;
      });
    },

    backClick() {
      window.childrenName.window.backRoute();
    }
  }
};
</script>

<style lang="scss" scoped>
.app-main {
  box-sizing: border-box;
  height: 100%;
  width: calc(100vw - 240px);
  position: relative;
  left: 240px;
}

.doc-cont {
  padding-left: 43px;
  padding-top: 44px;
  padding-right: 35px;
  min-height: calc(100vh - 80px - 44px - 88px - 60px);
  &__showDemo {
    padding-right: 366px;
  }
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.foot {
  height: 88px;
  background: black;
  border-radius: 3px;

  font-size: 14px;
  font-family: PingFangHK-Regular;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  line-height: 88px;
  box-sizing: border-box;
  margin-top: 60px;
}

.showPhone {
  position: fixed;
  // z-index: 100;
  width: 280px;
  height: 542px;
  top: 135px;
  background-color: #f4f5f7;
  border-radius: 43px;
  right: 43px;
  .ph {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 30;
    height: 532px;
    width: 268px;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 30px;
    .bg {
      position: relative;
      width: 100%;
      height: 66px;
      background: transparent;
      text-align: center;
      box-sizing: border-box;
      .img1 {
        width: 100%;
      }
      .img2 {
        width: 33px;
        height: 33px;
        position: absolute;
        left: 0;
        bottom: -1px;
        background-image: url('https://img10.360buyimg.com/imagetools/jfs/t1/182863/9/26795/1612/62bbc0e5E693912c9/cd5bd4ea86ad8b82.png');
        background-size: 100% 100%;
      }
      .mask {
        position: absolute;
        z-index: 1000;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
      }
      .router-name {
        font-size: 13px;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: #333333;
        position: absolute;
        width: 100%;
        bottom: 10px;
      }
    }
    iframe {
      width: calc(268px * 2);
      height: calc((532px - 66px) * 2);
      padding: 0;
      box-sizing: border-box;
      vertical-align: bottom;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) scale(0.5);
      // - ((532px - 66px) / 2 - 66px)
      top: -167px;
    }
  }
  .ph-img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 40;
    pointer-events: none;
  }
  .qr-code {
    position: absolute;
    bottom: -70px;
    left: 50%;
    transform: translateX(-50%);
    width: 102px;
    height: 31px;
    background: white;
    border: 1px solid #e6e6e6;
    border-radius: 31px;
    z-index: 40;
    display: flex;
    padding: 4px 10px;
    justify-content: space-evenly;
    box-sizing: border-box;
    .total-qrcode,
    .cur-qrcode {
      cursor: pointer;
      &:hover ~ .show-qr-code {
        display: flex;
      }
    }

    .refresh {
      animation: fadenum 1s linear infinite;
    }
    @keyframes fadenum {
      100% {
        transform: rotate(360deg);
      }
    }

    .show-qr-code {
      position: absolute;
      top: -261px;
      left: 50%;
      width: 250px;
      height: 266px;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translateX(-50%);

      background: url('https://img10.360buyimg.com/imagetools/jfs/t1/113552/15/32283/1898/63fc6ebcF3d355d4b/93de64d654eb3cc8.png') no-repeat;
      background-size: 100% 100%;
      span {
        position: relative;
        top: 5px;
      }
      img {
        width: 200px;
        height: 200px;
      }
    }
  }
}
</style>

<style>
.scrollbar-main {
  overflow-x: hidden !important;
}
</style>
