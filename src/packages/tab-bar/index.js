import TabBar from './gear-tab-bar.vue'
import './index.scss'
TabBar.install = function (Vue) {
  Vue.component(TabBar.name, TabBar)
}

export default TabBar
