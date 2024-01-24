<!--  -->
<template>
  <div class="gear-empty">
    <div class="gear-empty__body" :style="bodyStyle">
      <img class="gear-empty__img" :src="imgSrc" />

      <div v-if="typeof description === 'string'">
        <p class="gear-empty__desc">{{ description }}</p>
      </div>

      <div v-else>
        <p class="gear-empty__desc" v-for="(des, index) in description" :key="index">{{ des }}</p>
      </div>

      <div class="gear-empty__btnBox">
        <gear-button class="gear-empty__btn" v-for="btn in btnList" :key="btn.id" :type="btn.type" size="small" @click="btn.handleClick(that)">{{ btn.btnLabel }} </gear-button>
      </div>
    </div>
  </div>
</template>

<script>
import noGoodsImg from './img/noGoods.png';
import activityEndImg from './img/activityEnd.png';
import networkImg from './img/network.png';
import noCommentImg from './img/noComment.png';
import noCouponImg from './img/noCoupon.png';
import defaultImg from './img/default.png';
import gearButton from '../button/index.js';
export default {
  name: 'GearEmpty',
  components: {
    gearButton
  },
  props: {
    image: {
      type: String,
      default: 'default' //noGoods购物车无商品， activityEnd活动已结束，network网络不稳定，noComment无评论，noCoupon无优惠券，default页面数据异常，加载失败,url自定义url图片
    },
    description: {
      type: String | Array,
      default: () => {
        return '页面数据异常';
      }
    },
    btnList: {
      type: Array,
      default: () => {
        return [
          {
            id: 0,
            type: 'white-normal',
            btnLabel: '刷新',
            handleClick: that => {
              that.$emit('click');
            }
          }
        ];
      }
    },
    bodyStyle: {
      type: Object,
      default: () => {
        return {
          'margin-top': '90px'
        };
      }
    }
  },
  data() {
    return {
      that: null
    };
  },

  computed: {
    imgSrc() {
      switch (this.image) {
        case 'noGoods':
          return noGoodsImg;
        case 'activityEnd':
          return activityEndImg;
        case 'network':
          return networkImg;
        case 'noComment':
          return noCommentImg;
        case 'noCoupon':
          return noCouponImg;
        case 'default':
          return defaultImg;
        default:
          return this.image;
      }
    }
  },
  created() {
    this.that = this;
  }
};
</script>

<style lang='scss' scoped>
</style>
