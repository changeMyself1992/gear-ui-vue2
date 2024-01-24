import ScrollView from './gear-scroll-view.vue'
import './index.scss'

ScrollView.install = function (Vue) {
  Vue.component(ScrollView.name, ScrollView)
}

export default ScrollView
