import Dialog from './gear-dialog.vue';
import { Type } from '../../utils/utils';
import './index.scss';

/* 注册 */
Dialog.install = function(Vue) {
  Vue.component(Dialog.name, Dialog);
  // 创建组件构造器
  const DialogObj = Vue.extend(Dialog);
  Vue.prototype.$confirm = function install(options) {
    if (document.querySelector('.gear-dialog-box')) {
      document.body.removeChild(document.querySelector('.gear-dialog-box'));
    }
    const alertComponent = new DialogObj({ el: document.createElement('div') });
    const {
      title, content, unClickBg = false, okBtnTxt, cancelBtnTxt, okCbFun, cancelCbFun, btnBoxStyle = {}, iconClosePro = false, dialogStyle = {}, lockScroll = false
    } = options;

    /* 标题 */
    if (title) {
      alertComponent.title = title;
    }
    /* 内容 */
    if (content) {
      alertComponent.content = content;
    }
    alertComponent.unClickBg = unClickBg;
    if (cancelBtnTxt) {
      const item = {
        text: cancelBtnTxt,
        type: 'white-normal'
      };
      if (cancelCbFun && Type.isFunction(cancelCbFun)) {
        item.cbFun = cancelCbFun;
      }
      alertComponent.btns.push(item);
    }

    if (okBtnTxt) {
      const item = {
        text: okBtnTxt,
        type: 'short'
      };
      if (okCbFun && Type.isFunction(okCbFun)) {
        item.cbFun = okCbFun;
      }
      alertComponent.btns.push(item);
    }
    if (Object.keys(btnBoxStyle).length > 0) {
      alertComponent.btnBoxStyle = btnBoxStyle;
    }
    alertComponent.iconClosePro = iconClosePro;
    if (Object.keys(dialogStyle).length > 0) {
      alertComponent.dialogStyle = dialogStyle;
    }

    alertComponent.lockScroll = lockScroll;
    // console.warn('alertComponent', alertComponent.$el)
    document.body.appendChild(alertComponent.$el);
  };
  
  Vue.prototype.$alert = Vue.prototype.$confirm;
};

export default Dialog;
