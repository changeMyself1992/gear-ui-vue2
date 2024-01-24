import PullRefresh from './gear-pull-refresh.vue'
import './index.scss'
// import './animate.scss'

PullRefresh.install = function (Vue) {
  Vue.component(PullRefresh.name, PullRefresh)
}

export default PullRefresh
