import IndexAnchor from './gear-index-anchor.vue'
import './index.scss'
IndexAnchor.install = function (Vue) {
  Vue.component(IndexAnchor.name, IndexAnchor)
}

export default IndexAnchor
