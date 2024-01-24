import Tab from './gear-tab.vue'
import './index.scss'
Tab.install = function (Vue) {
  Vue.component(Tab.name, Tab)
}

export default Tab
