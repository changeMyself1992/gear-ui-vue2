import Tabs from './gear-tabs.vue'
import './index.scss'
Tabs.install = function (Vue) {
  Vue.component(Tabs.name, Tabs)
}

export default Tabs
