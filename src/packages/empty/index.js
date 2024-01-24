import Empty from './gear-empty.vue'
import './index.scss'

Empty.install = function (Vue) {
  Vue.component(Empty.name, Empty)
}

export default Empty
