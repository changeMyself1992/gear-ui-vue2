import FloorNotice from './gear-floor-notice.vue'
import './index.scss'

FloorNotice.install = function (Vue) {
  Vue.component(FloorNotice.name, FloorNotice)
}

export default FloorNotice
