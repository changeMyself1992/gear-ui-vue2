<template>
  <div class="gear-empty-demo" clstag="	HPIC|126791">
    <div class="section-title">可直接用</div>
    <gear-button @click="buttonClick('/network')" class="btn1"> 无网络 </gear-button>
    <gear-button @click="buttonClick('/default')" class="btn1"> 加载失败 </gear-button>
    <gear-button @click="buttonClick('/no-comment')" class="btn1"> 无评论 </gear-button>
    <gear-button @click="buttonClick('/no-goods')" class="btn1"> 购物车为空 </gear-button>
    <gear-button @click="buttonClick('/no-coupon')" class="btn1"> 无优惠券 </gear-button>
    <gear-button @click="buttonClick('/activity-end')" class="btn1"> 活动结束 </gear-button>

    <div class="section-title" :style="{ 'margin-top': px2vw(3) }">可自由配置</div>
    <gear-button @click="buttonClick('/no-btn')" class="btn1"> 无按钮 </gear-button>
    <gear-button @click="buttonClick('/one-btn')" class="btn1"> 有1个按钮 </gear-button>
    <gear-button @click="buttonClick('/two-btn')" class="btn1"> 有2个按钮 </gear-button>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  name: 'EmptyDemo',
  mixins: [Px2VwMixin],
  data() {
    return {};
  },
  props: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    buttonClick(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/demo';
.gear-empty-demo {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
