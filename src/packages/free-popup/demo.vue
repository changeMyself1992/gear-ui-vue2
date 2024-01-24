<template>
  <div class="free-popup-demo">
    <div class="section-title"></div>
    <gear-button @click="test1 = !test1" class="btn1"> 基础菜单 </gear-button>
    <gear-button @click="test2 = !test2" class="btn1"> 标题+菜单 </gear-button>
    <gear-button @click="test3 = !test3" class="btn1"> 标题+菜单+菜单描述 </gear-button>
    <gear-button @click="test4 = !test4" class="btn1"> 标题+图文菜单 </gear-button>
    <gear-button @click="test5 = !test5" class="btn1"> 标题+图文菜单+菜单描述 </gear-button>
    <gear-button @click="test6 = !test6" class="btn1"> 协议类菜单 </gear-button>
    <gear-button @click="visible = !visible" class="btn1"> 多类目菜单 </gear-button>

    <gear-free-popup v-model="test1" position="bottom" :round="true">
      <div class="popup-content gear-popup-content">
        <div
          class="border-bottom border-bottom-1"
          @click="defaultShow('示例菜单')"
        >
          示例菜单
        </div>
        <div
          class="border-bottom border-bottom-2"
          @click="defaultShow('示例菜单')"
        >
          示例菜单
        </div>
        <div
          class="border-bottom border-bottom-cancel"
          @click="defaultShow('取消')"
        >
          取消
        </div>
      </div>
    </gear-free-popup>

    <gear-free-popup v-model="test2" position="bottom" :round="true">
      <div class="popup-content">
        <gear-popup-header main-title="标题" @close-header="test2 = false"></gear-popup-header>
        <gear-list style="margin: 0">
          <gear-radio :options="todos2" v-model="radioSelect2" select-field="value" @select-item="handleSelect">
            <template slot-scope="{ slotProps }">
              <gear-list-item :class="slotProps.customClass" :title="slotProps.title" :border="slotProps.border" :disabled="slotProps.disabled"></gear-list-item>
            </template>
          </gear-radio>
        </gear-list>
      </div>
    </gear-free-popup>

    <gear-free-popup v-model="test3" position="bottom" :round="true">
      <div class="popup-content">
        <gear-popup-header main-title="标题" @close-header="test3 = false"></gear-popup-header>
        <gear-list style="margin: 0">
          <gear-radio :options="todos3" v-model="radioSelect3" select-field="value" @select-item="handleSelect">
            <template slot-scope="{ slotProps }">
              <gear-list-item :class="slotProps.customClass" :title="slotProps.title" :desc="slotProps.desc" :border="slotProps.border" :disabled="slotProps.disabled"></gear-list-item>
            </template>
          </gear-radio>
        </gear-list>
      </div>
    </gear-free-popup>

    <gear-free-popup v-model="test4" position="bottom" :round="true">
      <div class="popup-content">
        <gear-popup-header main-title="标题" @close-header="test4 = false"></gear-popup-header>
        <gear-list style="margin: 0">
          <gear-radio :options="todos4" v-model="radioSelect4" select-field="value" @select-item="handleSelect">
            <template slot-scope="{ slotProps }">
              <gear-list-item :class="slotProps.customClass" :title="slotProps.title" :border="slotProps.border" :disabled="slotProps.disabled">
                <template v-if="slotProps.iconSrc" slot="icon">
                  <img :src="slotProps.iconSrc" alt="" :style="slotProps.imgStyle" />
                </template>
              </gear-list-item>
            </template>
          </gear-radio>
        </gear-list>
      </div>
    </gear-free-popup>

    <gear-free-popup v-model="test5" position="bottom" :round="true">
      <div class="popup-content">
        <gear-popup-header main-title="标题" @close-header="test5 = false"></gear-popup-header>
        <gear-list style="margin: 0">
          <gear-radio :options="todos5" v-model="radioSelect5" select-field="value" @select-item="handleSelect">
            <template slot-scope="{ slotProps }">
              <gear-list-item :class="slotProps.customClass" :title="slotProps.title" :desc="slotProps.desc" :border="slotProps.border" :disabled="slotProps.disabled">
                <template v-if="slotProps.iconSrc" slot="icon">
                  <img :src="slotProps.iconSrc" alt="" :style="slotProps.imgStyle" />
                </template>
              </gear-list-item>
            </template>
          </gear-radio>
        </gear-list>
      </div>
    </gear-free-popup>

    <gear-free-popup v-model="test6" position="bottom" :round="true">
      <div class="popup-content">
        <gear-popup-header main-title="查看协议" @close-header="test6 = false"></gear-popup-header>
        <gear-list-item title="《个人征信授权委托书》" arrow border="bottom" style="height: 66px"></gear-list-item>
        <gear-list-item title="《京东金融金条借款服务协议》" arrow border="bottom" style="height: 66px"></gear-list-item>
        <gear-button style="margin: 14px auto 14px auto; width: 343px" @click="test6 = !test6">同意协议并继续</gear-button>
      </div>
    </gear-free-popup>

    <gear-address v-model="selectArr" :visible.sync="visible" @select-change="getItem" @select-item="changeData" :other-param="otherParam" :query-url="queryUrl"></gear-address>
  </div>
</template>

<script>
export default {
  name: 'free-popup-demo',
  data() {
    return {
      queryUrl: process.env.NODE_ENV === 'development' ? 'http://dev.jr.jd.com:8080/gw/generic/jrm/h5/m/querySubItemList' : 'https://ms.jr.jd.com/gw/generic/jrm/h5/m/querySubItemList',
      test1: false,

      test2: false,
      todos2: [
        {
          title: '示例菜单',
          value: 1,
          disabled: false,
          border: 'none',
          customClass: 'list-item2 border-bottom-2'
        },
        { title: '示例菜单', value: 2, disabled: false, border: 'none', customClass: 'list-item2' }
      ],
      radioSelect2: 1,

      test3: false,
      todos3: [
        {
          title: '示例菜单',
          value: 1,
          disabled: false,
          border: 'none',
          customClass: 'border-bottom-2',
          desc: '示例菜单描述'
        },
        {
          title: '示例菜单',
          value: 2,
          disabled: false,
          border: 'none',
          customClass: '',
          desc: {
            message: '示例菜单描述重点可添加高亮色',
            richMessage: [
              {
                color: '#999999',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',

                start: 0,
                end: 5,
                click: false
              },
              {
                color: '#F53137',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',

                click: true,
                start: 6,
                end: 13,
                click: false
              }
            ]
          }
        }
      ],
      radioSelect3: 1,

      test4: false,
      todos4: [
        {
          title: '示例菜单',
          value: 1,
          disabled: false,
          border: 'none',
          customClass: 'list-item4 border-bottom-4',
          iconSrc: 'https://img10.360buyimg.com/imagetools/jfs/t1/200363/7/26729/2042/62ea351aEc7fcac0e/b794dc586e2d8005.png',
          imgStyle: 'border-radius: 50%; margin-right: 6px;'
        },
        {
          title: '示例菜单',
          value: 2,
          disabled: false,
          border: 'none',
          customClass: 'list-item4 border-bottom-4',
          iconSrc: 'https://img10.360buyimg.com/imagetools/jfs/t1/200363/7/26729/2042/62ea351aEc7fcac0e/b794dc586e2d8005.png',
          imgStyle: 'border-radius: 50%; margin-right: 6px;'
        },
        {
          title: '添加',
          value: 3,
          disabled: false,
          border: 'none',
          customClass: 'list-item4 border-bottom-4',
          iconSrc: 'https://img10.360buyimg.com/imagetools/jfs/t1/11719/5/19154/2113/62ea3519E0b32bf7d/50da2b18a5597d6f.png',
          imgStyle: 'border-radius: 50%; margin-right: 6px;'
        },
        {
          title: '失效示例菜单',
          value: 4,
          disabled: true,
          border: 'none',
          customClass: 'list-item4',
          iconSrc: 'https://img10.360buyimg.com/imagetools/jfs/t1/200363/7/26729/2042/62ea351aEc7fcac0e/b794dc586e2d8005.png',
          imgStyle: 'border-radius: 50%; margin-right: 6px;'
        }
      ],
      radioSelect4: 1,

      test5: false,
      todos5: [
        {
          title: '示例菜单',
          desc: '示例菜单描述',
          value: 1,
          disabled: false,
          border: 'none',
          customClass: 'list-item5  border-bottom-5',
          iconSrc: 'https://img10.360buyimg.com/imagetools/jfs/t1/162144/23/29247/3127/62ea3519Efbe2d5dc/4a6503fccffb6f69.png',
          imgStyle: 'border-radius: 50%; margin-right: 6px; width: 40px; height: 40px;'
        },
        {
          title: '示例菜单',
          desc: '示例菜单描述',
          value: 2,
          disabled: false,
          border: 'none',
          customClass: 'list-item5  border-bottom-5',
          iconSrc: 'https://img10.360buyimg.com/imagetools/jfs/t1/162144/23/29247/3127/62ea3519Efbe2d5dc/4a6503fccffb6f69.png',
          imgStyle: 'border-radius: 50%; margin-right: 6px; width: 40px; height: 40px;'
        },
        {
          title: '添加',
          desc: '示例菜单描述',
          value: 3,
          disabled: false,
          border: 'none',
          customClass: 'list-item5  border-bottom-5',
          iconSrc: 'https://img10.360buyimg.com/imagetools/jfs/t1/216521/6/21034/2971/62ea3519E1ec4926d/b7a219a77e1a3e1f.png',
          imgStyle: 'border-radius: 50%; margin-right: 6px; width: 40px; height: 40px;'
        },
        {
          title: '失效示例菜单',
          desc: '示例菜单描述',
          value: 4,
          disabled: true,
          border: 'none',
          customClass: 'list-item4',
          iconSrc: 'https://img10.360buyimg.com/imagetools/jfs/t1/162144/23/29247/3127/62ea3519Efbe2d5dc/4a6503fccffb6f69.png',
          imgStyle: 'border-radius: 50%; margin-right: 6px; width: 40px; height: 40px;'
        }
      ],
      radioSelect5: 1,

      test6: false,

      visible: false,
      selectArr: ['1', '72', '55692'],
      otherParam: {},
      dataShowValue: ''
    };
  },
  components: {},
  methods: {
    defaultShow(text) {
      this.test1 = !this.test1;
      // this.$toast(text);
    },
    handleSelect(item) {
      console.log(`选择的值：${item.value}`);
    },
    getItem(data) {
      console.log('data:::', data);
      this.dataShow = data;
      this.dataShowValue = this.filterArea(data);
    },
    filterArea(value) {
      return value.reduce((prev, next) => {
        return (prev += next.name);
      }, '');
    },
    changeData(val, current) {
      console.log('val:::', val);
      console.log('current:::', current);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.free-popup-demo {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
}

.popup-content {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  background: #fff;
  padding-bottom: constant(safe-area-inset-bottom) !important;
  padding-bottom: env(safe-area-inset-bottom) !important;
}

/**为了兼容设计图而覆盖组件样式*********start */
.border-bottom-1 {
  @include gear-border-bottom(#eeeeee);
}
.border-bottom-2 {
  @include gear-border-bottom(#eeeeee, 16px, -16px);
}
.border-bottom-4,
.border-bottom-5 {
  @include gear-border-bottom(#eeeeee, 57px, -16px);
}
.list-item2 {
  height: 60px;
}
.list-item4 {
  height: 66px;
}
.list-item5 {
  height: 82px;
}

.free-popup-demo .gear-list-item-cont .title {
  font-weight: bold;
  font-family: PingFangSC-Medium;
  line-height: 23px;
}

.free-popup-demo .gear-list-item-cont .desc {
  margin-top: 2px;
}
/**为了兼容设计图而覆盖组件样式*********end */
</style>
