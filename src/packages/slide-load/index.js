import SlideLoad from './gear-slide-load.vue'
import './index.scss'

SlideLoad.install = function (Vue) {
  Vue.component(SlideLoad.name, SlideLoad)
}

export default SlideLoad
