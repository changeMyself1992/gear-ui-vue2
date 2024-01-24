<template>
  <div v-show="show" ref="track" class="bully-screen-icon" :class="[disabled ? 'bully-screen-icon--disabled' : 'bully-screen-icon--active']" :style="bullyScreenIconStyle">
    <!-- 运营图标 -->
    <div v-if="type === 'operationIcon' || type === 'advertOperationIcon'" class="bully-screen-icon__close-box" @click="closeClickFn">
      <img src="https://img14.360buyimg.com/imagetools/jfs/t1/223948/11/11564/1303/62b16068E1f2f7506/25fca17785a2ca85.png" />
    </div>
    <img v-if="type === 'operationIcon' || type === 'advertOperationIcon'" class="bully-screen-icon__goods" :src="imgStr" @click.capture="throttleGoodsClick" ref="goods" />
    <div v-if="type === 'advertOperationIcon'" class="bully-screen-icon__advert bully-screen-icon__advert-border">
      <span class="bully-screen-icon__advertText">广告</span>
    </div>

    <!--回到顶部-->
    <img
      v-if="type === 'backTop'"
      :style="backTopStyle"
      class="bully-screen-icon__backTopImg"
      src="https://img14.360buyimg.com/imagetools/jfs/t1/195635/20/32385/7511/63f6d9cbF25c11f06/f3b042d70fe68cd1.png"
      @click.capture="throttleGoodsClick"
    />
  </div>
</template>
<script>
import throttle from 'lodash/throttle';
import { TouchMixin } from '../../mixins/touch';
import { addUnit } from '../../utils/common';

export default {
  name: 'GearBullyScreenIcon',
  components: {},
  mixins: [TouchMixin],
  props: {
    // operationIcon运营图标,backTop回到顶部, advertOperationIcon 广告运营图标
    type: {
      type: String,
      default: () => 'operationIcon'
    },
    // 运营图标url
    imgStr: {
      type: String,
      default: () => ''
    },
    // 距离页面右侧的距离，默认单位为 px,仅在backTop模式下生效
    paddingRight: [Number, String],
    // 距离页面底部的距离，默认单位为 px,仅在backTop模式下生效
    bottom: {
      type: [Number, String],
      default: () => '106px'
    }
  },
  data() {
    return {
      show: true,
      // 是否禁用
      disabled: false,
      bullyScreenIcon: 'bully-screen-icon',
      throttleGoodsClick: () => {},
      whetherTheMouseIsPressedDown: false,
      timer: null,

      startX: 0, // 鼠标点击的坐标(屏幕坐标)
      endX: 0, // 鼠标停止的坐标(屏幕坐标)
      iconHeight: 0, // 悬浮图标高
      iconWidth: 0 // 悬浮图标宽
    };
  },
  computed: {
    backTopStyle() {
      return {
        paddingRight: addUnit(this.paddingRight)
      };
    },
    bullyScreenIconStyle() {
      if (this.type === 'backTop') {
        return {
          bottom: addUnit(this.bottom)
        };
      }
      return {};
    }
  },
  watch: {},
  created() {},
  mounted() {
    // 1. 绑定拖动事件,运营图标才需要有拖拽事件
    if (this.type === 'operationIcon') {
      this.bindTouchEvent(this.$refs.track);
      this.iconHeight = this.$refs.track.offsetHeight || 0;
      this.iconWidth = this.$refs.track.offsetWidth || 0;
    }
    // 2. 按钮点击要节流
    this.throttleGoodsClick = throttle(this.goodsClickFn, 1000, { trailing: false });
    // 3. 用户滚动屏幕时要求隐藏50%，并降低透明度，停止滚动后显示
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    closeClickFn() {
      this.show = false;
      this.$emit('closeClick');
    },
    goodsClickFn() {
      if (!this.disabled) {
        this.$emit('goodsClick');
      }
      if (this.type === 'backTop') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },

    onTouchStart(event) {
      this.whetherTheMouseIsPressedDown = true;
      this.$refs.goods.style['pointer-events'] = 'none';

      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },

    onTouchMove(event) {
      const touch = event.touches[0];
      if (this.whetherTheMouseIsPressedDown) {
        event.preventDefault();
        // 图标在X轴的最大活动范围
        const moveWidth = window.innerWidth - this.iconWidth;
        if (touch.clientX >= moveWidth) {
          this.$refs.track.style.right = '0px';
        } else if (touch.clientX <= 0) {
          this.$refs.track.style.right = `${moveWidth}px`;
        } else {
          this.$refs.track.style.right = `${window.innerWidth - touch.clientX - this.iconWidth}px`;
        }

        // 图标在Y轴的最大活动范围
        const moveHeight = window.innerHeight - this.iconHeight;
        if (touch.clientY >= moveHeight) {
          this.$refs.track.style.top = `${moveHeight}px`;
          this.$refs.track.style.bottom = 'auto';
        } else if (touch.clientY <= this.iconHeight) {
          this.$refs.track.style.top = '0px';
          this.$refs.track.style.bottom = 'auto';
        } else {
          this.$refs.track.style.top = `${touch.clientY - this.iconHeight / 2}px`;
          this.$refs.track.style.bottom = 'auto';
        }
      }
    },

    onTouchEnd(event) {
      this.whetherTheMouseIsPressedDown = false;
      this.$refs.goods.style['pointer-events'] = 'auto';
      this.$refs.track.style.right = '0';

      this.endX = event.changedTouches[0].clientX;
      this.endY = event.changedTouches[0].clientY;
      if (Math.abs(this.endX - this.startX) >= 5 || Math.abs(this.endY - this.startY)) {
        console.log('拖动结束，并且阻止默认事件，不让它触发子元素的点击事件');
        event.preventDefault();
      }
    },

    getDirection(x, y) {
      if (x > y) {
        return 'horizontal';
      }

      if (y > x) {
        return 'vertical';
      }

      return '';
    },
    handleScroll(event) {
      event.preventDefault();
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        console.log('停止滚动了...');
        this.disabled = false;
      }, 500);
      this.disabled = true;
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
