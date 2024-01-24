import Address from './gear-address.vue'
import './index.scss'
Address.install = function (Vue) {
  Vue.component(Address.name, Address)
}

export default Address
