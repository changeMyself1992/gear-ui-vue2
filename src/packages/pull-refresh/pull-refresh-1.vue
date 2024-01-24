<template>
  <div :class="['pull-refresh', this.type == 1 && 'pull-refresh-gray']">
    <gear-pull-refresh @refresh="handleRefresh" :head-text-color="this.type == 1 ? '#666666' : '#ffffff'">
      <PageContent></PageContent>
    </gear-pull-refresh>
  </div>
</template>

<script>
import PageContent from './page-content.vue';

export default {
  data() {
    return {
      type: 1
    };
  },
  methods: {
    handleRefresh(done) {
      console.log('refresh');
      setTimeout(() => {
        done();
      }, 3000);
    }
  },
  mounted() {},
  components: {
    PageContent
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.pull-refresh {
  text-align: center;
  color: #2c3e50;
  background: #df5645;
  background: linear-gradient(180deg, $redTheme 0%, rgba(244, 245, 247, 1) 30%);

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  &__item {
    margin: 0;
    padding: 0;
    background: #fff;
    line-height: 30px;
    border-bottom: 1px solid #eee;
  }
}
.pull-refresh-gray {
  background: #f4f5f7;
}
</style>
