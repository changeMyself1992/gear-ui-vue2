import Vue from 'vue';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import App from './App.vue';
import router from './router';
import mixin from './view/mixin.js';
import Conf from '../../src/config.json';
import Cell from './components/cell/index.js';
import TextInput from './components/textinput/index.js';
import './touchemulator.js';

import './asset/css/common.scss';

/** GearUI使用方式1：从本地packages引入，一般本地开发组件的时候或者想要快速部署utest查看效果的时候用这种方式(平时开发都把这解开)**** start */
import GearUI from '../../src/index.js';

Vue.config.productionTip = false;

Cell.install(Vue);
TextInput.install(Vue);

GearUI.install(Vue);
/** GearUI使用方式1：从本地packages引入，一般本地开发组件的时候或者想要快速部署utest查看效果的时候用这种方式(平时开发都把这解开)**** end */

/** GearUI使用方式2：用rollup打包后的lib替换@ueip/gear-vue的lib，想要部署到预发查看所有组件是否能正常使用（把这解开，把上面注释）**** start */
// import Gear from '@ueip/gear-vue';
// import "@ueip/gear-vue/lib/index.css";
// Vue.use(Gear);
/** GearUI使用方式2：用rollup打包后的lib替换@ueip/gear-vue的lib，想要部署到预发查看所有组件是否能正常使用（把这解开，把上面注释）**** end */

Vue.mixin(mixin);

OfflinePluginRuntime.install({
  onUpdating: () => {
    console.log('SW Event:', 'onUpdating');
  },
  onUpdateReady: () => {
    console.log('SW Event:', 'onUpdateReady');
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: () => {
    console.log('SW Event:', 'onUpdated');
    console.log('PWA缓存有更新，需要刷新页面');
  },

  onUpdateFailed: () => {
    console.log('SW Event:', 'onUpdateFailed');
  }
});

Vue.prototype.NUTCONF = Conf;

router.beforeEach((to, from, next) => {
  if (to && to.fullPath !== '/index') {
    document.title = to.name || '京东金融APP UI设计系统';
  } else {
    document.title = '京东金融APP UI设计系统';
  }
  /** 当初ui让加上逻辑，忘了干啥用的了，路由切换后要求页面卷曲度要在顶部，先注释掉，加这个功能看起来让页面特别卡！！！！！   start */
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  /** 当初ui让加上逻辑，忘了干啥用的了，路由切换后要求页面卷曲度要在顶部，先注释掉，加这个功能看起来让页面特别卡！！！！！   end */
  next();
});

router.beforeResolve((to, from, next) => {
  next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
});

new Vue({
  el: '#demo',
  router,
  components: { App },
  template: '<App/>'
});
