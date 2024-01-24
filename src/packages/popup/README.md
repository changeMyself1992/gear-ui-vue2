# 底部弹出菜单

页面底部弹出的轻量操作形式。

## 引入

```javascript
address组件 需要本地需要安装axios：^0.21.1
import Vue from 'vue'

import Popup from '@ueip/gear-vue/lib/popup'
import '@ueip/gear-vue/lib/popup/index.css'
import PopupHeader from '@ueip/gear-vue/lib/popup-header'
import '@ueip/gear-vue/lib/popup-header/index.css'

Vue.use(Popup)
Vue.use(PopupHeader)

// joyer
import  {Popup, PopupHeader}  from '@@ueip-gear-vue/master/index';
```

## vue用法

```javascript
<template>
  <div class="popup-demo" clstag="S711|126785">
    <div class="section-title"></div>
    <gear-button @click="test1 = !test1" class="btn1"> 基础菜单 </gear-button>
    <gear-button @click="test2 = !test2" class="btn1"> 标题+菜单 </gear-button>
    <gear-button @click="test3 = !test3" class="btn1"> 标题+菜单+菜单描述 </gear-button>
    <gear-button @click="test4 = !test4" class="btn1"> 标题+图文菜单 </gear-button>
    <gear-button @click="test5 = !test5" class="btn1"> 标题+图文菜单+菜单描述 </gear-button>
    <gear-button @click="test6 = !test6" class="btn1"> 协议类菜单 </gear-button>
    <gear-button @click="visible = !visible" class="btn1"> 多类目菜单 </gear-button>

    <gear-popup :visible.sync="test1" popHeight="auto">
      <template slot="content">
        <div
          style="height: 66px; text-align: center; line-height: 66px; font-family: PingFangSC-Medium; font-size: 16px; color: #000000; position: relative; font-weight: 500"
          class="border-bottom-1"
          @click="defaultShow('示例菜单')"
        >
          示例菜单
        </div>
        <div
          style="height: 66px; text-align: center; line-height: 66px; font-family: PingFangSC-Medium; font-size: 16px; color: #000000; position: relative; font-weight: 500"
          class="border-bottom-2"
          @click="defaultShow('示例菜单')"
        >
          示例菜单
        </div>
        <div
          style="height: 66px; text-align: center; line-height: 66px; font-family: PingFangSC-Medium; font-size: 16px; color: #666666; position: relative; font-weight: 500"
          @click="defaultShow('取消')"
        >
          取消
        </div>
      </template>
    </gear-popup>

    <gear-popup :visible.sync="test2" popHeight="auto">
      <template slot="header">
        <gear-popup-header main-title="标题"></gear-popup-header>
      </template>
      <div slot="content">
        <gear-list style="margin: 0">
          <gear-radio :options="todos2" v-model="radioSelect2" select-field="value" @select-item="handleSelect">
            <template slot-scope="{ slotProps }">
              <gear-list-item :class="slotProps.customClass" :title="slotProps.title" :border="slotProps.border" :disabled="slotProps.disabled"></gear-list-item>
            </template>
          </gear-radio>
        </gear-list>
      </div>
    </gear-popup>

    <gear-popup :visible.sync="test3" popHeight="auto">
      <template slot="header">
        <gear-popup-header main-title="标题"></gear-popup-header>
      </template>
      <div slot="content">
        <gear-list style="margin: 0">
          <gear-radio :options="todos3" v-model="radioSelect3" select-field="value" @select-item="handleSelect">
            <template slot-scope="{ slotProps }">
              <gear-list-item :class="slotProps.customClass" :title="slotProps.title" :desc="slotProps.desc" :border="slotProps.border" :disabled="slotProps.disabled"></gear-list-item>
            </template>
          </gear-radio>
        </gear-list>
      </div>
    </gear-popup>

    <gear-popup :visible.sync="test4" popHeight="auto">
      <template slot="header">
        <gear-popup-header main-title="标题"></gear-popup-header>
      </template>
      <div slot="content">
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
    </gear-popup>

    <gear-popup :visible.sync="test5" popHeight="auto">
      <template slot="header">
        <gear-popup-header main-title="标题"></gear-popup-header>
      </template>
      <div slot="content">
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
    </gear-popup>

    <gear-popup :visible.sync="test6" popHeight="auto">
      <template slot="header">
        <gear-popup-header main-title="查看协议" text-align="center"></gear-popup-header>
      </template>
      <template slot="content">
        <gear-list-item title="《个人征信授权委托书》" arrow border="bottom" style="height: 66px"></gear-list-item>
        <gear-list-item title="《京东金融金条借款服务协议》" arrow border="bottom" style="height: 66px"></gear-list-item>
        <gear-button style="margin: 14px auto 14px auto; width: 343px" @click="test6 = !test6">同意协议并继续</gear-button>
      </template>
    </gear-popup>

    <gear-address v-model="selectArr" :visible.sync="visible" @select-change="getItem" @select-item="changeData" :other-param="otherParam" :query-url="queryUrl"></gear-address>
  </div>
</template>

<script>
export default {
  name: 'demo-popup',
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
.popup-demo {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
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
/**为了兼容设计图而覆盖组件样式*********end */
</style>

<style>
/**为了兼容设计图而覆盖组件样式********* */
.popup-demo .gear-list-item-cont .title {
  font-weight: bold;
  font-family: PingFangSC-Medium;
  line-height: 23px;
}

.popup-demo .gear-list-item-cont .desc {
  margin-top: 2px;
}
</style>

```

## Props（Popup）

| 字段       | 说明                                            | 类型    | 默认值 | 是否必要 |
|------------|-----------------------------------------------|---------|--------|----------|
| visible    | 是否显示浮层                                    | Boolean | false  | 是       |
| popHeight  | 浮层的高度                                      | string  | 50%    | 否       |
| lockScroll | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | bool    | true   |          |

## Props（PopupHeader）

| 字段      | 说明                     | 类型   | 默认值   | 是否必要 |
|-----------|------------------------|--------|----------|---------|
| mainTitle | 标题                     | string | 空字符串 | 是       |
| textAlign | 标题排列方式，跟css的一样 | string | center   | 否       |