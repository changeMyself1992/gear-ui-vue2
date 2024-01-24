<template>
  <div class="gear-tab-bar">
    <div class="gear-tab-item" @click="change(item, index)" v-for="(item, index) of items" :key="index" :class="[item.cls, { on: index === selectIndex }]">
      <gear-badge v-bind="item.badgeProps || {}">
        <img class="gear-tab-icon" :src="index === selectIndex ? item.srcSelect : item.src" v-if="showIconOrSrc" />
        <i :class="index === selectIndex ? item.iconSelect : item.icon" v-if="!showIconOrSrc"></i>
      </gear-badge>

      <span class="gear-tab-text" :class="['colorChange', { on: index === selectIndex }]">{{ item.name }}</span>
    </div>
  </div>
</template>
<script>
import GearBadge from '../badge/index';
// import { isAndroid, isIOS } from '../../utils/validate/system';
export default {
  name: 'GearTabBar',
  props: {
    idx: {
      type: Number,
      default: 0
    },
    showIconOrSrc: {
      // true表示显示图片途径 src
      // false 表示icon图标类名
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      default: function () {
        return [
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
            cla: 'community',
            name: '交易',
            push: '/community',
            // icon: "iconfont icon-bozhuguanli",
            // iconSelect: 'iconfont icon-bozhuguanli',
            src: 'https://img12.360buyimg.com/imagetools/jfs/t1/170516/32/33485/1101/63b3e6e7F97cc52da/de1587c0e5a4ac4c.png',
            srcSelect: 'https://img10.360buyimg.com/imagetools/jfs/t1/30339/24/19351/888/63b3e6e6Fe85d3866/58d720eee1b3c669.png'
          },
          {
            cla: 'mine',
            name: '圈子',
            push: '/mine',
            // icon: "iconfont icon-lianjie2",
            // iconSelect: 'iconfont icon-lianjie2',
            src: 'https://img12.360buyimg.com/imagetools/jfs/t1/165189/4/24625/1513/63b3e6e7Ff810d84d/53522b34b7e68bd5.png',
            srcSelect: 'https://img10.360buyimg.com/imagetools/jfs/t1/192663/7/31228/1232/63b3e6e6F851ae5d7/cfaba7fa8ed10046.png'
          }
        ];
      }
    }
  },
  components: { GearBadge },
  data() {
    return {
      selectIndex: this.idx
    };
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    change(item, index) {
      // this.$router.push(item.push);
      this.selectIndex = index;
      this.$emit('change', index);
    }
  }
};
</script>
