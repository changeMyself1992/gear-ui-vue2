// import Vue from 'vue'
import Loading from './main'
import './index.scss'

Loading.install = function (Vue) {
  Vue.prototype.$loading = Loading
}

export default Loading
