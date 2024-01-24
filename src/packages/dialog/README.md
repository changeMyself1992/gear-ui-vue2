# 对话框

用作显示系统的重要信息，并请求用户进行操作反馈。

## 引入

```javascript
import Vue from 'vue'
import Dialog from '@ueip/gear-vue/lib/dialog'
import '@ueip/gear-vue/lib/dialog/index.css'

Vue.use(Dialog)

// joyer
import  {Dialog}  from '@@ueip-gear-vue/master/index';
```

## vue用法

```javascript
<template>
  <div class="dialog-demo" clstag="538N|126803">
    <gear-button @click="itemClick('0')" class="btn1"> 主标题（2个按钮） </gear-button>
    <gear-button @click="itemClick('1')" class="btn1"> 主标题（1个按钮） </gear-button>
    <gear-button @click="itemClick('2')" class="btn1"> 主副标题（2个按钮） </gear-button>
    <gear-button @click="itemClick('3')" class="btn1"> 主副标题（1个按钮） </gear-button>
    <gear-button @click="itemClick('4')" class="btn1"> 段落有主副标题（2个按钮） </gear-button>
    <gear-button @click="itemClick('5')" class="btn1"> 段落有主副标题（1个按钮） </gear-button>
    <gear-button @click="itemClick('6')" class="btn1"> 段落只有副标题（2个按钮） </gear-button>
    <gear-button @click="itemClick('7')" class="btn1"> 段落只有副标题（1个按钮） </gear-button>
    <gear-button @click="itemClick('8')" class="btn1"> 特殊带关闭 </gear-button>
    <gear-button @click="itemClick('9')" class="btn1"> 示例-可加背景 </gear-button>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  name: 'demo-Dialog',
  mixins: [Px2VwMixin],
  data() {
    return {
      headerTitle: 'Dialog'
    };
  },
  components: {},
  methods: {
    itemClick(id) {
      switch (String(id)) {
        case '0':
          this.$confirm({
            title: '当没有主副标题时，只有一段话时居中对齐展示',
            okBtnTxt: '确认文案',
            cancelBtnTxt: '取消文案',
            okCbFun: () => {
              // this.$toast('确认按钮执行');
            },
            cancelCbFun: () => {
              // this.$toast('取消按钮执行');
            },
            unClickBg: true,
            lockScroll: true
          });
          break;
        case '1':
          this.$confirm({
            title: '当没有主副标题时，只有一段话时居中对齐展示',
            okCbFun: () => {
              // this.$toast('按钮点击');
            },
            okBtnTxt: '主按钮最多八个字'
          });
          break;
        case '2':
          this.$confirm({
            title: '主标题居中最多俩行',
            content: '正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px',
            okBtnTxt: '四字文案',
            cancelBtnTxt: '四字文案',
            okCbFun: () => {
              // this.$toast('按钮点击');
            }
          });
          break;
        case '3':
          this.$confirm({
            title: '主标题居中最多俩行',
            content: '正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px',
            okBtnTxt: '主按钮最多八个字',
            okCbFun: () => {
              // this.$toast('按钮点击');
            }
          });
          break;

        case '4':
          this.$confirm({
            title: '主标题居中最多俩行',
            content: `
              <div class="test-1" style="max-height: 252px;overflow-y: scroll;">
                <div style="font-size: 14px;font-family: PingFangSC-Medium;font-weight: bold;color: #333333;padding-bottom:4px;">1、段落主文案或标题左对齐</div>
                <div style="font-size: 14px;font-family: PingFangSC-Regular;font-weight: normal;color: #666666;padding-bottom:12px;text-align: justify;">
                  正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；
                </div>
                <div style="font-size: 14px;font-family: PingFangSC-Medium;font-weight: bold;color: #333333;padding-bottom:4px;">2、段落主文案或标题左对齐</div>
                <div style="font-size: 14px;font-family: PingFangSC-Regular;font-weight: normal;color: #666666;padding-bottom:16px;text-align: justify;">
                  正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；
                </div>
              </div>
              <div style="position: absolute;bottom: 0;width: 100%;height: 16px;background: linear-gradient(180deg, rgba(255,255,255,0) 0.05463286713286715%,rgba(255,255,255,1) 100%);z-index: 10;"></div>
            `,
            btnBoxStyle: {
              'padding-top': '8px',
              'padding-right': this.px2vw(14)
            },
            dialogStyle: {
              'padding-right': this.px2vw(10) // test-1 故意加了14px右边距（为了往右边挤一下滚动条），所以这把gear-dialog右边距从24改为10
            },
            okBtnTxt: '四字文案',
            cancelBtnTxt: '四字文案',
            okCbFun: () => {
              // this.$toast('标题段落+单按钮');
            }
          });
          break;
        case '5':
          this.$confirm({
            title: '主标题居中最多俩行',
            content: `
              <div class="test-1" style="max-height: 252px;overflow-y: scroll;">
                <div style="font-size: 14px;font-family: PingFangSC-Medium;font-weight: bold;color: #333333;padding-bottom:4px;">1、段落主文案或标题左对齐</div>
                <div style="font-size: 14px;font-family: PingFangSC-Regular;font-weight: normal;color: #666666;padding-bottom:12px; text-align: justify;">
                  正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；
                </div>
                <div style="font-size: 14px;font-family: PingFangSC-Medium;font-weight: bold;color: #333333;padding-bottom:4px;">2、段落主文案或标题左对齐</div>
                <div style="font-size: 14px;font-family: PingFangSC-Regular;font-weight: normal;color: #666666;padding-bottom:16px; text-align: justify;">
                  正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；
                </div>
              </div>
              <div style="position: absolute;bottom: 0;width: 100%;height: 16px;background: linear-gradient(180deg, rgba(255,255,255,0) 0.05463286713286715%,rgba(255,255,255,1) 100%);z-index: 10;"></div>
            `,
            btnBoxStyle: {
              'padding-top': '8px',
              'padding-right': this.px2vw(14)
            },
            dialogStyle: {
              'padding-right': this.px2vw(10) // test-1 故意加了14px右边距（为了往右边挤一下滚动条），所以这把gear-dialog右边距从24改为10
            },
            okBtnTxt: '主按钮最多八个字',
            okCbFun: () => {
              // this.$toast('标题段落+单按钮');
            }
          });
          break;
        case '6':
          this.$confirm({
            title: '主标题居中最多俩行',
            content: `
              <div class="test-1"  style="max-height: 252px;overflow-y: scroll;">
                <div style="font-size: 14px;font-family: PingFangSC-Regular;font-weight: normal;color: #666666;padding-bottom:12px; text-align: justify;">
                  正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；
                </div>
                <div style="font-size: 14px;font-family: PingFangSC-Regular;font-weight: normal;color: #666666;padding-bottom:16px; text-align: justify;">
                  正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；
                </div>
              </div>
              <div style="position: absolute;bottom: 0;width: 100%;height: 16px;background: linear-gradient(180deg, rgba(255,255,255,0) 0.05463286713286715%,rgba(255,255,255,1) 100%);z-index: 10;"></div>
            `,
            btnBoxStyle: {
              'padding-top': '8px',
              'padding-right': this.px2vw(14)
            },
            dialogStyle: {
              'padding-right': this.px2vw(10) // test-1 故意加了14px右边距（为了往右边挤一下滚动条），所以这把gear-dialog右边距从24改为10
            },
            okBtnTxt: '四字文案',
            cancelBtnTxt: '四字文案',
            okCbFun: () => {
              // this.$toast('标题段落+单按钮');
            }
          });
          break;
        case '7':
          this.$confirm({
            title: '主标题居中最多俩行',
            content: `
              <div class="test-1" style="max-height: 252px;overflow-y: scroll;">
                <div style="font-size: 14px;font-family: PingFangSC-Regular;font-weight: normal;color: #666666;padding-bottom:12px; text-align: justify;">
                  正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；
                </div>
                <div style="font-size: 14px;font-family: PingFangSC-Regular;font-weight: normal;color: #666666;padding-bottom:16px; text-align: justify;">
                  正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px；
                </div>
              </div>
              <div style="position: absolute;bottom: 0;width: 100%;height: 16px;background: linear-gradient(180deg, rgba(255,255,255,0) 0.05463286713286715%,rgba(255,255,255,1) 100%);z-index: 10;"></div>
            `,
            btnBoxStyle: {
              'padding-top': '8px',
              'padding-right': this.px2vw(14)
            },
            dialogStyle: {
              'padding-right': this.px2vw(10) // test-1 故意加了14px右边距（为了往右边挤一下滚动条），所以这把gear-dialog右边距从24改为10
            },
            okBtnTxt: '主按钮最多八个字',
            okCbFun: () => {
              // this.$toast('标题段落+单按钮');
            }
          });
          break;
        case '8':
          this.$confirm({
            title: '主标题居中最多俩行',
            content: '正文的文案居左对齐显示且显示文案可多行。弹窗最大高度780px',
            okBtnTxt: '四字文案',
            cancelBtnTxt: '四字文案',
            iconClosePro: true,
            okCbFun: () => {
              // this.$toast('按钮点击');
            }
          });
          break;
        case '9':
          this.$confirm({
            title: '确定继续关闭提醒',
            content: '关闭智能盯盘后，你将无法第一时间获取自选股异动信息，有可能错过重要行情哦',
            okBtnTxt: '继续提醒',
            cancelBtnTxt: '不再提醒',
            dialogStyle: {
              background: 'linear-gradient(171.17deg, rgba(194,255,246,0.5) 0%,rgba(255,255,255,0) 100%),linear-gradient(197deg, rgba(255,206,188,1) 0%,rgba(255,255,255,1) 100%)'
            },
            okCbFun: () => {
              // this.$toast('按钮点击');
            }
          });
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.dialog-demo {
  margin: 0;
  padding: 16px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
}
</style>

<style>
.gear-dialog-content .test-1 {
  padding-right: 14px;
}

/*滚动条整体样式*/
/*高宽分别对应横竖滚动条的尺寸*/
.gear-dialog-content .test-1::-webkit-scrollbar {
  width: 3px;
  /* background: transparent; */
  /* display: block; */
}

/*滚动条里面小方块*/
.gear-dialog-content .test-1::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background-color: rgba(0, 0, 0, 0.15);
}
</style>

```
## 方法参数

| 字段         | 说明                                           | 类型      | 默认值   | 是否必要 |
| ------------ | ---------------------------------------------- | --------- | -------- | ----- |
| title        | 对话框标题                                      | String   | 空字符串  | 否    |
| unClickBg    | 点击背景板能否关闭                              | bool     | false     | 否    |
| content      | 内容文字                                        | String   | 空字符串  | 否    |
| btnBoxStyle  | 按钮盒子样式对象                                | object   | {}        | 否    |
| iconClosePro | 是否展示关闭图标                                | bool     | false     | 否    |
| dialogStyle  | 对话框样式对象                                  | object   | {}        | 否    |
| lock-scroll  | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | boolean  | false     | 否    |
| okBtnTxt     | 确定按钮文案                                    | string   | 空字符串  | 否    |
| okCbFun      | 确定按钮点击回调方法                            | function |           | 否    |
| cancelBtnTxt | 取消按钮文案                                    | string   | 空字符串  | 否    |
| cancelCbFun  | 取消按钮点击回调方法                            | function |           | 否    |