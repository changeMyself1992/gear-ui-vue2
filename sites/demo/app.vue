<template>
  <div :class="['demo-wrapper', { 'in-iframe': inIframe }]">
    <keep-alive include="index">
      <router-view name="main"></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      inIframe: false
    };
  },
  watch: {
    $route: 'fetchData'
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }

    // 回退路由
    window.backRoute = () => {
      console.log('收到父页面的路由回退要求');
      this.$router.go(-1);
    };

    window.onload = () => {
      if (window.parent.window.demoWindowOnload) {
        window.parent.window.demoWindowOnload();
      }
    };
  },
  methods: {
    fetchData(obj) {
      if (window.name === 'childrenName') {
        // 设置标签栏名称
        if (obj.name) {
          window.parent.window.setChnName(obj.name);
        }
        // 代表是导航栏点击进来的
        if (obj.query && obj.query.ver) {
          window.parent.window.initStyle();
        } else {
          // 代表是demo按钮点击进来的，显示返回按钮
          // 沉浸式会给标签栏设置自定义样式
          if (obj.query && obj.query.backStyle) {
            window.parent.window.setBackStyle(obj.query.backStyle);
          } else {
            window.parent.window.setBackStyle({
              display: 'block',
              'background-image': 'url(\'https://img10.360buyimg.com/imagetools/jfs/t1/182863/9/26795/1612/62bbc0e5E693912c9/cd5bd4ea86ad8b82.png\')'
            });
          }
          if (obj.query && obj.query.bgStyle) {
            window.parent.window.setBgStyle(obj.query.bgStyle);
          }
          if (obj.query && obj.query.chnNameStyle) {
            window.parent.window.setChnNameStyle(obj.query.chnNameStyle);
          }
          if (obj.query && obj.query.img1Url) {
            window.parent.window.setImg1Url(obj.query.img1Url);
          }
        }
      }
    }
  }
};
</script>
<style lang="scss">
.demo-wrapper {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background: #f4f5f7;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  &::before,
  &::after {
    content: '';
    display: table;
    clear: both;
  }

  &.in-iframe {
    padding-top: 0;
  }
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
