<template>
    <div class="deving">
        <img class="deving_img" :src="devingImg" alt="" srcset="" />
    </div>
</template>

<script>
export default {
  name: 'home-page',
  components: {},
  data: () => ({
    devingImg: ''
  }),
  mounted() {
    // 内容配置平台地址: http://text.jr.jd.com/schema/edit/100004355    ->  开发中背景图
    // 根据UI提的要求, 此图片有可能更改, 用内容配置平台配置方便更改
    this.devingImg = window?.data_source_100004355?.devingBackgroundImg || 'https://static-ftcms.jd.com/p/files/64f0376722e7430b5497f462.png';
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
.deving {
    width: 100vw;
    min-width: 1200px;
    height: calc(100vh - 80px);
    background-image: url('https://static-ftcms.jd.com/p/files/64f03767ef3d47404ece3af6.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    &_img {
        width: 760px;
        height: 450px;
    }
}
</style>
