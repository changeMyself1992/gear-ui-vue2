import Badge from './gear-badge.vue'
import './index.scss'
Badge.install = function (Vue) {
  Vue.component(Badge.name, Badge)
}

export default Badge
