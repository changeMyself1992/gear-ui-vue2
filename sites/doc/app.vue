<template>
  <div id="app">
    <div class="md-swaper">
      <div :class="{ 'gear-header': true }">
        <div :class="'gear-header-content ' + 'gear-header-content-2'">
          <div class="gear-header-left" @click="goHome">
            <div class="gear-header-left-icon"></div>
            <div class="gear-header-left-title">京东金融 APP UI 设计系统</div>
          </div>
          <SidebarTop />
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import './asset/css/common.scss';
import './asset/css/style-blue.scss';
import SidebarTop from './compents/sidebar-top';

export default {
  name: 'App',
  data() {
    return {};
  },
  watch: {},
  computed: {},
  components: {
    SidebarTop
  },

  created() {},
  mounted() {},
  methods: {
    goHome() {
      this.$router.push({ name: 'home-page' });
    }
  }
};
</script>
<style lang="scss">
* {
  -webkit-tap-highlight-color: transparent;
}
.md-swaper {
  position: relative;
  background: #fff;
  min-height: 100vh;
  min-width: 1200px;
  box-sizing: border-box;

  .gear-header {
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 20;
    border-bottom: 1px solid #eeeeee;
    box-sizing: content-box;

    .gear-header-content {
      width: 1440px;
      display: flex;
      justify-content: space-between;
      // padding: 0 120px;
      box-sizing: border-box;
    }
    .gear-header-content-2 {
      padding: 0 40px !important;
      width: 100% !important;
    }
    .gear-header-content-3 {
      display: none;
    }
    .gear-header-left {
      display: flex;
      align-items: center;
      height: 80px;
      cursor: pointer;

      .gear-header-left-icon {
        height: 36px;
        width: 36px;
        background-image: url(https://img12.360buyimg.com/imagetools/jfs/t1/54040/7/22049/3655/63b53c29Fe8668642/6042a9f02f1d6a86.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }

      .gear-header-left-title {
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        margin-left: 12px;
        font-size: 18px;
      }
    }
  }
}
</style>
