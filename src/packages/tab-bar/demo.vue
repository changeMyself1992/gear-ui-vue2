<template>
  <div class="tab-bar-demo" clstag="N938|126784">
    <div class="title">五列图标</div>
    <gear-tab-bar class="tab-bar-demo1" :items="items0"></gear-tab-bar>
    <div class="title">四列图标</div>
    <gear-tab-bar class="tab-bar-demo1" :items="items1"></gear-tab-bar>
    <div class="title">三列图标</div>
    <gear-tab-bar class="tab-bar-demo1" :items="items2"></gear-tab-bar>
    <div class="title">两列图标</div>
    <gear-tab-bar class="tab-bar-demo1" :items="items3"></gear-tab-bar>
    <div class="title">图标气泡</div>
    <gear-tab-bar :class="isAndroid ? 'tab-bar-demo2_1' : 'tab-bar-demo2_2'" :items="items4" @change="change"></gear-tab-bar>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  name: 'TabBar',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      items0: [
        {
          cls: 'home',
          name: '首页',
          push: '/home',
          // icon: 'iconfont icon-shouye',
          // iconSelect: 'iconfont icon-shouye',
          src: 'https://img14.360buyimg.com/imagetools/jfs/t1/120696/23/33194/1095/63b3e6e6F877fa6af/f1badfaf7b2fc72a.png',
          srcSelect: 'https://img11.360buyimg.com/imagetools/jfs/t1/181883/18/31431/818/63b3e6e9Fd6267426/467726f7a44454f1.png'
        },
        {
          cls: 'shares',
          name: '资讯',
          push: '/shares',
          // icon: "iconfont icon-guidang",
          // iconSelect: 'iconfont icon-guidang',
          src: 'https://img10.360buyimg.com/imagetools/jfs/t1/202689/33/29166/802/63b3e6e6Fab5c4580/7af50ddcf95af2c6.png',
          srcSelect: 'https://img13.360buyimg.com/imagetools/jfs/t1/66888/13/23100/637/63b3e666Fca1e1483/b17b9178dc848d89.png'
        },
        {
          cls: 'community',
          name: '交易',
          push: '/community',
          // icon: "iconfont icon-bozhuguanli",
          // iconSelect: 'iconfont icon-bozhuguanli',
          src: 'https://img12.360buyimg.com/imagetools/jfs/t1/170516/32/33485/1101/63b3e6e7F97cc52da/de1587c0e5a4ac4c.png',
          srcSelect: 'https://img10.360buyimg.com/imagetools/jfs/t1/30339/24/19351/888/63b3e6e6Fe85d3866/58d720eee1b3c669.png'
        },
        {
          cls: 'mine',
          name: '圈子',
          push: '/mine',
          // icon: "iconfont icon-lianjie2",
          // iconSelect: 'iconfont icon-lianjie2',
          src: 'https://img12.360buyimg.com/imagetools/jfs/t1/165189/4/24625/1513/63b3e6e7Ff810d84d/53522b34b7e68bd5.png',
          srcSelect: 'https://img10.360buyimg.com/imagetools/jfs/t1/192663/7/31228/1232/63b3e6e6F851ae5d7/cfaba7fa8ed10046.png'
        },
        {
          cls: 'mine',
          name: '持仓',
          push: '/mine',
          // icon: "iconfont icon-lianjie2",
          // iconSelect: 'iconfont icon-lianjie2',
          src: 'https://img12.360buyimg.com/imagetools/jfs/t1/127001/29/33328/2348/63b3e6e6Fdfcd9876/5d11a20201b8ccd9.png',
          srcSelect: 'https://img13.360buyimg.com/imagetools/jfs/t1/72491/39/23064/1683/63b3e666F7dbe2894/86513eaa92793b94.png'
        }
      ],
      items1: [
        {
          cls: 'home',
          name: '首页',
          push: '/home',
          // icon: 'iconfont icon-shouye',
          // iconSelect: 'iconfont icon-shouye',
          src: 'https://img14.360buyimg.com/imagetools/jfs/t1/120696/23/33194/1095/63b3e6e6F877fa6af/f1badfaf7b2fc72a.png',
          srcSelect: 'https://img11.360buyimg.com/imagetools/jfs/t1/181883/18/31431/818/63b3e6e9Fd6267426/467726f7a44454f1.png'
        },
        {
          cls: 'shares',
          name: '资讯',
          push: '/shares',
          // icon: "iconfont icon-guidang",
          // iconSelect: 'iconfont icon-guidang',
          src: 'https://img10.360buyimg.com/imagetools/jfs/t1/202689/33/29166/802/63b3e6e6Fab5c4580/7af50ddcf95af2c6.png',
          srcSelect: 'https://img13.360buyimg.com/imagetools/jfs/t1/66888/13/23100/637/63b3e666Fca1e1483/b17b9178dc848d89.png'
        },
        {
          cls: 'community',
          name: '交易',
          push: '/community',
          // icon: "iconfont icon-bozhuguanli",
          // iconSelect: 'iconfont icon-bozhuguanli',
          src: 'https://img12.360buyimg.com/imagetools/jfs/t1/170516/32/33485/1101/63b3e6e7F97cc52da/de1587c0e5a4ac4c.png',
          srcSelect: 'https://img10.360buyimg.com/imagetools/jfs/t1/30339/24/19351/888/63b3e6e6Fe85d3866/58d720eee1b3c669.png'
        },
        {
          cls: 'mine',
          name: '圈子',
          push: '/mine',
          // icon: "iconfont icon-lianjie2",
          // iconSelect: 'iconfont icon-lianjie2',
          src: 'https://img12.360buyimg.com/imagetools/jfs/t1/165189/4/24625/1513/63b3e6e7Ff810d84d/53522b34b7e68bd5.png',
          srcSelect: 'https://img10.360buyimg.com/imagetools/jfs/t1/192663/7/31228/1232/63b3e6e6F851ae5d7/cfaba7fa8ed10046.png'
        }
      ],
      items2: [
        {
          cls: 'home',
          name: '首页',
          push: '/home',
          // icon: 'iconfont icon-shouye',
          // iconSelect: 'iconfont icon-shouye',
          src: 'https://img14.360buyimg.com/imagetools/jfs/t1/120696/23/33194/1095/63b3e6e6F877fa6af/f1badfaf7b2fc72a.png',
          srcSelect: 'https://img11.360buyimg.com/imagetools/jfs/t1/181883/18/31431/818/63b3e6e9Fd6267426/467726f7a44454f1.png'
        },
        {
          cls: 'shares',
          name: '资讯',
          push: '/shares',
          // icon: "iconfont icon-guidang",
          // iconSelect: 'iconfont icon-guidang',
          src: 'https://img10.360buyimg.com/imagetools/jfs/t1/202689/33/29166/802/63b3e6e6Fab5c4580/7af50ddcf95af2c6.png',
          srcSelect: 'https://img13.360buyimg.com/imagetools/jfs/t1/66888/13/23100/637/63b3e666Fca1e1483/b17b9178dc848d89.png'
        },
        {
          cls: 'community',
          name: '交易',
          push: '/community',
          // icon: "iconfont icon-bozhuguanli",
          // iconSelect: 'iconfont icon-bozhuguanli',
          src: 'https://img12.360buyimg.com/imagetools/jfs/t1/170516/32/33485/1101/63b3e6e7F97cc52da/de1587c0e5a4ac4c.png',
          srcSelect: 'https://img10.360buyimg.com/imagetools/jfs/t1/30339/24/19351/888/63b3e6e6Fe85d3866/58d720eee1b3c669.png'
          // showType: 'chineseBubble',
          // content:'首页',
        }
      ],
      items3: [
        {
          cls: 'home',
          name: '首页',
          push: '/home',
          // icon: 'iconfont icon-shouye',
          // iconSelect: 'iconfont icon-shouye',
          src: 'https://img14.360buyimg.com/imagetools/jfs/t1/120696/23/33194/1095/63b3e6e6F877fa6af/f1badfaf7b2fc72a.png',
          srcSelect: 'https://img11.360buyimg.com/imagetools/jfs/t1/181883/18/31431/818/63b3e6e9Fd6267426/467726f7a44454f1.png'
        },
        {
          cls: 'shares',
          name: '资讯',
          push: '/shares',
          // icon: "iconfont icon-guidang",
          // iconSelect: 'iconfont icon-guidang',
          src: 'https://img10.360buyimg.com/imagetools/jfs/t1/202689/33/29166/802/63b3e6e6Fab5c4580/7af50ddcf95af2c6.png',
          srcSelect: 'https://img13.360buyimg.com/imagetools/jfs/t1/66888/13/23100/637/63b3e666Fca1e1483/b17b9178dc848d89.png'
        }
      ],
      items4: [
        {
          cls: 'home',
          name: '首页',
          push: '/home',
          src: 'https://img14.360buyimg.com/imagetools/jfs/t1/120696/23/33194/1095/63b3e6e6F877fa6af/f1badfaf7b2fc72a.png',
          srcSelect: 'https://img11.360buyimg.com/imagetools/jfs/t1/181883/18/31431/818/63b3e6e9Fd6267426/467726f7a44454f1.png',
          // badgeProps 详情查看文档 https://utest.jr.jd.com/doc/#/show-demo
          badgeProps: {
            showType: 'dot',
            badgeStyle: {
              transform: 'translate(50%,-50%)'
            }
          }
        },
        {
          cls: 'shares',
          name: '资讯',
          push: '/shares',
          src: 'https://img10.360buyimg.com/imagetools/jfs/t1/202689/33/29166/802/63b3e6e6Fab5c4580/7af50ddcf95af2c6.png',
          srcSelect: 'https://img13.360buyimg.com/imagetools/jfs/t1/66888/13/23100/637/63b3e666Fca1e1483/b17b9178dc848d89.png',
          badgeProps: {
            showType: 'chineseBubble',
            content: '水电煤',
            badgeStyle: {
              // 这个定位，设计图上也不是 右上角固定不变的，只能是自己根据看着调吧
              transform: 'translate(74%, -38%)'
            }
          }
        },
        {
          cls: 'community',
          name: '交易',
          push: '/community',
          src: 'https://img12.360buyimg.com/imagetools/jfs/t1/170516/32/33485/1101/63b3e6e7F97cc52da/de1587c0e5a4ac4c.png',
          srcSelect: 'https://img10.360buyimg.com/imagetools/jfs/t1/30339/24/19351/888/63b3e6e6Fe85d3866/58d720eee1b3c669.png',
          badgeProps: {
            showType: 'numBubble',
            content: 1,
            badgeStyle: {
              // 这个定位，设计图上也不是 右上角固定不变的，只能是自己根据看着调吧
              transform: 'translate(45%, -33%)'
            }
          }
        },

        {
          cls: 'mine',
          name: '圈子',
          push: '/mine',
          src: 'https://img12.360buyimg.com/imagetools/jfs/t1/165189/4/24625/1513/63b3e6e7Ff810d84d/53522b34b7e68bd5.png',
          srcSelect: 'https://img10.360buyimg.com/imagetools/jfs/t1/192663/7/31228/1232/63b3e6e6F851ae5d7/cfaba7fa8ed10046.png',
          badgeProps: {
            showType: 'numBubble',
            content: 99,
            badgeStyle: {
              // 这个定位，设计图上也不是 右上角固定不变的，只能是自己根据看着调吧
              transform: 'translate(45%, -33%)'
            }
          }
        },
        {
          cls: 'mine',
          name: '持仓',
          push: '/mine',
          src: 'https://img12.360buyimg.com/imagetools/jfs/t1/127001/29/33328/2348/63b3e6e6Fdfcd9876/5d11a20201b8ccd9.png',
          srcSelect: 'https://img13.360buyimg.com/imagetools/jfs/t1/72491/39/23064/1683/63b3e666F7dbe2894/86513eaa92793b94.png'
        }
      ]
    };
  },

  computed: {
    isAndroid() {
      const ua = navigator.userAgent.toLowerCase();
      const isAndroid = /android/.test(ua);

      return isAndroid;
    }
  },

  methods: {
    change(index) {
      console.log('change', index);
      if (this.items4[index].badgeProps) {
        const { showType } = this.items4[index].badgeProps;
        if (showType === 'chineseBubble' || showType === 'dot') {
          this.items4[index].badgeProps = {};
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.tab-bar-demo {
  overflow: hidden;
  .title {
    line-height: 20px;
    margin: 20px 0 10px;
    padding: 0 $padding-sm;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 600;
    color: rgba(153, 153, 153, 1);
  }
  .tab-bar-demo1 {
    position: relative;
  }
  .tab-bar-demo2_1 {
    padding-bottom: calc(2px + constant(safe-area-inset-bottom)) !important;
    padding-bottom: calc(2px + env(safe-area-inset-bottom)) !important;
  }
  .tab-bar-demo2_2 {
    padding-bottom: constant(safe-area-inset-bottom) !important;
    padding-bottom: env(safe-area-inset-bottom) !important;
  }
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 ****start*/

/* 为了保持跟设计稿一致，需要覆盖一些样式 ****end*/
</style>
