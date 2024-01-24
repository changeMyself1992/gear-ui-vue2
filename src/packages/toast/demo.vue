<template>
  <div class="demo-toast" clstag="07VC|126786">
    <div v-for="(section, index) in source" :key="'section' + index" style="display: flex; flex-direction: column">
      <div :style="index !== 0 ? { 'margin-top': '3px' } : ''" class="section-title">{{ section.section }}</div>
      <gear-button v-for="(item, i) in section.data" :key="'item' + i" @click="buttonClick(item)" class="btn1">
        {{ item.text }}
      </gear-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo-toast',
  data() {
    const source = [
      {
        section: '单行结构（常用）',
        data: [
          {
            text: '警告提示',
            title: '最长文案内容不超过18个字',
            type: 'warn'
          },
          {
            text: '成功提示',
            title: '最长文案内容不超过18个字',
            type: 'success'
          },
          {
            text: '成功提示（有附加信息）',
            title: '签到成功',
            type: 'success',
            message: '今日积分+10'
          },
          {
            text: '失败提示',
            title: '最长文案内容不超过18个字',
            type: 'fail'
          },
          {
            text: '纯文本提示',
            title: '最长文案内容不超过18个字',
            type: 'normal'
          }
        ]
      },
      {
        section: '上下结构（不常用）',
        data: [
          {
            text: '警告提示',
            title: '警告提示',
            size: 'large',
            type: 'warn'
          },
          {
            text: '成功提示',
            title: '成功提示',
            size: 'large',
            type: 'success'
          },
          {
            text: '失败提示',
            title: '失败提示',
            size: 'large',
            type: 'fail'
          },
          {
            text: '加载中',
            title: '加载中…',
            size: 'large',
            type: 'loading'
          }
        ]
      }
    ];
    return {
      headerTitle: 'Toast',
      source
    };
  },
  mounted() {},
  components: {},
  methods: {
    buttonClick(item) {
      this.$Toast({
        title: item.title,
        type: item.type,
        message: item.message,
        size: item.size || 'normal',
        duration: 3000
      });
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/demo';
.demo-toast {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
}
</style>
