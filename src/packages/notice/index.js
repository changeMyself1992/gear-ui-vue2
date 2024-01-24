import Notice from './gear-notice.vue'
import './index.scss'

Notice.install = function (Vue) {
  Vue.component(Notice.name, Notice)
}

export default Notice
