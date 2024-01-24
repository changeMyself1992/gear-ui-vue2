<template>
  <div class="demo-grid1">
    <div class="title">单排</div>
    <gear-grid :column-num="5" :icon-size="iconSize" style="margin-bottom: 10px">
      <gear-grid-item v-for="(item, index) in config1" :key="index" :icon="item.icon" :text="item.text" @click="onclick" />
    </gear-grid>

    <div class="title" style="margin-bottom: 0">双排</div>
    <gear-grid :column-num="5" :icon-size="iconSize" style="margin-bottom: 20px">
      <gear-grid-item v-for="(item, index) in config2" :key="index" :icon="item.icon" :text="item.text" @click="onclick" />
    </gear-grid>

    <div class="title">4列</div>
    <gear-grid :column-num="4" :icon-size="iconSize" style="margin-bottom: 20px">
      <gear-grid-item v-for="(item, index) in config3" :key="index" :icon="item.icon" :text="item.text" @click="onclick" />
    </gear-grid>

    <div class="title">整页分页指示器</div>
    <gear-swipe class="swipe-1" indicator-color="#666666" :loop="false" style="margin-bottom: 20px">
      <gear-swipe-item v-for="index1 in [1, 2]" :key="index1" :marginRight="24">
        <gear-grid :column-num="5" :icon-size="iconSize">
          <gear-grid-item v-for="(item, index2) in config2" :key="index2" :icon="item.icon" :text="item.text" @click="onclick" />
        </gear-grid>
      </gear-swipe-item>
    </gear-swipe>

    <div class="title">进度分页指示器</div>
    <gear-scroll-view style="margin-bottom: 15px">
      <div class="child" style="width: 20%" v-for="(item1, index1) in config4" :key="index1">
        <gear-grid :column-num="1" :icon-size="iconSize">
          <gear-grid-item v-for="(item2, index2) in item1" :key="index2" :icon="item2.icon" :text="item2.text" @click="onclick" />
        </gear-grid>
      </div>
    </gear-scroll-view>

    <div class="title">气泡展示</div>
    <gear-grid :column-num="5" :icon-size="iconSize" style="margin-bottom: 77px">
      <gear-grid-item v-for="(item, index) in config5" :key="index" :class="`grid-item-${index}`" :icon="item.icon" :text="item.text" :badgeProps="item.badgeProps" @click="onBadgeClick(index)" />
    </gear-grid>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  name: 'demo-grid1',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      iconSize: this.px2vw(41),
      config1: [
        {
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/30064/16/20944/9266/63ac01f1F47b00d21/54511a247b7c22f2.png',
          text: '小金库'
        },
        {
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/166102/11/33808/9166/63ac01f0F76a0862c/6a9c850731b66bf7.png',
          text: '白条'
        },
        {
          icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/155612/28/33794/11989/63ac01f0F8801addc/206a3220c3111b6b.png',
          text: ' 金条借款'
        },
        {
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/54751/13/22714/8704/63ac01f0F97d163c9/5ed7458f558dab2c.png',
          text: '保险'
        },
        {
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/156763/13/34056/6406/63ac01f0F436cb839/8400b1ee3d4662e9.png',
          text: '基金'
        }
      ],
      config2: [
        {
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/30064/16/20944/9266/63ac01f1F47b00d21/54511a247b7c22f2.png',
          text: '小金库'
        },
        {
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/166102/11/33808/9166/63ac01f0F76a0862c/6a9c850731b66bf7.png',
          text: '白条'
        },
        {
          icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/155612/28/33794/11989/63ac01f0F8801addc/206a3220c3111b6b.png',
          text: ' 金条借款'
        },
        {
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/54751/13/22714/8704/63ac01f0F97d163c9/5ed7458f558dab2c.png',
          text: '保险'
        },
        {
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/156763/13/34056/6406/63ac01f0F436cb839/8400b1ee3d4662e9.png',
          text: '基金'
        },
        {
          icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119766/9/31080/6129/63ac15cdF14d15725/b16e5f4eb0301748.png',
          text: '签到'
        },
        {
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/128467/14/33779/9128/63ac15cdFa6619f78/54efd4ef452c1c9c.png',
          text: '手机充值'
        },
        {
          icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/156252/36/28571/6727/63ac15cdF25a353f3/cc9bb64dd3ad057f.png',
          text: '信用卡'
        },
        {
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/217593/10/22892/10335/63f2de81Fe974584f/8082de93a43e3012.png',
          text: '分期商城'
        },
        {
          icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/106910/3/29475/13777/63ac15ccFbd9200af/25f6bfbd7737ba4f.png',
          text: '目标盈'
        }
      ],
      config3: [
        {
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/30064/16/20944/9266/63ac01f1F47b00d21/54511a247b7c22f2.png',
          text: '小金库'
        },
        {
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/166102/11/33808/9166/63ac01f0F76a0862c/6a9c850731b66bf7.png',
          text: '白条'
        },
        {
          icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/155612/28/33794/11989/63ac01f0F8801addc/206a3220c3111b6b.png',
          text: ' 金条借款'
        },
        {
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/54751/13/22714/8704/63ac01f0F97d163c9/5ed7458f558dab2c.png',
          text: '保险'
        },
        {
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/156763/13/34056/6406/63ac01f0F436cb839/8400b1ee3d4662e9.png',
          text: '基金'
        },
        {
          icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119766/9/31080/6129/63ac15cdF14d15725/b16e5f4eb0301748.png',
          text: '签到'
        },
        {
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/128467/14/33779/9128/63ac15cdFa6619f78/54efd4ef452c1c9c.png',
          text: '手机充值'
        },
        {
          icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/156252/36/28571/6727/63ac15cdF25a353f3/cc9bb64dd3ad057f.png',
          text: '信用卡'
        }
      ],
      config4: [
        [
          {
            icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/30064/16/20944/9266/63ac01f1F47b00d21/54511a247b7c22f2.png',
            text: '小金库'
          },
          {
            icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119766/9/31080/6129/63ac15cdF14d15725/b16e5f4eb0301748.png',
            text: '签到'
          }
        ],
        [
          {
            icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/166102/11/33808/9166/63ac01f0F76a0862c/6a9c850731b66bf7.png',
            text: '白条'
          },
          {
            icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/128467/14/33779/9128/63ac15cdFa6619f78/54efd4ef452c1c9c.png',
            text: '手机充值'
          }
        ],
        [
          {
            icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/155612/28/33794/11989/63ac01f0F8801addc/206a3220c3111b6b.png',
            text: ' 金条借款'
          },
          {
            icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/156252/36/28571/6727/63ac15cdF25a353f3/cc9bb64dd3ad057f.png',
            text: '信用卡'
          }
        ],
        [
          {
            icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/54751/13/22714/8704/63ac01f0F97d163c9/5ed7458f558dab2c.png',
            text: '保险'
          },
          {
            icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/217593/10/22892/10335/63f2de81Fe974584f/8082de93a43e3012.png',
            text: '分期商城'
          }
        ],
        [
          {
            icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/156763/13/34056/6406/63ac01f0F436cb839/8400b1ee3d4662e9.png',
            text: '基金'
          },
          {
            icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/106910/3/29475/13777/63ac15ccFbd9200af/25f6bfbd7737ba4f.png',
            text: '目标盈'
          }
        ],

        [
          {
            icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/30064/16/20944/9266/63ac01f1F47b00d21/54511a247b7c22f2.png',
            text: '小金库'
          },
          {
            icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119766/9/31080/6129/63ac15cdF14d15725/b16e5f4eb0301748.png',
            text: '签到'
          }
        ],
        [
          {
            icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/166102/11/33808/9166/63ac01f0F76a0862c/6a9c850731b66bf7.png',
            text: '白条'
          },
          {
            icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/128467/14/33779/9128/63ac15cdFa6619f78/54efd4ef452c1c9c.png',
            text: '手机充值'
          }
        ],
        [
          {
            icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/155612/28/33794/11989/63ac01f0F8801addc/206a3220c3111b6b.png',
            text: ' 金条借款'
          },
          {
            icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/156252/36/28571/6727/63ac15cdF25a353f3/cc9bb64dd3ad057f.png',
            text: '信用卡'
          }
        ],
        [
          {
            icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/54751/13/22714/8704/63ac01f0F97d163c9/5ed7458f558dab2c.png',
            text: '保险'
          },
          {
            icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/217593/10/22892/10335/63f2de81Fe974584f/8082de93a43e3012.png',
            text: '分期商城'
          }
        ],
        [
          {
            icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/156763/13/34056/6406/63ac01f0F436cb839/8400b1ee3d4662e9.png',
            text: '基金'
          },
          {
            icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/106910/3/29475/13777/63ac15ccFbd9200af/25f6bfbd7737ba4f.png',
            text: '目标盈'
          }
        ]
      ],
      config5: [
        {
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/30064/16/20944/9266/63ac01f1F47b00d21/54511a247b7c22f2.png',
          text: '小金库',
          badgeProps: {
            showType: 'dot'
          }
        },
        {
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/156763/13/34056/6406/63ac01f0F436cb839/8400b1ee3d4662e9.png',
          text: '基金',
          badgeProps: {
            showType: 'numBubble',
            content: 1,
            badgeStyle: {}
          }
        },
        {
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/141235/2/32243/8422/63ad3638F56b7f2e8/94b1fad60a5e33b3.png',
          text: ' 高端理财',
          badgeProps: {
            showType: 'numBubble',
            content: 100,
            badgeStyle: {
              // 这个定位，设计图上也不是 右上角固定不变的，只能是自己根据看着调吧
              right: this.px2vw(-7)
            }
          }
        },
        {
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/166102/11/33808/9166/63ac01f0F76a0862c/6a9c850731b66bf7.png',
          text: '白条',
          badgeProps: {
            showType: 'chineseBubble',
            content: '三个字',
            badgeStyle: {
              // 这个定位，设计图上也不是 右上角固定不变的，只能是自己根据看着调吧
              transform: 'translateX(50%)'
            }
          }
        },
        {
          icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/106910/3/29475/13777/63ac15ccFbd9200af/25f6bfbd7737ba4f.png',
          text: '目标盈',
          badgeProps: {
            showType: 'chineseBubble',
            content: '四个顶边',
            badgeStyle: {
              // 这个定位，设计图上也不是 右上角固定不变的，只能是自己根据看着调吧
              transform: 'translateX(33%)'
            }
          }
        }
      ]
    };
  },
  mounted() {},
  methods: {
    onclick(event, paramer) {
      console.log('图标点击参数1：', event);
      console.log('图标点击参数2：', paramer);
    },
    onBadgeClick(index) {
      const { showType } = this.config5[index].badgeProps;
      if (showType === 'chineseBubble' || showType === 'dot') {
        this.config5[index].badgeProps = {};
      }
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.demo-grid1 {
  position: relative;
  padding: 10px $padding-sm 0 $padding-sm;
  box-sizing: border-box;
  .title {
    line-height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: #999999;
    margin-bottom: 10px;
  }
  .child {
    display: inline-block;
  }
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 ****start*/
.demo-grid1 .gear-grid {
  padding-top: 10px;
  background-color: transparent;
}
.demo-grid1 .gear-grid-item__content {
  background-color: transparent;
  padding-bottom: 5px;
}

.demo-grid1 .swipe-1 .gear-grid {
  padding-bottom: 13px;
}
.demo-grid1 .swipe-1.gear-swipe__indicators {
  bottom: 10px;
}
.demo-grid1 .swipe-1 .gear-swipe__indicator {
  background-color: #000000;
}

.demo-grid1 .gear-scroll-view {
  background-color: transparent;
  padding: 0;
}
.demo-grid1 .gear-scroll-view .child .gear-grid {
  padding-bottom: 13px;
}
.demo-grid1 .gear-scroll-view__track {
  padding: 0;
}
.demo-grid1 .gear-scroll-view__indicators {
  bottom: 10px;
}

/* 为了保持跟设计稿一致，需要覆盖一些样式 ****end*/
</style>
