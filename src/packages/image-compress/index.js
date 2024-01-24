/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangjinglei6
 * @Date: 2022-03-08 15:10:51
 * @LastEditors: zhangjinglei6
 * @LastEditTime: 2022-03-08 20:45:13
 */

import ImageCompress from './gear-image-compress.vue'
import './index.scss'

ImageCompress.install = function (Vue) {
  Vue.component(ImageCompress.name, ImageCompress)
}

export default ImageCompress
