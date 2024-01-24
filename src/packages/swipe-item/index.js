import SwipeItem from './gear-swipe-item.vue'
import './index.scss'
import Vue from 'vue';
if (!Vue.prototype.hasOwnProperty('$bus')) {
  Vue.prototype.$bus = new Vue();
}
SwipeItem.install = function (Vue) {
  Vue.component(SwipeItem.name, SwipeItem)
}

export default SwipeItem
