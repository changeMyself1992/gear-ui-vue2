import Vue from 'vue'
import Loading from './gear-loading.vue'

const LoadingConstructor = Vue.extend(Loading)

const initInstance = function () {
  const instance = new LoadingConstructor({
    el: document.createElement('div')
  })

  instance.show = (options = {}) => {
    if (instance.visible) return
    const { showMsg, message } = options
    instance.showMsg = showMsg !== undefined ? showMsg : true
    instance.message = message || '正在加载'
    if (!document.body.contains(instance.$el)) {
      document.body.appendChild(instance.$el)
    }
    Vue.nextTick(() => {
      instance.visible = true
    })
  }

  instance.close = () => {
    instance.visible = false
    if (document.body.contains(instance.$el)) {
      document.body.removeChild(instance.$el)
    }
  }

  return instance
}

export default initInstance()