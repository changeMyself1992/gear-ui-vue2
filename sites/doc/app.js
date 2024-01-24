// import 'core-js/modules/es6.promise';
// import 'core-js/modules/es6.array.iterator';
import Vue from 'vue';
import codes from 'qrcode';
import copy from 'clipboard';
import {
  Menu, MenuItem, Submenu, Dialog, Link, Message 
} from 'element-ui';
import Scrollbar from 'element-ui/lib/scrollbar';
import Richtext from '@ueip/gear-vue/lib/richtext';
import App from './app.vue';
import router from './router';

import backtop from './compents/backtop/index.js';
import './compents/backtop/backtop.scss';

import 'highlight.js/styles/github.css';
import VueStickto from './compents/vue-stickto/VueStickto.js';

import directive from './compents/directives/index';

import { isMobile, demoUrl } from './asset/js/utils.js';

import 'element-ui/lib/theme-chalk/scrollbar.css';

import '@ueip/gear-vue/lib/richtext/index.css';

backtop.install(Vue);

backtop.install(Vue);
Vue.use(VueStickto);
Vue.use(directive);
if (isMobile) {
  const array = window.location.href.split('/');
  window.location.href = `${demoUrl}/${array[array.length - 1]}`;
}
Vue.prototype.copy = copy;
Vue.prototype.qrcode = codes;
Vue.config.productionTip = false;
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Dialog);
Vue.use(Link);
Vue.prototype.$message = Message;
Vue.use(Scrollbar);
Vue.use(Richtext);

new Vue({
  el: '#doc',
  router,
  components: { App },
  template: '<App/>'
});
