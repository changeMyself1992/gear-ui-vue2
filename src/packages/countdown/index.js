import Countdown from './countdown.vue';
import './index.scss';

Countdown.install = function (Vue) {
  Vue.component(Countdown.name, Countdown);
}

export default Countdown;