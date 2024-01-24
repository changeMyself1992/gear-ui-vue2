// TODO: name 需要更改为组件名称
import Name from './gear-name.vue';
import './index.scss';

Name.install = function(Vue) {
  Vue.component(Name.name, Name);
};

export default Name;
