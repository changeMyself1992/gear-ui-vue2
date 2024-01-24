import Amount from './gear-amount.vue'
import './index.scss'

Amount.install = function (Vue) {
  Vue.component(Amount.name, Amount)
}

export default Amount
