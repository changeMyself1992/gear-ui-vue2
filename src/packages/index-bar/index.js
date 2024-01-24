import IndexBar from './gear-index-bar.vue'
import './index.scss'
IndexBar.install = function (Vue) {
  Vue.component(IndexBar.name, IndexBar)
}

export default IndexBar
