import DateSelecter from './gear-dates-selecter.vue'
import './index.scss'

DateSelecter.install = function (Vue) {
  Vue.component(DateSelecter.name, DateSelecter)
}

export default DateSelecter
