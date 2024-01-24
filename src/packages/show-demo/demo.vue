<template>
  <div class="show-demo" clstag="2C77|126805">
    <div class="box1">
      <div class="title">小红点</div>
      <gear-badge
        showType="dot"
        :badgeStyle="{
          top: '50%',
          left: 0,
          right: 'auto',
          transform: 'translateY(-50%)'
        }"
      >
        <div class="child-content"></div>
      </gear-badge>
    </div>

    <div class="box1">
      <div class="title">数字气泡</div>
      <gear-badge
        :style="{ 'margin-right': '24px' }"
        showType="numBubble"
        :content="1"
        :badgeStyle="{
          top: '50%',
          left: 0,
          right: 'auto',
          transform: 'translateY(-50%)'
        }"
      >
        <div class="child-content"></div>
      </gear-badge>

      <gear-badge
        showType="numBubble"
        :content="1000"
        :badgeStyle="{
          top: '50%',
          left: 0,
          right: 'auto',
          transform: 'translateY(-50%)'
        }"
      >
        <div class="child-content"></div>
      </gear-badge>
    </div>

    <div class="box1">
      <div class="title">汉字气泡</div>
      <gear-badge
        showType="chineseBubble"
        content="水电煤"
        :badgeStyle="{
          top: '50%',
          left: 0,
          right: 'auto',
          transform: 'translateY(-50%)'
        }"
      >
        <div class="child-content"></div>
      </gear-badge>
    </div>

    <div class="box1">
      <div class="title">标签</div>
      <!-- 宽高必须一致严格按照设计图来，只能写死宽高了,实际使用一般就不需要传tagStyle，也不需要写span标签 -->

      <div class="box-tag">
        <gear-tag
          :tagStyle="{
            width: px2vw(48),
            height: px2vw(15),
            background: '#F53137'
          }"
        >
          <!-- 这个也是没办法设计图是10px的字体，我要缩放它只能定位了 -->
          <span
            :style="{
              'font-family': 'PingFangSC-Regular',
              color: '#FFFFFF',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(0.8333)',
              width: '100%',
              'text-align': 'center'
            }"
            >标签文案</span
          >
        </gear-tag>

        <gear-tag
          :tagStyle="{
            width: px2vw(48),
            height: px2vw(15),
            background: '#D7AF74'
          }"
        >
          <span
            :style="{
              'font-family': 'PingFangSC-Regular',
              color: 'rgb(255, 255, 255)',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(0.8333)',
              width: '100%',
              'text-align': 'center'
            }"
            >标签文案</span
          >
        </gear-tag>

        <gear-tag
          :tagStyle="{
            width: px2vw(48),
            height: px2vw(15),
            background: 'rgba(244,229,231)'
          }"
        >
          <span
            :style="{
              'font-family': 'PingFangSC-Regular',
              color: 'rgba(239,64,52,1)',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(0.8333)',
              width: '100%',
              'text-align': 'center'
            }"
            >标签文案</span
          ></gear-tag
        >

        <gear-tag
          :tagStyle="{
            width: px2vw(48),
            height: px2vw(15),
            background: 'rgb(243, 235, 229)'
          }"
          ><span
            :style="{
              'font-family': 'PingFangSC-Regular',
              color: '#EB9654',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(0.8333)',
              width: '100%',
              'text-align': 'center'
            }"
            >标签文案</span
          ></gear-tag
        >

        <gear-tag
          :tagStyle="{
            width: px2vw(48),
            height: px2vw(15),
            'border-color': 'rgba(239,64,52,0.4)'
          }"
          :plain="true"
          ><span
            :style="{
              'font-family': 'PingFangSC-Regular',
              color: '#F53137',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(0.8333)',
              width: '100%',
              'text-align': 'center'
            }"
            >标签文案</span
          ></gear-tag
        >

        <gear-tag
          :tagStyle="{
            width: px2vw(48),
            height: px2vw(15),
            'border-color': 'rgba(235,150,84,0.4)'
          }"
          :plain="true"
          ><span
            :style="{
              'font-family': 'PingFangSC-Regular',

              color: '#CC8C4E',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(0.8333)',
              width: '100%',
              'text-align': 'center'
            }"
            >标签文案</span
          ></gear-tag
        >
      </div>
    </div>

    <div class="box2">
      <div class="title">引导气泡</div>
      <div class="box2-right">
        <gear-badge
          :style="{
            width: '100%',
            height: px2vw(53)
          }"
          :badgeStyle="{
            left: '0',
            right: 'auto'
          }"
          showType="guideBubble"
          content="请同意协议可提交信息"
        >
          <!-- <div class="child" /> 一般都会包一个盒子-->
        </gear-badge>

        <gear-badge
          :style="{
            width: '100%',
            height: px2vw(82)
          }"
          showType="guideBubble"
          content="点击拼车更优惠，拼成后可获得随机红包"
          :badgeStyle="{
            left: '0',
            right: 'auto'
          }"
          :arrowStyle="{
            left: px2vw(17),
            transform: 'none'
          }"
        >
          <!-- <div class="child" /> 一般都会包一个盒子-->
        </gear-badge>

        <gear-badge
          :style="{
            width: '100%',
            height: px2vw(53)
          }"
          showType="guideBubble"
          content="请同意协议可提交信息"
          :closeOnClickAction="true"
          :badgeStyle="{
            left: '0',
            right: 'auto'
          }"
          :arrowStyle="{
            left: px2vw(68),
            transform: 'none'
          }"
        >
          <!-- <div class="child" /> 一般都会包一个盒子-->
        </gear-badge>

        <gear-badge
          :style="{
            width: '100%',
            height: px2vw(50)
          }"
          content="点击拼车更优惠，拼成后可获得随机红包"
          :closeOnClickAction="true"
          showType="guideBubble"
          :badgeStyle="{
            left: '0',
            right: 'auto'
          }"
          :arrowStyle="{
            left: px2vw(68),
            transform: 'none'
          }"
        >
          <!-- <div class="child" /> 一般都会包一个盒子-->
        </gear-badge>
      </div>
    </div>

    <div class="title-1">按钮气泡</div>
    <div class="qipao-box">
      <gear-badge
        :style="{
          'margin-bottom': px2vw(30),
          width: px2vw(140)
        }"
        content="气泡提示文字"
        showType="btnBubble"
        :badgeStyle="{
          left: '50%',
          right: 'auto',
          top: px2vw(-15),
          transform: 'translateX(-50%)'
        }"
      >
        <gear-button
          type="short"
          size="large"
          :style="{
            width: px2vw(140),
            height: px2vw(44),
            'line-height': px2vw(44)
          }"
        >
          按钮
        </gear-button>
      </gear-badge>

      <gear-badge
        content="气泡展示文字展示在这"
        showType="btnBubbleA"
        :badgeStyle="{
          left: px2vw(158),
          top: px2vw(-15),
          right: 'auto'
        }"
      >
        <gear-button
          type="short"
          size="large"
          :style="{
            width: px2vw(300),
            height: px2vw(50),
            'line-height': px2vw(50)
          }"
        >
          查看可分期账单
        </gear-button>
      </gear-badge>
    </div>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  name: 'ShowDemo',
  mixins: [Px2VwMixin],
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
@import '../../assets/css/demo';
.show-demo {
  margin: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 0px 0 $padding-sm;
  .box1,
  .box2 {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    .title {
      min-width: 58px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Semibold;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-right: 12px;
    }
    .child {
      width: 40px;
      height: 40px;
      background: pink;
      border-radius: 4px;
    }
    .box2-right {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }
  .box2 {
    align-items: flex-start;
    margin-bottom: 32px;
  }
  .child-content {
    width: 1px;
    height: 1px;
  }

  .title-1 {
    min-width: 58px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    width: 100%;
    margin-bottom: 35px;
  }
  .qipao-box {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 0;
  }

  .box-tag {
    display: flex;
    align-content: space-between;
    flex: 1;
    flex-wrap: wrap;
    height: 40px;
  }
}
</style>
