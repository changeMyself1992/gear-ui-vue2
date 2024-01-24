<template>
  <div class="demo-tabs" clstag="QPS8|126783">
    <div class="section-title">状态栏切换样式</div>
    <gear-button @click="buttonClick('1')" class="btn1"> 置顶标签固定2类目 </gear-button>
    <gear-button @click="buttonClick('2')" class="btn1"> 置顶标签固定3类目 </gear-button>
    <gear-button @click="buttonClick('3')" class="btn1"> 置顶标签多类目 </gear-button>

    <div class="section-title" style="margin-top: 4px">楼层切换样式</div>
      <gear-button @click="buttonClick('4')" class="btn1"> 独立楼层标签切换 </gear-button>
    <gear-button @click="buttonClick('5')" class="btn1"> 独立楼层标题切换 </gear-button>

    <div class="section-title" style="margin-top: 4px">楼层内部切换样式</div>
    <gear-button @click="buttonClick('6')" class="btn1"> 标题切换 </gear-button>
    <gear-button @click="buttonClick('7')" class="btn1"> 标签切换 </gear-button>
    <gear-button @click="buttonClick('8')" class="btn1"> 标题+标签切换 </gear-button>
  </div>
</template>

<script>
export default {
  name: 'demo-tabs',
  components: {},
  data() {
    return {};
  },
  methods: {
    buttonClick(type) {
      this.$router.push({
        path: `/tabs-dome${type}`,
        query: {
          bgStyle: ['1', '2', '3'].includes(type)
            ? {
              'background-color': '#fff'
            }
            : null
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.demo-tabs {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
}
</style>
