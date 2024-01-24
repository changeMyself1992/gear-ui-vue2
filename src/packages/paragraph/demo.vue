<template>
  <div class="paragraph-demo" clstag="X7W5|126792">
    <div class="title">尾部省略</div>
    <div class="box1">
      <gear-paragraph :text="text" :max-lines="1" :showUnfoldFold="false" />
    </div>

    <div class="title">多行省略</div>
    <div class="box1">
      <gear-paragraph
        text="设计师提供给开发工程师的资源的命名应该是清晰准确、分类清楚的，方便开发工程师更高效的使用资源。此规范应作为强制约束，统一无线客户端设计师的资源命名，尽量避免让开发者对资源进行二次命名修改。"
        :max-lines="3"
        :showUnfoldFold="false"
      />
    </div>

    <div class="title">展开收起</div>
    <div class="box1">
      <gear-paragraph
        text="设计师提供给开发工程师的资源的命名应该是清晰准确、分类清楚的，方便开发工程师更高效的使用资源。此规范应作为强制约束，统一无线客户端设计师的资源命名，尽量避免让开发者对资源进行二次命名修改。"
        :max-lines="3"
      />
    </div>

    <!-- <div class="box1">
      <gear-paragraph
        text="设计师提供给开发工程师的资源的命名应该是清晰准确、分类清楚的，方便开发工程师更高效的使用资源。此规范应作为强制约束，统一无线客户端设计师的资源命名，尽量避免让开发者对资源进行二次命名修改。"
        :max-lines="3"
        :expandedDefault="true"
      />
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'demo-paragraph',
  data() {
    return {
      text: ''
    };
  },
  components: {},
  mounted() {
    setTimeout(() => {
      this.text = '设计师提供给开发工程师的资源的命名应该是清晰准确、分类清楚的，方便开发工程师更高效的使用资源。此规范应作为强制约束，统一无线客户端设计师的资源命名，尽量避免让开发者对资源进行二次命名修改。';
    }, 1000);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.paragraph-demo {
  position: relative;
  padding: 0 $padding-sm;
  .title {
    line-height: 40px;
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: #999999;
  }
  .box1 {
    background-color: #fff;
    padding: 16px $padding-sm;
    margin-bottom: 10px;
  }
}
</style>
