<template>
  <el-scrollbar ref="scrollbar">
    <div class="gear-home" clstag="04S8|126252">
      <div class="gear-home-bg"></div>
      <div class="gear-description-content">
        <div class="gear-description">
          <div class="gear-description-left">
            <div class="gear-description-left-icon"></div>
            <div class="gear-description-left-des">帮助设计师与开发者实现团队高效协作的产品设计体系</div>
            <div class="gear-description-left-btn" @click="getStart">
              <div class="gear-description-left-btn-icon"></div>
              开始使用
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div class="gear-description-content">
        <div class="gear-targets">
          <div v-for="(item, index) in targets" :key="'target-' + index" class="gear-targets-item">
            <div class="gear-targets-item-icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
            <div class="gear-targets-item-right">
              <div class="gear-targets-item-right-title">{{ item.title }}</div>
              <div class="gear-targets-item-right-des">{{ item.des }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="gear-design-content" :style="`height: ${656 * 5}px;width: 100%;`">
        <div class="gear-design">
          <transition name="design-video-fade" mode="out-in">
            <div class="gear-design-left" :key="'gear-design-left' + designSelected">
              <video
                class="gear-design-left-video"
                :key="'gear-design-left-' + designSelected"
                :src="designSelectItem.video"
                poster=""
                preload="auto"
                muted=""
                loop=""
                autoplay=""
                playsinline=""
                webkit-playsinline=""
                x5-playsinline=""
                x5-video-player-type="h5"
                x-webkit-airplay="allow"
                x5-video-orientation="portrait"
                t7-video-player-type="inline"
              ></video>
            </div>
          </transition>
          <div class="gear-design-right">
            <div class="gear-design-right-tabs">
              <div
                v-for="(item, index) in designTabs"
                :class="{ 'gear-design-right-tabs-item': true, 'gear-design-right-tabs-item-selected': index == designSelected }"
                :style="index == designSelected ? '::after{background-color: #000;}' : ''"
                @click="designTabClick(index)"
                :key="'gear-design-' + index"
              >
                <div class="gear-design-right-tabs-item-icon" v-if="index == designSelected" :style="{ backgroundImage: `url(${item.icon})` }"></div>
                {{ item.name }}
              </div>
            </div>
            <transition name="slide-up" mode="out-in">
              <div class="gear-design-content" :key="designSelected">
                <div class="gear-design-title">
                  {{ designSelectItem.title[0] }}<span :style="{ color: designSelectItem.color }">{{ designSelectItem.title[1] }}</span
                  >{{ designSelectItem.title[2] }}
                </div>
                <div class="gear-design-des">{{ designSelectItem.des }}</div>
                <div class="gear-design-btn" :style="{ color: designSelectItem.color }" @click="toStay">
                  了解设计
                  <div class="gear-design-btn-icon" :style="{ backgroundImage: `url(${designSelectItem.btnIcon})` }"></div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <div class="gear-code-bg">
        <div class="gear-code">
          <div :class="'gear-code-left ' + codeClass">
            <div class="gear-design-title">安全、可靠的开发资源，灵活易用</div>
            <div class="gear-design-des">基于京东金融APP设计语言持续迭代开发，提供封装好的前端代码，帮助开发者高效构建页面，避免重造</div>
          </div>
          <div class="gear-code-right"></div>
        </div>
      </div>

      <div class="gear-experience">
        <div class="gear-experience-title">现在就去体验吧</div>
        <div class="gear-experience-cards">
          <div
            class="gear-experience-cards-item"
            v-for="(item, index) in exprienceData"
            :style="{ background: item.background }"
            :key="'gear-experience-cards-item-' + index"
            @click="startExperience(index)"
          >
            <div class="gear-experience-cards-item-arrow"></div>
            <div class="gear-experience-cards-item-title">{{ item.title }}</div>
            <div class="gear-experience-cards-item-des">{{ item.des }}</div>
            <div class="gear-experience-cards-item-resource">
              <div class="gear-experience-cards-item-icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
              {{ item.iconName }}
            </div>
          </div>
        </div>
      </div>

      <div class="gear-footer">
        <div class="gear-gooter-content">
          <div class="gear-footer-left">
            <div class="gear-footer-left-title">京东金融 APP UI 设计系统</div>
            <div class="gear-footer-left-des">京东金融 UDC & 平台研发部 | Copyright ⓒ 2022 京东科技版权所有</div>
          </div>
          <div class="gear-footer-right">
            <div class="gear-footer-right-content" v-for="(item, index) in footerData" :key="'gear-footer-right-content-' + index">
              <div class="gear-footer-right-content-title">{{ item.title }}</div>
              <div class="gear-footer-right-content-erp" v-for="(sub, subIndex) in item.content" :key="'gear-footer-right-content-erp-' + subIndex" @click="lintTo(sub)">
                {{ sub.name || sub.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'home-page',
  components: {},
  data: () => ({
    targets: [
      {
        title: '体验',
        des: '规范App设计使用原则，确保体验一致性和品牌认知感',
        icon: 'https://static-ftcms.jd.com/p/files/64f6d28622e7430b5497f470.png'
      },
      {
        title: '效率',
        des: '通过组件库调用，减少设计师、产研的沟通成本，提升开发效率',
        icon: 'https://static-ftcms.jd.com/p/files/64f6d29bbedd6aeee630f3c2.png'
      },
      {
        title: '协同',
        des: '针对业务的场景扩充，组件完善，实现全链路、多场景的高效协同',
        icon: 'https://static-ftcms.jd.com/p/files/64f6d29bb3d2080174d0a687.png'
      },
      {
        title: '资源',
        des: '下载相关资源，快速搭建页面原型或视觉稿，提升产品设计效率',
        icon: 'https://static-ftcms.jd.com/p/files/64f6d2a622e7430b5497f472.png'
      }
    ],
    designTabs: [
      {
        name: '间距',
        icon: 'https://static-ftcms.jd.com/p/files/64f6d2c8bedd6aeee630f3c3.png',
        color: '#EF4034',
        title: ['专业、合理的', '间距设计', '，让布局具备层次感'],
        des: '通过制定间距规范，实现合理的间距阶梯，使各用户可以轻松感知页面的信息层级',
        btnIcon: 'https://static-ftcms.jd.com/p/files/64f6d2ecef3d47404ece3b0a.png',
        video: '//storage.360buyimg.com/upss/jjvideo.mp4',
        routerName: 'space-between'
      },
      {
        name: '色彩',
        icon: 'https://static-ftcms.jd.com/p/files/64f6d2c822e7430b5497f473.png',
        color: '#CA7320',
        title: ['京东金融App', '色彩体系', ' 满足不同业务的使用场景'],
        des: '通过品牌色、辅助色和中性色的运用，快速构建符合产品基调的色彩主题，传达品牌精神，强化界面层级',
        btnIcon: 'https://static-ftcms.jd.com/p/files/64f6d2ecef3d47404ece3b0b.png',
        video: '//storage.360buyimg.com/upss/gear/%E5%88%86%E9%95%9C3-%E8%89%B2%E5%BD%A95.mp4',
        routerName: 'color'
      },
      {
        name: '字体',
        icon: 'https://static-ftcms.jd.com/p/files/64f6d2d7bedd6aeee630f3c4.png',
        color: '#3E5CD7',
        title: ['科学的', '字体系统', '，让情感与效率在界面中并存'],
        des: '我们设计了UDC字体，包含字族、字号、字重；简洁的非衬线体帮助创建清晰的信息层次与节奏，高效的呈现设计与内容并提升产品体验',
        btnIcon: 'https://static-ftcms.jd.com/p/files/64f6d2f8bedd6aeee630f3c7.png',
        video: '//storage.360buyimg.com/upss/gear/%E5%88%86%E9%95%9C2-%E5%AD%97%E4%BD%93_1.mp4',
        routerName: 'font'
      },
      {
        name: '圆角',
        icon: 'https://static-ftcms.jd.com/p/files/64f6d2e2bedd6aeee630f3c5.png',
        color: '#F75C38',
        title: ['圆润舒适的', '圆角设计', '，凸显安全感与亲和感'],
        des: '京东金融App制定了六个层级的圆角，在界面中不同的圆角可以让用户感知到功能的区分，让界面与产品属性更贴合',
        btnIcon: 'https://static-ftcms.jd.com/p/files/64f6d2f8b3d2080174d0a689.png',
        video: '//storage.360buyimg.com/upss/gear/%E5%88%86%E9%95%9C4-%E5%9C%86%E8%A7%92.mp4',
        routerName: 'rounded-corner'
      }
    ],
    designSelected: 0,
    exprienceData: [
      {
        title: 'Hi 设计师',
        des: '了解京东金融App的设计准则，这里有包括全局色彩、文字、图标和布局的指南',
        icon: 'https://static-ftcms.jd.com/p/files/64f6d301bedd6aeee630f3c8.png',
        iconName: 'Sketch App 组件库',
        background: 'linear-gradient(178.76deg, rgba(228,22,8,1) 0%,rgba(241,51,39,1) 100%)'
      },
      {
        title: 'Hi 工程师',
        des: '组件使用便捷，按需加载，可通过组件的Demo体验交互细节，开发中既可整体引用也可根据需求单独引用',
        icon: 'https://static-ftcms.jd.com/p/files/64f6d30fef3d47404ece3b0c.png',
        iconName: 'App 组件代码库',
        background: 'linear-gradient(178.76deg, rgba(19,25,32,1) 0%,rgba(27,34,43,1) 100%)'
      }
    ],
    footerData: [
      {
        title: '联系我们',
        content: [
          {
            name: '咚咚群：10200149425',
            erps: '10200149425'
          },
          {
            name: '金来强：jinlaiqiang',
            erp: 'jinlaiqiang'
          },
          {
            name: '郝梁：haoliang6',
            erp: 'haoliang6'
          },
          {
            name: '孟浩：ext.menghao1',
            erp: 'ext.menghao1'
          },
          {
            name: '杨志远：yangzhiyuan24',
            erp: 'yangzhiyuan24'
          },
          {
            name: '杨宗宇：yangzongyu3',
            erp: 'yangzongyu3'
          }
        ]
      },
      {
        title: '友情链接',
        content: [
          {
            title: '神工数智',
            url: 'http://sg.jd.com'
          },
          {
            title: 'UDC-Design',
            url: 'https://findesign.jd.com'
          },
          {
            title: 'FIN-Design',
            url: 'http://find.jdfmgt.com'
          },
          {
            title: 'JDD-Design',
            url: 'http://jdd-design.jd.com'
          }
        ]
      }
    ],

    codeAniShow: false,
    codeClass: ''
  }),
  mounted() {
    if (this.$refs.scrollbar && this.$refs.scrollbar.$refs && this.$refs.scrollbar.$refs.wrap) {
      this.$refs.scrollbar.$refs.wrap.addEventListener('scroll', this.handleWrapscroll);
    }
  },
  computed: {
    designSelectItem() {
      return this.designTabs[this.designSelected];
    }
  },
  watch: {},
  methods: {
    designTabClick(index) {
      this.designSelected = index;
    },
    getStart() {
      this.$router.push({ name: 'jrui-component' });
    },
    startExperience(index) {
      if (index == 0) {
        this.$router.push({ name: 'icon-library' });
      } else if (index == 1) {
        this.getStart();
      }
    },
    lintTo(item) {
      if (item.url) {
        location.href = item.url;
      } else if (item.erp) {
        location.href = `timline://chat/?topin=${item.erp}`;
      } else if (item.erps) {
        location.href = `timline://chat/?topin=${item.erps}&type=2`;
      }
    },
    toStay() {
      this.$router.push({ name: this.designTabs[this.designSelected].routerName });
    },

    handleWrapscroll(e) {
      const scrollY = this.$refs.scrollbar.$refs.wrap.scrollTop;
      const top = 1108;
      if (scrollY > top) {
        const index = Math.min(parseInt((scrollY - top) / 656, 10), 3);
        this.designSelected = index;
      } else {
        this.designSelected = 0;
      }
      if (scrollY > 3810 && !this.codeAniShow) {
        this.codeAniShow = true;
        this.codeClass = 'gear-code-left-ani';
      }
      this.showHeaderLine = scrollY > 10;
    }
  }
};
</script>

<style lang="scss">
.gear-home {
  min-width: 1440px;
  height: calc(100vh - 80px);
  background-color: #ffffff;
  position: relative;
}

.gear-home-bg {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 838px;
  background-image: url(https://img11.360buyimg.com/imagetools/jfs/t1/88011/21/25626/834827/63b43433Fafc95e7f/f7d632134abf6c47.png);
  background-size: auto 100%;
  background-position: right;
  background-repeat: no-repeat;
  position: absolute;
  top: -80px;
  background-color: #ffffff;
  right: 0;
  text-align: right;
}
.gear-header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 9999;

  .gear-header-content {
    display: flex;
    padding: 0 120px;
    box-sizing: border-box;
  }

  .gear-header-left {
    display: flex;
    align-items: center;
    height: 80px;
    cursor: pointer;
    .gear-header-left-icon {
      height: 36px;
      width: 36px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    .gear-header-left-title {
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      margin-left: 12px;
      font-size: 18px;
    }
  }
}

.gear-home-line {
  border-bottom: 1px solid #eeeeee;
}

.gear-description-content {
  position: relative;
  z-index: 10;
  width: 1440px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  margin: 0 auto;
}
.gear-description {
  display: flex;
  max-width: 1440px;
  padding: 80px 120px 70px;
  .gear-description-left {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 570px;
    margin-top: 30px;
    margin-bottom: 20px;
    transition: transform 0.3s;

    .gear-description-left-icon {
      width: 371px;
      height: 128px;
      background-image: url(https://img13.360buyimg.com/imagetools/jfs/t1/53106/12/20417/27189/63b4320aF704e293d/1460cfc4ffc2078f.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transform: translateY(0px);
      transition: transform 0.3s;
    }

    .gear-description-left-des {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 300;
      color: #999999;
      margin-top: 38px;
      transform: translateY(0px);
      transition: transform 0.3s;
    }

    .gear-description-left-btn {
      width: 148px;
      height: 52px;
      background: #000000;
      border-radius: 41px;
      box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-family: PingFang SC;
      color: rgba(255, 255, 255, 1);
      margin-top: 40px;
      cursor: pointer;

      .gear-description-left-btn-icon {
        position: relative;
        width: 14px;
        height: 13px;
        margin-right: 8px;
      }

      .gear-description-left-btn-icon:after,
      .gear-description-left-btn-icon:before {
        position: absolute;
        transition: all 0.25s ease-out;
      }

      .gear-description-left-btn-icon:before {
        content: '';
        width: 8px;
        height: 8px;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        box-sizing: border-box;
        transform: rotate(135deg);
        left: -2px;
        top: 50%;
        margin-top: -4px;
      }

      .gear-description-left-btn-icon:after {
        content: '';
        width: 6px;
        height: 2px;
        background-color: #fff;
        right: 0;
        bottom: 0;
      }
      &:hover .gear-description-left-btn-icon:before {
        left: 6px;
      }

      &:hover .gear-description-left-btn-icon:after {
        right: 1px;
        width: 7px;
        bottom: 5.5px;
      }

      &:hover {
        background-color: #f53138;
      }
    }
  }

  .gear-description-left:hover .gear-description-left-icon,
  .gear-description-left:hover .gear-description-left-des {
    transform: translateY(-20px);
    transition: transform 0.3s;
  }

  @keyframes deshover {
    0% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(-20px);
    }
  }

  .gear-description-right {
    width: 630px;
    height: 488px;
    margin-top: -80px;
  }
}

.gear-targets {
  display: flex;
  flex-direction: row;
  width: 1440px;
  backdrop-filter: blur(10px);
  height: 352px;
  background: rgba(153, 153, 153, 0.04);
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 34px;
  box-shadow: 0 2px 30px 0 rgba(58, 0, 0, 0);
  margin: 0 120px;
  box-sizing: border-box;
  justify-content: space-around;

  .gear-targets-item {
    padding-top: 80px;
    width: 200px;
    border-radius: 16px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    &:not(:last-child) :after {
      content: ' ';
      width: 1px;
      height: 182px;
      position: absolute;
      background-color: #00000002;
      top: 80px;
      right: -38px;
    }

    .gear-targets-item-icon {
      width: 60px;
      height: 60px;
      background-size: 54% 54%;
      background-position: 50% 50%;
      background-color: #ffffff;
      background-repeat: no-repeat;
      border-radius: 12px;
      margin-bottom: 28px;
      border-radius: 12px;
      box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.07);
    }

    .gear-targets-item-right {
      flex: 1;
      .gear-targets-item-right-title {
        font-size: 24px;
        font-family: FZLTZHK;
        font-weight: normal;
        color: rgba(0, 0, 0, 1);
      }

      .gear-targets-item-right-des {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.75);
        margin-top: 10px;
        line-height: 24px;
      }
    }
  }
}

.gear-design,
.gear-code {
  width: 100%;
  height: 656px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;

  .gear-design-left {
    width: 670px;
    height: 516px;

    .gear-design-left-video {
      width: 100%;
      height: 100%;
      border-radius: 40px;
      overflow: hidden;
    }

    margin-right: 68px;
    margin-top: -70px;
  }

  .gear-design-right {
    display: flex;
    flex-direction: column;
    margin-top: -102px;

    .gear-design-right-tabs {
      display: flex;
      flex-direction: row;
      height: 66px;
      align-items: center;

      .gear-design-right-tabs-item {
        margin-right: 24px;
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: normal;
        color: rgba(153, 153, 153, 1);
        cursor: pointer;
      }

      .gear-design-right-tabs-item-selected {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        display: flex;
        align-items: center;
        width: 126px;
        height: 66px;
        background: #f7f8fa;
        border-radius: 43px;
        justify-content: center;

        .gear-design-right-tabs-item-icon {
          width: 24px;
          height: 24px;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          margin-right: 6px;
        }
      }
    }
  }

  .gear-design-title {
    width: 446px;
    font-size: 40px;
    font-family: PingFang SC;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin-top: 48px;
    line-height: 60px;
  }

  .gear-design-des {
    width: 446px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: normal;
    color: rgba(153, 153, 153, 1);
    margin-top: 30px;
    line-height: 24px;
  }

  .gear-design-btn {
    margin-top: 70px;
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 600;
    color: rgba(202, 115, 32, 1);
    display: flex;
    align-items: center;
    cursor: pointer;

    .gear-design-btn-icon {
      width: 40px;
      height: 8px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-left: 14px;
      cursor: pointer;
    }
  }

  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.6s ease-out;
  }

  .slide-up-enter {
    opacity: 0;
    transform: translateY(80px);
  }

  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-80px);
  }

  .design-video-fade-enter-active,
  .design-video-fade-leave-active {
    transition: all 0.8s ease-out;
  }

  .design-video-fade-enter {
    opacity: 0;
  }

  .design-video-fade-leave-to {
    opacity: 0;
  }
}

.gear-design {
  position: sticky;
  top: 0px;
  height: 100vh;
  display: flex;
  align-items: center;
}

.gear-code-bg {
  width: 100%;
  background-color: #f7f8fa;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gear-code {
  max-width: 1440px;
  height: 576px;
  display: flex;
  margin-top: 160px;
  justify-content: space-between;
  background-color: #f7f8fa;
  .gear-code-left {
    display: flex;
    flex-direction: column;
    padding-left: 120px;
    position: sticky;
    top: 50px;
    margin-top: 160px;
    opacity: 0;
  }

  .gear-code-left-ani {
    transform: translateY(-160px);
    transition: transform 1s;
    opacity: 1;
  }

  .gear-code-right {
    width: 877px;
    height: 655px;
    margin-top: -120px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(https://img12.360buyimg.com/imagetools/jfs/t1/218345/17/22388/828507/636e1e34E7b51f25e/365818798bf93bf3.png);
  }
}

.gear-experience {
  width: 100%;
  height: 450px;
  background-color: #ffffff;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .gear-experience-title {
    font-size: 40px;
    font-family: PingFang SC;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    padding-left: 120px;
    margin-bottom: 40px;
    width: 1440px;
    box-sizing: border-box;
  }

  .gear-experience-cards {
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    cursor: pointer;

    .gear-experience-cards-item {
      border-radius: 24px;
      width: 590px;
      height: 245px;
      padding: 28px 40px 0;
      box-sizing: border-box;
      margin-right: 20px;
      transform: translateY(0);
      transition: transform 0.2s;
      position: relative;
    }
    .gear-experience-cards-item:last-child {
      margin-right: 0;
    }

    .gear-experience-cards-item:hover {
      transform: translateY(-8px);
      transition: transform 0.2s;
    }

    .gear-experience-cards-item-title {
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }

    .gear-experience-cards-item-des {
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: normal;
      color: rgba(255, 255, 255, 1);
      margin-top: 10px;
      width: 362px;
    }

    .gear-experience-cards-item-resource {
      width: 215px;
      height: 62px;
      opacity: 20;
      margin-top: 30px;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
      }
      .gear-experience-cards-item-icon {
        width: 38px;
        height: 38px;
        background-size: 80% 80%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        margin: 12px;
        background-color: #ffffff;
        border-radius: 8px;
      }
    }

    .gear-experience-cards-item-arrow {
      position: absolute;
      top: 60px;
      right: 40px;
      width: 80px;
      height: 38px;
      background-image: url(https://img10.360buyimg.com/imagetools/jfs/t1/41085/5/18894/1931/6360f721E4a60b58c/d538c4bf0535d4ab.png);
      background-size: 100% 100%;
    }
  }
}

.gear-footer {
  width: 100%;
  background-color: #000000;
  height: 369px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .gear-gooter-content {
    width: 1200px;
    display: flex;
    justify-content: space-between;
  }

  .gear-footer-left {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    position: relative;
    width: 610px;

    .gear-footer-left-title {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);

      &::before {
        content: ' ';
        width: 36px;
        height: 36px;
        background-image: url(https://img12.360buyimg.com/imagetools/jfs/t1/54040/7/22049/3655/63b53c29Fe8668642/6042a9f02f1d6a86.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-right: 16px;
      }
    }

    .gear-footer-left-des {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: normal;
      color: rgba(153, 153, 153, 1);
      margin-top: 14px;
    }

    &::after {
      content: ' ';
      width: 1px;
      height: 249px;
      background: rgba(255, 255, 255, 0.2);
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  .gear-footer-right {
    display: flex;
    margin-top: 60px;
    width: 590px;

    .gear-footer-right-content {
      margin-left: 130px;
      display: flex;
      flex-direction: column;

      .gear-footer-right-content-title {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 24px;
      }

      .gear-footer-right-content-erp {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: normal;
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 16px;
        cursor: pointer;
      }
    }
  }
}
</style>
