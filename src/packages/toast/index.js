import Toast from './gear-toast.vue'
import './index.scss'
const toastPool = []
Toast.install = function (Vue) {
  const ToastConstructor = Vue.extend(Toast)
  const getAnInstance = () => {
    if (toastPool.length > 0) {
      const instance = toastPool[0]
      toastPool.splice(0, 1)
      return instance
    }
    return new ToastConstructor({
      el: document.createElement('div')
    })
  }
  Vue.prototype.$toast = (message, bgcolor, duration = 2000) => {
    if (document.querySelector('.gear-toast')) {
      document.body.removeChild(document.querySelector('.gear-toast'))
    }
    const instance = getAnInstance()
    instance.message = message
    if (bgcolor) {
      instance.bgcolor = bgcolor
    }
    instance.show = true
    document.body.appendChild(instance.$el)
    const timer = setTimeout(() => {
      clearTimeout(timer)
      instance.show = false
    }, duration)
  }
  Vue.prototype.$Toast = (toastData = { message: '', bgcolor: '', type: 'normal', size: 'normal', title: '', duration: 200000 }) => {
    // type： warn success fail normal
    let toastData2 = { message: '', bgcolor: '', type: 'normal', size: 'normal', title: '', duration: 200000, ...toastData };
    if (document.querySelector('.gear-toast')) {
      document.body.removeChild(document.querySelector('.gear-toast'))
    }
    const instance = getAnInstance()
    instance.message = toastData2.message
    if (toastData.bgcolor) {
      instance.bgcolor = toastData2.bgcolor
    }
    instance.show = true
    instance.toastData = toastData2
    document.body.appendChild(instance.$el)
    const timer = setTimeout(() => {
      clearTimeout(timer)
      instance.show = false
    }, toastData2.duration)
  }
}
export default Toast
